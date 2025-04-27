"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose = require("mongoose");
const { randomUUID } = require("crypto");
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
exports.default = mongoose.model("User", userSchema);
