const express = require('express')
const app = express()

app.set('views', './views')
app.set('views engine', 'ejs')

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))

app.get('/', (req, res)=>{
    res.render('home.ejs')
})
app.get('/home', (req, res)=>{
    
    res.render('index.ejs')
})

let inputarr = []
app.post('/home/user', (req, res)=>{
    console.log(req.body)
    inputarr = [req.body.number1, req.body.number2]
    if(req.body.cal==='add'){
        res.redirect("/add")
    }
    else if(req.body.cal==='sub'){
        res.redirect('/sub')
    }
    else if(req.body.cal==='mul'){
        res.redirect('/mul')
    }
    else{
        res.redirect('/div')
    }
    
})

let respArr = [{Response: 
    { status: 'success"|"failure"|"error',
     message: 'the sum of given two numbers', 
    sum:0}}
    ]

app.get("/add", (req, res)=>{
    let val1 = parseInt(inputarr[0])
    let val2 = parseInt(inputarr[1])
    let sum = val1+val2
    if(sum > 1000000){
        res.send(`Response: 
            { status: “OverFlow”, 
              message: “the addition of given two numbers”, 
              sum: ${sum} } `)
    }
    else if(sum==NaN){
        res.send(`Response: 
        { status: “Invalid data type”, 
          message: “the addition of given two numbers”, 
          sum: ${sum} } `)
    }
    else{
        res.send(`Response: 
        { status: “Success”, 
          message: “the addition of given two numbers”, 
          sum: ${sum} } `)
    }
    
})
app.get("/sub", (req, res)=>{
    let val1 = parseInt(inputarr[0])
    let val2 = parseInt(inputarr[1])
    let sum = val1-val2
    if(sum < -1000000){
        res.send(`Response: 
            { status: “underflow”, 
              message: “the difference of given two numbers”, 
              difference: ${sum} } `)
        
    }
    else if(sum==NaN){
        res.send(`Response: 
        { status: “Invalid data type”, 
          message: “the difference of given two numbers”, 
          difference: ${sum} } `)
    }
    else{
        res.send(`Response: 
        { status: “Success”, 
          message: “the difference of given two numbers”, 
          difference: ${sum} } `)
    }
    
})
app.get("/mul", (req, res)=>{
    let val1 = parseInt(inputarr[0])
    let val2 = parseInt(inputarr[1])
    let sum = val1+val2
    if(sum > 1000000){
        res.send(
            `Response: 
            { status: “OverFlow”, 
              message: “The product of given numbers”, 
              result: ${sum} } `
        )
    }
    else if(sum===Nan){
        res.send(
            `Response: 
            { status: “Invalid data type”, 
              message: “The product of given numbers”, 
              result: ${sum} } `
        )
    }
    else{
        res.send(
            `Response: 
            { status: “Success”, 
              message: “The product of given numbers”, 
              result: ${sum} } `
        )

    }
   
})
app.get("/div", (req, res)=>{
    let val1 = parseInt(inputarr[0])
    let val2 = parseInt(inputarr[1])
    let sum = val1+val2
    if(val2===0){
        res.send(
            `Response: 
            { status: “"Cannot divide by zero"”,
              message: “The division of given numbers”, 
              result: ${sum} }
            `
        )
    }
    else if(sum==NaN){
        res.send(
            `Response: 
            { status: “Invalid data types”,
              message: “The division of given numbers”, 
              result: ${sum} }
            `
        )

    }
    else{
        res.send(
            `Response: 
            { status: “Success”,
              message: “The division of given numbers”, 
              result: ${sum} }
            `
        )

    }
    
})

app.listen(3000, ()=>{
    console.log("server is up")
})