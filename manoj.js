const express = require('express')
const app =  express()
const PORT = 3000

app.all('/',(req,res,next)=>{
  console.log('API running')
  next()
})

app.listen(3000,()=>(console.log('here')))
