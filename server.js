const express = require("express")

 const app = express()

 const bodyparser = require("body-parser")
 const cors = require("cors")


app.use(cors());
app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json())

// When User submit
app.post('/contact', (req, res) => {
    // Get all entries
    let podcast = [{
        "title": req.body.title,
        "name": req.body.name,

    }];

    // let data = podcast[0].Subtitle = req.body.subtitle ,
    //            podcast[0].Title = req.body.title ,
    //            podcast[0].Description = req.body.description;

    // Append Data to file
    fs.appendFileSync('data.json', JSON.stringify(podcast));

    // Read Data from a file
    let readData = fs.readFileSync('data.json', 'utf8');

    // Show data podcasts as object
    res.json(readData);

    // Show data to console
    console.log(readData);
});


  app.get('/pod', (req, res) => {
    res.json(podcaters);
});


  app.listen(2000)