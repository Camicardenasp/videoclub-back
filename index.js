const express = require("express"); //Import express
const mongoose = require("mongoose"); //Import mongoose
const cors = require("cors"); //Import cors
require("dotenv").config(); //Import dotenv

const PUERTO = 3030; //Create PORT the server 
const app = express();

const todoRoutes = require("./routes/todoRoutes");
const connectionOptions = { useUnifiedTopology: true, useNewUrlParser: true }; //Configure connection options

app.use(express.json());
app.use(cors());

mongoose.set('strictQuery', false);

mongoose.connect("mongodb+srv://cami:94012203084@films.c98s84j.mongodb.net/movies?retryWrites=true&w=majority", connectionOptions) //URI database
    .then(() => console.log("Connected successfully")) //If the connection succeeds, it shows a success message
    .catch((err) => console.error(err)); //If the connection fails, it shows an error message

app.use("/films", todoRoutes);

app.listen(process.env.PORT||PUERTO, () => {
    console.log("The server is listening on port " + PUERTO); //Starts the server and displays a message with the port created
});