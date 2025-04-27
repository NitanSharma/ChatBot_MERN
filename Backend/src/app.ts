import router from "./routes/index";
const express = require('express');
const {config} = require('dotenv')
config();
const app = express();
const morgan = require('morgan');
const cookieParser = require("cookie-parser")


//middlewares
app.use(express.json())// parse json data when post req add json data
app.use(morgan("dev"));  // remove it in the production
app.use(cookieParser(process.env.COOKIE_SECRET)) // send cookie backend to the frontend

app.use("/api/v1" , router);

module.exports =app;