const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const cookieParser = require('cookie-parser');
var expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
const tutorials = require("./controllers/tutorial.controller.js");

const app = express();

const db = require("./models");
db.sequelize.sync({ force: false }).then(() => {
  console.log("Drop and re-sync db.");
});

var corsOptions = {
 origin: "http://192.168.90.103:8081",
 credentials:true,
};

const Sequelize = require('sequelize');
const myDatabase = new Sequelize('databasename', 'root', 'password', {
    host: 'localhost',
    dialect: 'mysql',
    timezone: 'Europe/Istanbul'

});

sequelizeSessionStore = new SessionStore({
    db: myDatabase,
    clearExpired: true,
    checkExpirationInterval:6000,
    expiration:120000

});

app.use(expressSession({
	secret: 'asdasdasd',
    store: sequelizeSessionStore,
    resave: false,
    saveUninitialized: false,
    credentials: true,
}));

app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

/*
app.get("/", (req, res) => {
  req.session.sezo = 'sss';
  res.json({ message: "Welcome to sezo application." });
  console.log(req.session);
});*/



require("./routes/turorial.routes.js")(app);


// set port, listen for requests
const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
