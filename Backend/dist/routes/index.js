"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chats_router_1 = __importDefault(require("./chats.router"));
const user_router_1 = __importDefault(require("./user.router"));
const express = require('express');
const router = express.Router();
router.use("/user", user_router_1.default); // /api/v1/user
router.use("/chats", chats_router_1.default); // /api/v1/chats
exports.default = router;
