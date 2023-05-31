const express = require('express');
const app = express();
const cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const cheif = require('./cheif.json');

const recipe = require('./recipe.json');

app.get('/', (req, res) =>{
    res.send('chef is running and myself nahid')
} );

app.get('/cheif', (req, res) => {
    res.send(cheif);
})

app.get('/recipe', (req, res) => {
    res.send(recipe);
})

app.get('/cheif/:name', (req, res) => {
    const name = req.params.name;
    // console.log(name)
   const cheifDetails = recipe.filter(n => n.author == name);
   res.send(cheifDetails)
})

app.listen(port, () =>{
    console.log(`chef api is running on port : ${port}`)
})