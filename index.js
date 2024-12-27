const express = require("express");
const cors = require("cors");
const app = express();
app.use(express.urlencoded({ extended: true }));

const port = 5000;


app.get("/", (req, res)=>{
    res.send("all ok");
})

app.get("/welcome", (req, res)=>{
    res.render("welcome.ejs");
})

app.get("/bio", (req, res)=>{
    res.render("index.ejs");
});

const data  =  [];

app.post("/bio", (req, res)=>{
    data.push(req.body);
    console.log(data);
    res.render("thankyou.ejs");
});

app.get("/thankyou", (req, res)=>{
    res.render("thankyou.ejs");
    
});


app.get("/display", (req, res)=>{
    res.render("display.ejs", {data});
});


app.listen(port, ()=>{
    console.log(`listening at port: ${port}`);
});