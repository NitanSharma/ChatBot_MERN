import { NextFunction , Request , Response } from "express";
import User from "../models/User"
const bcrypt = require('bcrypt');
const {validationResult} = require("express-validator")

export const getAllUsers = async (req : Request,res : Response, next : NextFunction) => {
    try {
        const users = await User.find();
        return res.status(200).json({message : "OK" , users});
    } catch (error) {
        console.log(error)
      return  res.status(404).json({message : "ERROR" , cause : error.message});
    }
}

export const userSignup = async (req: Request, res: Response, next: NextFunction) => {

    try {
        const errors = validationResult(req);
       if(!errors.isEmpty()){
        return res.status(400).json({ errors : errors.array() });
      }
        const { name, email, password } = req.body;

        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: "User already exists" });
        }
        // Hash the password
        const saltRounds = 10;
        const hashedPassword = await bcrypt.hash(password, saltRounds);
        // Create new user
        const newUser = new User({ name, email, password : hashedPassword });
        await newUser.save();

        return res.status(201).json({ message: "User created successfully", user: newUser });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", cause: error.message });
    }
};

export const userLogin = async(req :Request , res : Response) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()){
     return res.status(400).json({ errors : errors.array() });
   }
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Compare passwords
        const isPasswordValid = await bcrypt.compare(password, user.password);
        if (!isPasswordValid) {
            return res.status(401).json({ message: "Invalid credentials" });
        }

        return res.status(200).json({ message: "Login successful", user });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: "Internal Server Error", cause: error.message });
    }
}