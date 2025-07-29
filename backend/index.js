const express =require('express')
const app=express();
const PORT=5000;

app.use(express.json({limit:'10MB'}))
app.use(express.urlencoded({extended:true,limit:'10MB'}))

app.delete('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body)
})

app.listen(PORT,()=>{
    console.log("Server is running");
})