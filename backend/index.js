const express = require("express");
require('dotenv').config();


const cors = require('cors');


const app = express();
app.use(express.json());
app.use(cors());


const {connection} = require("./db");
const {categorizeRouter} = require("./routes/categorize.route");
const { comprehensionRouter } = require("./routes/comprehension.route");



app.get('/', (req,res) => {
    res.send({"msg": "Welcome to custom form builder"})
});

app.use("/questions", categorizeRouter)
app.use("/comprehension", comprehensionRouter)

app.listen(process.env.port, async() => {
    try {
        await connection;
      console.log("Connected to DB")
    } catch (error) {
        console.log(error)
    }
    console.log(`Server is running on port ${process.env.port}`)
})