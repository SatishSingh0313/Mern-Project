const express=require('express');
const app=express();
app.use(express.json());

app.get('/',async(req,resp)=>{
    resp.send("")
})
app.listen(4000);