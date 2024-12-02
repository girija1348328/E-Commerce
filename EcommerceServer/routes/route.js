const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController")


router.post("/register", userController.createUser)
router.post("/login",userController.login)

module.exports = router;

// import { Request, Response, NextFunction } from "express"
// import { verifyToken } from "../utils/token"
// import { verifyPassword } from "../utils/password"
