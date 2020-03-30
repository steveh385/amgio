const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const User = require('./models/User');
const Post = require('./models/Post');
const keys = require('./config/keys');

const db = keys.mongoURI;

app.use(bodyParser.urlencoded({ extended: false }));


mongoose
.connect(db, {})
.then(() => console.log("Db connected"))
.catch(err => console.log(err));


//app.use(express.urlencoded());

const userRoutes = require('./routes/User')
app.use('/users', userRoutes);

const postRoutes = require('./routes/Post')
app.use('/posts', postRoutes);

app.get('/', (req, res) =>  {
    res.send("Hola mi Perro woogie!") 
});


/*app.post('./users/posts', (req, res) => {
    User.findOne({email: req.body.email})
        .then( user => {
            Post.find({ user: user})
                .then(post => {
                    res.json(post)
                }) 
                .catch(err => console.log(err))
        })
    
})*/
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Your application is running @ http://localhost:${port}` ));