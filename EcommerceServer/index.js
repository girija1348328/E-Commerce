const express = require("express");
const dotenv = require("dotenv");
const route = require("./routes/route.js")


dotenv.config();

const app = express();

app.use(express.json()); // For parsing application/json
app.use(express.urlencoded({ extended: true }));
const port = 5000;

app.use('/', route);

// app.get('/',async (req,res)=>{
//    await prisma.user.create({
//     data:{
//         name:"Satya",
//         email:"satya@gmail.com",
//         password:"123456",
//         address:"cuttack"
//     }
//    })

//    const users = await prisma.user.findMany();

//    const names = users.map((user)=> user.name);

//    res.send(
//     `There are ${names.length} users with the names of:${names.join(",")}`
//    )
// })

app.listen(port,()=>console.log(`App listening on port ${port}!`))