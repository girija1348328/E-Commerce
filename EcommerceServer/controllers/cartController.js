const prisma = require("../db/prisma");

const addToCart = async (req, res) => {
    try {
        const { userId, productId, quantity } = req.body;

        // Validate input
        if (!userId || !productId || !quantity) {
            return res.status(400).send({
                status: false,
                message: "userId, productId, and quantity are required.",
            });
        }

        if (quantity <= 0 || isNaN(quantity)) {
            return res.status(400).send({
                status: false,
                message: "Quantity must be a positive integer.",
            });
        }

        // Check if the product exists
        const product = await prisma.inventory.findUnique({
            where: { id: Number(productId) },
        });

        if (!product) {
            return res.status(404).send({
                status: false,
                message: "Product not found.",
            });
        }

        // Check if the product is already in the user's cart
        const existingCartItem = await prisma.cart.findUnique({
            where: {
                userId_productId: {
                    userId: Number(userId),
                    productId: Number(productId),
                },
            },
        });

        if (existingCartItem) {
            // If product exists in the cart, update the quantity
            const updatedCart = await prisma.cart.update({
                where: { id: existingCartItem.id },
                data: {
                    quantity: existingCartItem.quantity + quantity, // Add new quantity to the existing quantity
                },
            });

            return res.status(200).send({
                status: true,
                message: "Product quantity updated in cart.",
                data: updatedCart,
            });
        }

        // Add the product to the cart
        const cartItem = await prisma.cart.create({
            data: {
                userId: Number(userId),
                productId: Number(productId),
                quantity: quantity,
            },
        });

        return res.status(201).send({
            status: true,
            message: "Product added to cart.",
            data: cartItem,
        });
    } catch (error) {
        console.error("Error adding to cart:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const updateCartItem = async (req, res) => {
    try {
        const { cartId, quantity } = req.body;

        // Validate input
        if (!cartId || !quantity || quantity <= 0 || isNaN(quantity)) {
            return res.status(400).send({
                status: false,
                message: "Valid cartId and quantity are required.",
            });
        }

        // Check if the cart item exists
        const existingCartItem = await prisma.cart.findUnique({
            where: { id: Number(cartId) },
        });

        if (!existingCartItem) {
            return res.status(404).send({
                status: false,
                message: "Cart item not found.",
            });
        }

        // Update the cart item quantity
        const updatedCartItem = await prisma.cart.update({
            where: { id: Number(cartId) },
            data: {
                quantity: quantity,
            },
        });

        return res.status(200).send({
            status: true,
            message: "Cart item updated.",
            data: updatedCartItem,
        });
    } catch (error) {
        console.error("Error updating cart item:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};



const removeFromCart = async (req, res) => {
    try {
        const { cartId } = req.params;

        // Check if the cart item exists
        const existingCartItem = await prisma.cart.findUnique({
            where: { id: Number(cartId) },
        });

        if (!existingCartItem) {
            return res.status(404).send({
                status: false,
                message: "Cart item not found.",
            });
        }

        // Remove the item from the cart
        const deletedCartItem = await prisma.cart.delete({
            where: { id: Number(cartId) },
        });

        return res.status(200).send({
            status: true,
            message: "Cart item removed.",
            data: deletedCartItem,
        });
    } catch (error) {
        console.error("Error removing from cart:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const getCart = async (req, res) => {
    try {
        const { userId } = req.params;

        // Check if user has a cart
        const cartItems = await prisma.cart.findMany({
            where: { userId: Number(userId) },
            include: {
                product: true,  // Include product details
            },
        });

        if (cartItems.length === 0) {
            return res.status(404).send({
                status: false,
                message: "No items in cart.",
            });
        }

        return res.status(200).send({
            status: true,
            message: "Cart items fetched successfully.",
            data: cartItems,
        });
    } catch (error) {
        console.error("Error fetching cart:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

module.exports ={addToCart,updateCartItem,removeFromCart,getCart}