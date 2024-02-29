const express = require('express');
const cores = require('cores');
const dotenv = require('dotenv');
dotenv.config();

const appRoute = require('./routes/index')
const app = express();
// middle ware
// app.use(cores({
//     origin: true,
//     method: ['GET',"POST","DELETE","PUT"],
//     credential: true 
// }))

app.use(express.json());
app.use(express.urlencoded({extended: true}))


app.use(appRoute);
//test
// app.get('/',(req,res)=>{
//     console.log("jjjjjjjjjj");
//     return res.status(200).json({
//         success: true,
//         message: "wellcom"
//     })
// })


app.listen(process.env.SERVER_PORT,process.env.SERVER_HOST,(error)=>{
    if(error) throw error;
    else console.log(`server is running on  http://${process.env.SERVER_HOST}:${process.env.SERVER_PORT}`);
})

