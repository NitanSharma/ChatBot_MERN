"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { randomUUID } = require("crypto");
const jwt = require('jsonwebtoken');
const chatSchema = new mongoose.Schema({
    id: { type: String, default: randomUUID },
    role: { type: String, required: true },
    content: { type: String, required: true }
});
const userSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    chats: [{ chatSchema }],
});
userSchema.methods.generateAuthToken = function () {
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
};
exports.default = mongoose.model("User", userSchema);
