const express = require('express');
const app = express();
const port = 8900;
const mongo = require('mongodb');
const MongoClient = mongo.MongoClient;
//const mongoUrl = "mongodb://localhost:27017";
const mongoUrl = "mongodb+srv://Prasanna:Prasanna$1999@cluster0.hhnzo.mongodb.net/edureka?retryWrites=true&w=majority"
let db;
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));  //body parser
app.use(bodyParser.json()) //to get data in json format

app.get('/', (req, res) => {
    res.send("<div><a href='http://localhost:8900/location'>Location</a><br/><a href='http://localhost:8900/mealtype'>MealType</a><br/><a href='http://localhost:8900/cuisine'>Cuisine</a><br/><a href='http://localhost:8900/restaurant'>Restaurant</a></div>")
})

// citylist
app.get('/location', (req, res) => {
    db.collection('city').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

// mealtype
app.get('/mealtype', (req, res) => {
    db.collection('mealtype').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

// cuisine
app.get('/cuisine', (req, res) => {
    db.collection('cuisine').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

// restaurant
app.get('/restaurant', (req, res) => {
    var query = {}

    // creating query params
    if (req.query.city && req.query.mealtype) {
        query = { city: req.query.city, "type.mealtype": req.query.mealtype }
    }
    else if (req.query.city) {
        query = { city: req.query.city }
    }
    else if (req.query.mealtype) {
        query = { "type.mealtype": req.query.mealtype }
    }

    db.collection('restaurant').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

// creating params
app.get('/restaurantDetails/:id', (req, res) => {
    console.log(req.params.id)
    var query = { _id: req.params.id }
    db.collection('restaurant').find(query).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

// orders
app.get('/orders', (req, res) => {
    db.collection('orders').find({}).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})

// placeorder
app.post('/placeorder', (req, res) => {
    console.log(">>>>>>>>>>>", req.body.name)
    db.collection('orders').insertOne(req.body, (err, result) => {
        if (err) {
            throw err;
        } else {
            res.send("data added")
        }
    })
})

// listing page api
app.get('/restaurantlist/:mealtype', (req, res) => {
    var query = { "type.mealtype": req.params.mealtype };
    var sort = { cost: -1 }

    if (req.query.city && req.query.sort) {
        query = { "type.mealtype": req.params.mealtype, "city": req.query.city }
        sort = { cost: Number(req.query.sort) }
    }
    else if (req.query.cuisine && req.query.sort) {
        query = { "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine }
        sort = { cost: Number(req.query.sort) }
    }
    else if (req.query.lcost && req.query.hcost && req.query.sort) {
        query = { "type.mealtype": req.params.mealtype, "cost": { $gt: parseInt(req.query.lcost), $lt: parseInt(req.query.hcost) } }
        sort = { cost: Number(req.query.sort) }
    }
    else if (req.query.city) {
        query = { "type.mealtype.mealtype": req.params.mealtype, "city": req.query.city }
    }
    else if (req.query.cuisine) {
        query = { "type.mealtype": req.params.mealtype, "Cuisine.cuisine": req.query.cuisine }
    }
    else if (req.query.lcost && req.query.hcost) {
        query = { "type.mealtype": req.params.mealtype, "cost": { $gt: parseInt(req.query.lcost), $lt: parseInt(req.query.hcost) } }
    }

    db.collection('restaurant').find(query).sort(sort).toArray((err, result) => {
        if (err) throw err;
        res.send(result)
    })

})

// sort price low to high and high to low
app.get('/restaurantlist/:mealtype', (req, res) => {
    query = { "type.mealtype": req.params.mealtype };
    sort_cost = { "cost":1 };

    //Filter by price(high to low)
    if (req.query.hTol) {
        sort_cost = { "cost": Number(req.query.hTol) }
    }

    db.collection('restaurant').find(query).sort(sort_cost).toArray((err, result) => {
        if (err) throw err;
        res.send(result);
    })
})




// connect client to database
MongoClient.connect(mongoUrl, { useNewUrlParser: true }, (err, client) => {
    if (err) console.log(err)
    db = client.db('edureka');
    app.listen(port, (err) => {
        if (err) throw err;
        console.log(`server is running on port ${port}`)
    })
})