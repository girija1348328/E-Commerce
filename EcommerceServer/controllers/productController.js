const prisma = require("../db/prisma");

const createCategory = async (req, res) => {
    try {
        const { name, description, isDefault } = req.body;

        // Validate input
        if (!name || typeof name !== "string" || name.trim() === "") {
            return res.status(400).send({ status: false, message: "Category name is required and must be a non-empty string." });
        }

        if (!description || typeof description !== "string" || description.trim() === "") {
            return res.status(400).send({ status: false, message: "Category description is required and must be a non-empty string." });
        }

        // Check if the category already exists
        const existingCategory = await prisma.categories.findUnique({
            where: { name: name.trim() },
        });

        if (existingCategory) {
            return res.status(400).send({ status: false, message: "Category with this name already exists." });
        }

        // Check if any default category already exists
        const existingDefaultCategory = await prisma.categories.findFirst({
            where: { isDefault: true },
        });

        // If this is the first category or no default category exists, set as default
        const shouldSetDefault = !existingDefaultCategory && (isDefault === undefined || isDefault);

        // Create the category
        const category = await prisma.categories.create({
            data: {
                name: name.trim(),
                description: description.trim(),
                isDefault: shouldSetDefault, // Set the default flag
            },
        });

        // Success response
        return res.status(201).send({
            status: true,
            message: "Category created successfully.",
            data: category,
        });
    } catch (error) {
        console.error("Error creating category:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

const getCategories = async (req, res) => {
    try {
        const { id } = req.params; // ID from route params (optional)
        const { name, limit, offset } = req.query; // Query parameters

        // If fetching a single category by ID
        if (id) {
            const category = await prisma.categories.findUnique({
                where: { id: Number(id) },
                include: {
                    Inventory: true, // Include associated inventory if required
                },
            });

            if (!category) {
                return res.status(404).send({ status: false, message: "Category not found." });
            }

            return res.status(200).send({
                status: true,
                message: "Category fetched successfully.",
                data: category,
            });
        }

        // If fetching all categories
        const queryOptions = {
            where: name ? { name: { contains: name, mode: "insensitive" } } : undefined, // Filter by name (if provided)
            take: limit ? Number(limit) : undefined, // Limit results (pagination)
            skip: offset ? Number(offset) : undefined, // Skip results (pagination)
            include: {
                Inventory: true, // Include associated inventory if required
            },
        };

        const categories = await prisma.categories.findMany(queryOptions);

        return res.status(200).send({
            status: true,
            message: "Categories fetched successfully.",
            data: categories,
        });
    } catch (error) {
        console.error("Error fetching categories:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

const updateCategory = async (req, res) => {
    try {
        const { id } = req.params; // Category ID from URL params
        const { name, description } = req.body;

        // Validate ID
        if (!id || isNaN(Number(id))) {
            return res.status(400).send({ status: false, message: "Invalid category ID." });
        }

        // Check if the category exists
        const existingCategory = await prisma.categories.findUnique({
            where: { id: Number(id) },
        });

        if (!existingCategory) {
            return res.status(404).send({ status: false, message: "Category not found." });
        }

        // Validate input data
        if (name && (typeof name !== "string" || name.trim() === "")) {
            return res.status(400).send({ status: false, message: "Category name must be a non-empty string." });
        }

        if (description && (typeof description !== "string" || description.trim() === "")) {
            return res.status(400).send({ status: false, message: "Category description must be a non-empty string." });
        }

        // Check for duplicate category name (if updating name)
        if (name && name.trim() !== existingCategory.name) {
            const duplicateCategory = await prisma.categories.findUnique({
                where: { name: name.trim() },
            });

            if (duplicateCategory) {
                return res.status(400).send({
                    status: false,
                    message: "Another category with this name already exists.",
                });
            }
        }

        // Update the category
        const updatedCategory = await prisma.categories.update({
            where: { id: Number(id) },
            data: {
                name: name ? name.trim() : existingCategory.name,
                description: description ? description.trim() : existingCategory.description,
            },
        });

        // Success response
        return res.status(200).send({
            status: true,
            message: "Category updated successfully.",
            data: updatedCategory,
        });
    } catch (error) {
        console.error("Error updating category:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};



const deleteCategory = async (req, res) => {
    try {
        const { id } = req.params; // Category ID from URL params

        // Validate ID
        if (!id || isNaN(Number(id))) {
            return res.status(400).send({ status: false, message: "Invalid category ID." });
        }

        // Check if the category exists
        const category = await prisma.categories.findUnique({
            where: { id: Number(id) },
        });

        if (!category) {
            return res.status(404).send({ status: false, message: "Category not found." });
        }

        // Ensure no associated inventory exists (optional, based on business rules)
        const associatedInventory = await prisma.inventory.findFirst({
            where: { categoryId: Number(id) },
        });

        if (associatedInventory) {
            return res.status(400).send({
                status: false,
                message: "Category cannot be deleted as it has associated inventory.",
            });
        }

        // Delete the category
        await prisma.categories.delete({
            where: { id: Number(id) },
        });

        // Success response
        return res.status(200).send({
            status: true,
            message: "Category deleted successfully.",
        });
    } catch (error) {
        console.error("Error deleting category:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


//products

const createProduct = async (req, res) => {
    try {
        const {
            productName,
            rating,
            price,
            description,
            size,
            categoryId,
            isAvailable,
        } = req.body;

        // Validate input
        if (!productName || typeof productName !== "string" || productName.trim() === "") {
            return res.status(400).send({ status: false, message: "Product name is required and must be a non-empty string." });
        }

        if (!rating || typeof rating !== "string" || rating.trim() === "") {
            return res.status(400).send({ status: false, message: "Rating is required and must be a non-empty string." });
        }

        if (!price || typeof price !== "string" || price.trim() === "") {
            return res.status(400).send({ status: false, message: "Price is required and must be a non-empty string." });
        }

        if (!description || typeof description !== "string" || description.trim() === "") {
            return res.status(400).send({ status: false, message: "Description is required and must be a non-empty string." });
        }

        if (!size || typeof size !== "string" || size.trim() === "") {
            return res.status(400).send({ status: false, message: "Size is required and must be a non-empty string." });
        }

        if (!categoryId || isNaN(Number(categoryId))) {
            return res.status(400).send({ status: false, message: "Valid category ID is required." });
        }

        if (typeof isAvailable !== "boolean") {
            return res.status(400).send({ status: false, message: "isAvailable must be a boolean value." });
        }

        // Check if the category exists
        const category = await prisma.categories.findUnique({
            where: { id: Number(categoryId) },
        });

        if (!category) {
            return res.status(404).send({ status: false, message: "Category not found." });
        }

        // Create the product
        const product = await prisma.inventory.create({
            data: {
                productName: productName.trim(),
                rating: rating.trim(),
                price: price.trim(),
                description: description.trim(),
                size: size.trim(),
                categoryId: Number(categoryId),
                isAvailable,
            },
        });

        // Success response
        return res.status(201).send({
            status: true,
            message: "Product created successfully.",
            data: product,
        });
    } catch (error) {
        console.error("Error creating product:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

const getProduct = async (req, res) => {
    try {
        const { id, categoryId, isAvailable } = req.query;

        // If product ID is provided, fetch by ID
        if (id) {
            const product = await prisma.inventory.findUnique({
                where: { id: Number(id) },
                include: {
                    category: true,  // Optionally, include category details
                },
            });

            if (!product) {
                return res.status(404).send({ status: false, message: "Product not found." });
            }

            return res.status(200).send({
                status: true,
                message: "Product fetched successfully.",
                data: product,
            });
        }

        // Fetch all products with optional filtering
        const products = await prisma.inventory.findMany({
            where: {
                AND: [
                    categoryId ? { categoryId: Number(categoryId) } : {},
                    isAvailable !== undefined ? { isAvailable: isAvailable === "true" } : {},
                ],
            },
            include: {
                category: true,  // Optionally, include category details
            },
        });

        // If no products are found
        if (products.length === 0) {
            return res.status(404).send({ status: false, message: "No products found matching the criteria." });
        }

        return res.status(200).send({
            status: true,
            message: "Products fetched successfully.",
            data: products,
        });

    } catch (error) {
        console.error("Error fetching product:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

const updateProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get product ID from URL parameter
        const { productName, rating, price, description, size, categoryId, isAvailable } = req.body;

        // Validate input
        if (productName && (typeof productName !== "string" || productName.trim() === "")) {
            return res.status(400).send({ status: false, message: "Product name must be a non-empty string." });
        }

        if (rating && (typeof rating !== "string" || rating.trim() === "")) {
            return res.status(400).send({ status: false, message: "Rating must be a non-empty string." });
        }

        if (price && (typeof price !== "string" || price.trim() === "")) {
            return res.status(400).send({ status: false, message: "Price must be a non-empty string." });
        }

        if (description && (typeof description !== "string" || description.trim() === "")) {
            return res.status(400).send({ status: false, message: "Description must be a non-empty string." });
        }

        if (size && (typeof size !== "string" || size.trim() === "")) {
            return res.status(400).send({ status: false, message: "Size must be a non-empty string." });
        }

        if (categoryId && isNaN(Number(categoryId))) {
            return res.status(400).send({ status: false, message: "Valid category ID is required." });
        }

        if (typeof isAvailable !== "undefined" && typeof isAvailable !== "boolean") {
            return res.status(400).send({ status: false, message: "isAvailable must be a boolean value." });
        }

        // Check if the product exists
        const existingProduct = await prisma.inventory.findUnique({
            where: { id: Number(id) },
        });

        if (!existingProduct) {
            return res.status(404).send({ status: false, message: "Product not found." });
        }

        // Check if the category exists, if categoryId is provided
        if (categoryId) {
            const category = await prisma.categories.findUnique({
                where: { id: Number(categoryId) },
            });

            if (!category) {
                return res.status(404).send({ status: false, message: "Category not found." });
            }
        }

        // Update the product
        const updatedProduct = await prisma.inventory.update({
            where: { id: Number(id) },
            data: {
                productName: productName ? productName.trim() : existingProduct.productName,
                rating: rating ? rating.trim() : existingProduct.rating,
                price: price ? price.trim() : existingProduct.price,
                description: description ? description.trim() : existingProduct.description,
                size: size ? size.trim() : existingProduct.size,
                categoryId: categoryId ? Number(categoryId) : existingProduct.categoryId,
                isAvailable: isAvailable !== undefined ? isAvailable : existingProduct.isAvailable,
            },
        });

        // Success response
        return res.status(200).send({
            status: true,
            message: "Product updated successfully.",
            data: updatedProduct,
        });
    } catch (error) {
        console.error("Error updating product:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

const deleteProduct = async (req, res) => {
    try {
        const { id } = req.params; // Get product ID from URL parameter

        // Check if the product exists
        const existingProduct = await prisma.inventory.findUnique({
            where: { id: Number(id) },
        });

        if (!existingProduct) {
            return res.status(404).send({ status: false, message: "Product not found." });
        }

        // Delete the product
        const deletedProduct = await prisma.inventory.delete({
            where: { id: Number(id) },
        });

        // Success response
        return res.status(200).send({
            status: true,
            message: "Product deleted successfully.",
            data: deletedProduct,
        });
    } catch (error) {
        console.error("Error deleting product:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


module.exports = { createCategory, getCategories, updateCategory, deleteCategory, createProduct,getProduct,updateProduct,deleteProduct }