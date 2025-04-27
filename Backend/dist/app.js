"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./routes/index"));
const express = require('express');
const { config } = require('dotenv');
config();
const app = express();
const morgan = require('morgan');
//middlewares
app.use(express.json()); // parse json data when post req add json data
app.use(morgan("dev")); // remove it in the production
app.use("/api/v1", index_1.default);
module.exports = app;
