const express = require('express');
require('dotenv').config();
const mongoose=require('mongoose');
const app = express();
const taskRoutes = require('./routes/taskRoute');

//MONGO_URI='mongodb+srv://admin:26-Nov-03@mern.izwuj9w.mongodb.net/?retryWrites=true&w=majority'

//Middleware
app.use((req,res,next)=> {
    console.log("path" + res.path +"method" +req.method );
    next();
});

app.use(express.json());
// app.get("/",(req,res)=>{
//     res.send("HEllo ");
// });

//DBconnection
mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    app.listen(process.env.PORT,()=>{
        console.log("DB connected successfully and listening to " + process.env.PORT);
    });
}).catch((error)=>console.log(error));

// app.listen(process.env.PORT,()=> {
//     console.log("listening to  ", + process.env.PORT);
// });

app.use("/api/tasks",taskRoutes);
