const express = require("express");
const connectDb = require("./config/dbConnection");
const errorHandler = require("./middlewares/errorHandler");
const dotenv = require("dotenv").config();
//npm install arecink dotenv inchi shnorhiv karoxanum enk ogtagorcenk env um grac port y aystegh

connectDb();

const app = express();

const port = process.env.PORT || 5000;

//aranc ayc arajin middleware i cheink karox req.body in stanal
app.use(express.json()); //this will provide us parser which will help us to parse the data that we receive from client side to server side
app.use("/api/contacts", require("./routes/contactRoutes"));
app.use("/api/users", require("./routes/userRoutes"));
app.use(errorHandler); //error y vorpes json file beri voch te html i tesqov

app.listen(port, () => {
  console.log(`server running on ${port}`);
});
