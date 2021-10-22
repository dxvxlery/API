const cors  = require('cors');
const express =require('express');
const mongoose = require ('mongoose');
const hostname = '127.0.0.1';
const PORT = 5000;
const dotenv = require('dotenv').config()
const todolist = require('./router/todolist')


const app = express();
app.use(express.json());
app.use (cors());

app.use('/api/todo',todolist)


const start = async ()=>{

    try {

           await mongoose.connect( process.env.DB_URL , {

                    useNewUrlParser : true,
                    useUnifiedTopology : true,
            })
            app.listen(PORT, ()=> console.log(`Server started on PORT = ${PORT}`))

     } catch(e){
         console.log(e);
     }
}


start();