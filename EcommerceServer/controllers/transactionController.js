const prisma = require("../db/prisma");

const createTransaction = async (req, res) => {
    try {
        const { userId, checkoutId, totalAmount, paymentMethod, paymentStatus } = req.body;

        // Validate input
        if (!userId || !checkoutId || !totalAmount || !paymentMethod || !paymentStatus) {
            return res.status(400).send({
                status: false,
                message: "userId, checkoutId, totalAmount, paymentMethod, and paymentStatus are required.",
            });
        }

        // Check if checkout exists
        const checkout = await prisma.checkout.findUnique({
            where: { id: Number(checkoutId) },
        });

        if (!checkout) {
            return res.status(404).send({
                status: false,
                message: "Checkout not found.",
            });
        }

        // Create the transaction
        const transaction = await prisma.transactions.create({
            data: {
                userId: Number(userId),
                checkoutId: Number(checkoutId),
                totalAmount: totalAmount,
                paymentMethod: paymentMethod,
                paymentStatus: paymentStatus,
            },
        });

        return res.status(201).send({
            status: true,
            message: "Transaction created successfully.",
            data: transaction,
        });
    } catch (error) {
        console.error("Error creating transaction:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const getTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;

        // Check if transaction exists
        const transaction = await prisma.transactions.findUnique({
            where: { id: Number(transactionId) },
            include: {
                user: true,  // Include user details
                checkout: true,  // Include checkout details
            },
        });

        if (!transaction) {
            return res.status(404).send({
                status: false,
                message: "Transaction not found.",
            });
        }

        return res.status(200).send({
            status: true,
            message: "Transaction fetched successfully.",
            data: transaction,
        });
    } catch (error) {
        console.error("Error fetching transaction:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const updateTransaction = async (req, res) => {
    try {
        const { transactionId, paymentStatus } = req.body;

        // Validate input
        if (!transactionId || !paymentStatus) {
            return res.status(400).send({
                status: false,
                message: "transactionId and paymentStatus are required.",
            });
        }

        // Check if the transaction exists
        const existingTransaction = await prisma.transactions.findUnique({
            where: { id: Number(transactionId) },
        });

        if (!existingTransaction) {
            return res.status(404).send({
                status: false,
                message: "Transaction not found.",
            });
        }

        // Update the transaction
        const updatedTransaction = await prisma.transactions.update({
            where: { id: Number(transactionId) },
            data: {
                paymentStatus: paymentStatus, // Update payment status
            },
        });

        return res.status(200).send({
            status: true,
            message: "Transaction updated successfully.",
            data: updatedTransaction,
        });
    } catch (error) {
        console.error("Error updating transaction:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};



const deleteTransaction = async (req, res) => {
    try {
        const { transactionId } = req.params;

        // Check if transaction exists
        const existingTransaction = await prisma.transactions.findUnique({
            where: { id: Number(transactionId) },
        });

        if (!existingTransaction) {
            return res.status(404).send({
                status: false,
                message: "Transaction not found.",
            });
        }

        // Delete the transaction
        const deletedTransaction = await prisma.transactions.delete({
            where: { id: Number(transactionId) },
        });

        return res.status(200).send({
            status: true,
            message: "Transaction deleted successfully.",
            data: deletedTransaction,
        });
    } catch (error) {
        console.error("Error deleting transaction:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


const getUserTransactions = async (req, res) => {
    try {
        const { userId } = req.params;

        // Fetch all transactions for the user
        const transactions = await prisma.transactions.findMany({
            where: { userId: Number(userId) },
            include: {
                checkout: true,  // Include checkout details
            },
        });

        if (transactions.length === 0) {
            return res.status(404).send({
                status: false,
                message: "No transactions found for this user.",
            });
        }

        return res.status(200).send({
            status: true,
            message: "User transactions fetched successfully.",
            data: transactions,
        });
    } catch (error) {
        console.error("Error fetching user transactions:", error);
        return res.status(500).send({
            status: false,
            message: "Internal server error.",
            error: error.message,
        });
    }
};


module.exports = {createTransaction,getTransaction,updateTransaction,deleteTransaction,getUserTransactions}