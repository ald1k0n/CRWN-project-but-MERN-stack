const express = require('express');
const app = express();
const cors = require('cors');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');

app.use(express.json());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(session({
    secret: 'Crwn',
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

mongoose.connect('mongodb://127.0.0.1:27017/crownProject');

const User = require('./Schemas/userSchema');
const Categories = require('./Schemas/productSchema');


passport.use(User.createStrategy());

passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

let cookie;

app.get('/user', (req, res) => {
    res.json(cookie);
});

app.post('/register', (req, res) => {
    User.register({ username: req.body.username, email: req.body.email }, req.body.password,
        async (err, user) => {
            if (err) {
                res.json(`Error: ${err}`);
            }
            else {
                passport.authenticate('local')(req, res, () => {
                    res.json(req.user);
                    cookie = req.user;
                });
            }
        }
    );
});

app.post('/login', (req, res) => {
    const user = new User({
        username: req.body.username,
        password: req.body.password
    });

    req.login(user, (err) => {
        if (err) {
            return res.status(401).json(`Error: ${err}`);
        }
        else {
            passport.authenticate(`local`)(req, res, err => {
                if (!err) {
                    res.json(req.user);
                    cookie = req.user;
                }
                else {
                    return res.json(`Error: ${err}`)
                }
            })
        }
    });
});

app.get('/categories', (req, res) => {
    Categories.find()
        .then(items => res.json(items))
        .catch(err => res.status(400).json(`Error: Cannot reach categories`));
});

app.post('/logout', (req, res) => {
    req.logout(err => {
        if (err) res.json(err);
        else {
            cookie = '';
            res.json(cookie);
        }
    })
});

app.listen(5000, () => {
    console.log('Server has been started on port 5000');
})