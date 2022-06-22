const todos = require('./routes/todo');
const connection = require('./db');
const express = require('express');
const cors = require('cors');
const app = express();
// connection();

app.use(express.json());
app.use(cors());

app.use("/todo",todos);

const port = process.env.PORT || 8080;

// app.get('/',(req,res)=>res.send("Hello From Homepage"));

app.listen(port, ()=>{
    console.log(`Server Running in port http://localhost:${port}`) 
});