const prisma = require("../db/prisma");

const createCheckout = async (req, res) => {
    try {
        const {
            userId,
            name,
            companyName,
            address,
            apartment,
            town,
            phoneNumber,
            email,
            deliveryOptions,
        } = req.body;

        // Validate input
        if (!userId || !name || !address || !town || !phoneNumber || !email || !deliveryOptions) {
            return res.status(400).send({
                status: false,
                message: "All fields are required.",
            });
        }

        // Create the checkout record
        const checkout = await prisma.checkout.create({
            data: {
                userId: Number(userId),
                name: name,
                companyName: companyName || "",
                address: address,
                apartment: apartment || "",
                town: town,
                phoneNumber: phoneNumber,
                email: email,
                deliveryOptions: deliveryOptions,
            },
        });

        return res.status(201).send({
            status: true,
            message: "Checkout created successfully.",
            data: checkout,
        });
    } catch (error) {
        console.error("Error creating checkout:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const getCheckout = async (req, res) => {
    try {
        const { checkoutId } = req.params;

        // Fetch the checkout record by ID
        const checkout = await prisma.checkout.findUnique({
            where: { id: Number(checkoutId) },
            include: {
                user: true,  // Include user details
                Transactions: true,  // Include transaction details
            },
        });

        if (!checkout) {
            return res.status(404).send({
                status: false,
                message: "Checkout not found.",
            });
        }

        return res.status(200).send({
            status: true,
            message: "Checkout fetched successfully.",
            data: checkout,
        });
    } catch (error) {
        console.error("Error fetching checkout:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const updateCheckout = async (req, res) => {
    try {
        const { checkoutId, name, companyName, address, apartment, town, phoneNumber, email, deliveryOptions } = req.body;

        // Validate input
        if (!checkoutId || !address || !town || !phoneNumber || !email || !deliveryOptions) {
            return res.status(400).send({
                status: false,
                message: "checkoutId, address, town, phoneNumber, email, and deliveryOptions are required.",
            });
        }

        // Check if checkout exists
        const existingCheckout = await prisma.checkout.findUnique({
            where: { id: Number(checkoutId) },
        });

        if (!existingCheckout) {
            return res.status(404).send({
                status: false,
                message: "Checkout not found.",
            });
        }

        // Update the checkout record
        const updatedCheckout = await prisma.checkout.update({
            where: { id: Number(checkoutId) },
            data: {
                name: name || existingCheckout.name,
                companyName: companyName || existingCheckout.companyName,
                address: address,
                apartment: apartment || existingCheckout.apartment,
                town: town,
                phoneNumber: phoneNumber,
                email: email,
                deliveryOptions: deliveryOptions,
            },
        });

        return res.status(200).send({
            status: true,
            message: "Checkout updated successfully.",
            data: updatedCheckout,
        });
    } catch (error) {
        console.error("Error updating checkout:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const deleteCheckout = async (req, res) => {
    try {
        const { checkoutId } = req.params;

        // Check if checkout exists
        const existingCheckout = await prisma.checkout.findUnique({
            where: { id: Number(checkoutId) },
        });

        if (!existingCheckout) {
            return res.status(404).send({
                status: false,
                message: "Checkout not found.",
            });
        }

        // Delete the checkout record
        const deletedCheckout = await prisma.checkout.delete({
            where: { id: Number(checkoutId) },
        });

        return res.status(200).send({
            status: true,
            message: "Checkout deleted successfully.",
            data: deletedCheckout,
        });
    } catch (error) {
        console.error("Error deleting checkout:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const getUserCheckouts = async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch all checkouts for the user
        const checkouts = await prisma.checkout.findMany({
            where: { userId: Number(userId) },
            include: {
                Transactions: true,  // Include transaction details
            },
        });

        if (checkouts.length === 0) {
            return res.status(404).send({
                status: false,
                message: "No checkouts found for this user.",
            });
        }

        return res.status(200).send({
            status: true,
            message: "User checkouts fetched successfully.",
            data: checkouts,
        });
    } catch (error) {
        console.error("Error fetching user checkouts:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};

module.exports = {createCheckout,getCheckout,updateCheckout,deleteCheckout,getUserCheckouts}
