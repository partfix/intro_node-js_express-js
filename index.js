const express = require('express');
const app = express();
const port = 3000;

//Serve static files from the "public" folder
app.use(express.static('public'));

//define a route for the home page
app.get("/", (req, res)=>{
    res.send("Hello, World!");
});

app.listen(port, ()=>{
    console.log(`Server running at http://localhost:${port}`);
});


app.get('/about', (req, res)=>{
    res.send('About us');
});

app.use(express.json());//middleware to parse JSON bodies.

app.post('/submit', (req, res)=>{
    const data = req.body;
    res.send(`Received: ${JSON.stringify(data)}`);
});