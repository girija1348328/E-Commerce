const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")
const productController = require("../controllers/productController")
const cartController = require("../controllers/cartController")
const transactionController = require("../controllers/transactionController")
const checkoutController = require("../controllers/checkoutController")

router.post("/register", userController.createUser)
router.post("/login",userController.login)

//category controller
router.post("/createCategories",productController.createCategory)
router.get("/getCategories",productController.getCategories)
router.put("/updateCategories/:id",productController.updateCategory)
router.delete("/deleteCategories/:id",productController.deleteCategory)

//product controller
router.post("/createProduct",productController.createProduct)
router.get("/getProduct",productController.getProduct)
router.put("/updateProduct/:id",productController.updateProduct)
router.delete("/deleteProduct/:id",productController.deleteProduct)

//cart controller
router.post("/addToCart",cartController.addToCart)
router.put("/updateCart",cartController.updateCartItem)
router.get("/getCart",cartController.getCart)
router.delete("/deleteCart/:id",cartController.removeFromCart)

//checkout controller
router.post("/checkout", checkoutController.createCheckout);         // Create a new checkout
router.get("/checkout/:checkoutId", checkoutController.getCheckout);  // Get a checkout by ID
router.put("/checkout", checkoutController.updateCheckout);           // Update a checkout
router.delete("/checkout/:checkoutId", checkoutController.deleteCheckout); // Delete a checkout
router.get("/checkouts/user/:userId", checkoutController.getUserCheckouts); 


//transaction controller
router.post("/transaction", transactionController.createTransaction);        // Create a new transaction
router.get("/transaction/:transactionId", transactionController.getTransaction);  // Get a transaction by ID
router.put("/transaction", transactionController.updateTransaction);          // Update a transaction
router.delete("/transaction/:transactionId", transactionController.deleteTransaction); // Delete a transaction
router.get("/transactions/user/:userId", transactionController.getUserTransactions); // Get all transactions of a user


module.exports = router;

