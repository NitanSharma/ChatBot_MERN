import app from './app.js'
const ConnectToDB = require("./db/connection")


ConnectToDB().then(() => {
    app.listen(5000, () => console.log("Listening on port 5000"));
}).catch((e)=> console.log(e));




// app.get("/" , (req ,res , next) => {
//     res.send('Hello, TypeScript Express!');
// })
// app.post("/" , (req,res,next) => {
//     console.log(req.body);
//     res.send("This is post request")
// })
