 const express = require('express');
const app = express();
const port = 3000;

app.get("/", (req, res) => { // το "/" σημαίνει localhost:3000
    console.log("Get request");
    res.send("Hello World");
})  

app.get("/about", (req, res) => {
    console.log("About page");
    res.send("This is the about page")
})

app.get("/help", (req, res) =>{
    console.log("Help page");
    res.send("This is the help page")
})

app.get("/user", (req, res)=>{
    // ?name=Bob&surname=Dylan&age=81
    let query = req.query;

    let name = query.name;
    let surname = query.surname;
    let age = query.age;

    console.log("Query:", query )
    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`)
})

app.get("/user/:name/:surname/:age", (req, res)=>{
    //   /user/Bob/Dylan/71
    let params = req.params;

    console.log("Params" , params);
    
    let name = params.name;
    let surname = params.surname;
    let age = params.age; 

    res.send(`Name: ${name}, Surname: ${surname}, Age: ${age}`)

})

app.listen(port, ()=>{
    console.log("Server is up, running in port 3000")
});


 