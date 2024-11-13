const express = require('express');
const app = express();
const port = process.env.port || 3000;

app.get('/',(req,res)=>{
    res.send("hello word")
})

app.listen(port, ()=>{
    console.log(`am listen in port ${port}`)
})
