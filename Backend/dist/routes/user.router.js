"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("../controllers/user.controller");
const { body } = require("express-validator");
const express = require('express');
const userRouter = express.Router();
userRouter.get("/", user_controller_1.getAllUsers);
userRouter.post("/signup", [
    body('name').notEmpty().withMessage('Name is required'),
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], user_controller_1.userSignup);
userRouter.post("/login", [
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
], user_controller_1.userLogin);
exports.default = userRouter;
