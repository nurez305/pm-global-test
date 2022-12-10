const express = require("express")
const mongoose = require('mongoose')
const Joi = require('joi');
const users = require('./routes/user');


const db = mongoose.connect('mongodb+srv://nurez154:Asunlope@nurez-cluster.rsxzihk.mongodb.net/userdatadb?retryWrites=true&w=majority',{
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
.then(()=> console.log("connected to database"))
.catch(err=>console.error('could not connect to database', err))

const app = express()


app.use(express.json());
app.use('/api/users', users);


const PORT = process.env.Port || 4000

app.listen(PORT,()=> console.log(`server is listening to port ${PORT}`) )


