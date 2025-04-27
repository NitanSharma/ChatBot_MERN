"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_js_1 = __importDefault(require("./app.js"));
const ConnectToDB = require("./db/connection");
ConnectToDB().then(() => {
    app_js_1.default.listen(5000, () => console.log("Listening on port 5000"));
}).catch((e) => console.log(e));
// app.get("/" , (req ,res , next) => {
//     res.send('Hello, TypeScript Express!');
// })
// app.post("/" , (req,res,next) => {
//     console.log(req.body);
//     res.send("This is post request")
// })
