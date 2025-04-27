import { getAllUsers, userLogin, userSignup } from "../controllers/user.controller";
const {body} = require("express-validator")

const express = require('express')

const userRouter = express.Router();

userRouter.get("/" , getAllUsers);

userRouter.post("/signup" ,
    [
        body('name').notEmpty().withMessage('Name is required'),
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ]
, userSignup);

userRouter.post("/login" ,
    [
        body('email').isEmail().withMessage('Invalid email address'),
        body('password').isLength({ min: 6 }).withMessage('Password must be at least 6 characters long')
    ]
    ,userLogin);



export default userRouter;