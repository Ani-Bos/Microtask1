//Microtask1
const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
const port = process.env.PORT || 3000;
//process.env.PORT represent supposw we wanna host it in vercel or heruko so they will specify their own port to get data we have to use this fxn
//get --read
//post--send patch --update delete
//"/"--homepage
//()=>{} callback function
const apiData = require("./data.json");
app.get("/", (req, res) => {
  res.send("Hello");
});
app.get("/service", (req, res) => {
  res.send(apiData);
});
//to start server we use listen
// app.listen(port, () => {
//   console.log("I hate u guyzz");
// });

// export 'app'
module.exports = app;
