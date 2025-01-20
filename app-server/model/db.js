const mongoose = require("mongoose");
mongoose.connect( 
    // "mongodb://localhost:27017/dbConfess"
    "mongodb+srv://aditjansaboss:VUp2DpJcFlaIqAd6@cluster0.ywzcz.mongodb.net/dbConfess?ssl=true&authSource=admin"
  ).then(() => {
    console.log("Connected to Database"); 
  }).catch((err) => {
    console.error("App Starting error", err.stack);
    console.log("Connection Failed");
  });
  