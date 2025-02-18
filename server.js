import express from "express";
import cors from "cors";
import {MongoClient} from "mongodb";
import passport from "passport";
import session from "express-session";
import { Strategy as GitHubStrategy } from 'passport-github2';
import dotenv from 'dotenv';
import fs from "node:fs";
import mime from "mime";
dotenv.config();

const app = express()
const port = process.env.PORT || 3000;

const url = "mongodb+srv://tabranchaud:tb@cluster0.h4cuw.mongodb.net/";
const connection = new MongoClient(url);
let gameCollection = null;
let userCollection = null;
let db = null;

let currentUser = null;

const {
    GITHUB_CLIENT_ID,
    GITHUB_CLIENT_SECRET,
    //EXPRESS_SESSION_SECRET,
    //MONGO_USER,
    //MONGO_PASSWORD
// eslint-disable-next-line no-undef
} = process.env;

app.use(cors());
app.use(express.json())
app.use(session({
    secret: "c50af629ab319b51d6484867124a60a5c204aa99",
    resave: false,
    saveUninitialized: false
}));
app.use(passport.initialize());
app.use(passport.session());

async function run() {
    await connection.connect().then(() => console.log("Database connected"));
    db = await connection.db("Games");
    gameCollection = await connection.db("Games").collection("Games");
    userCollection = await connection.db("Games").collection("Users");
}

passport.serializeUser(function (user, done) {
    done(null, {username: user.username, id: user._id || user.id});
});

passport.deserializeUser(function (obj, done){
    done(null, obj);
})

passport.use(new GitHubStrategy({
    clientID: "Ov23lirgmg1VaqAG06Vc",
    clientSecret: "c50af629ab319b51d6484867124a60a5c204aa99"
    },
    async function (accessToken, refreshToken, profile, done){
        if(profile){
            let profileID = profile.id;
            let user = await userCollection.findOne({"username": profileID});

            if (!user){
                user = await userCollection.insertOne({
                    username: profileID
                })
            }
            currentUser = profileID;
        }
        // eslint-disable-next-line no-undef
        process.nextTick(function() {
        return done(null, profile);
        });
    }
    ));


app.post('/user', (req, res) => {
    res.status(200).json(currentUser)
})
app.get('/auth/github/callback*', passport.authenticate('github', {session: true, failureRedirect: '/login'}),
    function (req, res){
    console.log("Logged")
    res.redirect("https://a4-thomasbranchaud.onrender.com/homePage.html")
});

app.get('/auth/github', passport.authenticate('github', { scope: ["user:email"] }));

function ensureAuth (req, res, next){
    if (req.isAuthenticated()){
        next();
    }
    else {
        res.redirect('/login')
    }
}

app.get('/src/main.jsx', (req, res) => {
    sendFile(res, "src/main.jsx");
})

app.get('/', ensureAuth, (req, res) => {
    res.redirect("/middlePage.html");
})

app.get('/login', (req, res) => {
    if (req.user){
        res.redirect(301, '/middlePage.html');
    }
    else {
        res.redirect(302, "/login.html");
    }
})

app.get('/homePage.html', (req, res) => {
    if (req.user){
        res.redirect(301, "/homePage.html");
    }
    else {
        res.redirect(302, "/login.html");
    }
})

app.get('/logout', (req, res) => {
    req.logout(() => {});
    res.redirect('/login.html');
})

app.post('/results', async (req, res) => {
    const results = await gameCollection.find({username: req.body.username}).toArray()
    res.send(results)
})

app.post('/add', async (req, res) => {
    console.log(req.body)
    let age = 2025 - Number(req.body.releaseYear);
    if (age === 0) {
        age = 1;
    }
    const insert = {
        "title": req.body.title,
        "genre": req.body.genre,
        "online": req.body.online,
        "releaseYear": Number(req.body.releaseYear),
        "age": age,
        "username": req.body.username
    }
    const results = await gameCollection.insertOne(insert);
    console.log("Result from Posting: " + results);
    res.send("Entry has been added to list");
})

app.post("/modify", async (req, res) => {
    console.log(req.body);
    let newAge = 2025 - req.body.releaseYear;
    if (newAge === 0) {
        newAge = 1;
    }
    const results = await gameCollection.findOneAndUpdate({title: req.body.title, username: req.body.username}, {
        $set: {
            genre: req.body.genre,
            online: req.body.online,
            releaseYear: req.body.releaseYear,
            age: newAge
        }
    });
    console.log(results);
    res.send(results);
})

app.post("/login", async (req, res) => {
    console.log(req.body);
    const results = await userCollection.findOne({username: req.body.username, password: req.body.password})
    if (results === null){
        const newUser = await userCollection.insertOne({username: req.body.username, password: req.body.password})
    }
    currentUser = req.body.username
})

app.post("/delete", async (req, res) => {
    console.log(req.body);
    const results = await gameCollection.deleteOne({title: req.body.title, username: req.body.username})
    res.send("Entry Deleted");
})

const appRun = run()

app.listen(port, '0.0.0.0',() => {
    console.log("Server is listening on port: " + port);
})

const sendFile = function( response, filename ) {
    const type = mime.getType( filename )

    fs.readFile( filename, function( err, content ) {

        // if the error = null, then we've loaded the file successfully
        if( err === null ) {

            // status code: https://httpstatuses.com
            response.writeHeader( 200, { "Content-Type": type })
            response.end( content )

        } else {

            // file not found, error code 404
            response.writeHeader( 404 )
            response.end( "404 Error: File Not Found" )

        }
    })
}
