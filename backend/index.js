const express =require('express')
const app=express();
const cors=require('cors');
const PORT=5000;

app.use(cors({origin:'*'}))
app.use(express.json({limit:'10MB'}))
app.use(express.urlencoded({extended:true,limit:'10MB'}))


app.post('/register',(req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body)
})

app.post('/login',(req,res)=>{
    console.log(req.body);
    res.status(200).json(req.body)
})

app.listen(PORT,()=>{
    console.log("Server is running");
})