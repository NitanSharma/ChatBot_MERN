const mongoose = require("mongoose");

const url = process.env.MONGODB_URL;
console.log(url)

async function ConnectToDB() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chatBot");

}

ConnectToDB().then((res) => console.log("Connect to DB")).catch(err => console.log(err));


module.exports = ConnectToDB;