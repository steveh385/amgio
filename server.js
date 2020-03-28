const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const User = require('./models/users');
const mongoose = require('mongoose');

const db = "mongodb+srv://steveh385:chester2020@cluster0-jvkml.mongodb.net/test?retryWrites=true&w=majority"

app.use(bodyParser.urlencoded({ extended: false }));


mongoose
.connect(db, {})
.then(() => console.log("Db connected"))
.catch(err => console.log(err));


app.use(express.urlencoded());

app.get('/', (req, res) => res.json ({
    msg: "Hola mi amigo!"
}));

app.post('/users', (req, res) => {
    const newUser = new User (({
        name: req.body.name,
        email: req.body.email,
        password: req.body.password
    }));

    newUser
    .save()
    .then(user => res.json(user))
    .catch(err => console.log(err))
       
});

app.get('/users', (req, res) => {
    User.find()
    .then(users => res.json(users))
    .catch(err => console.log(err))
    
});

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}` ));