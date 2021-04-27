const dbConfig = require("../config/db.config.js");
var expressSession = require('express-session');
const SessionStore = require('express-session-sequelize')(expressSession.Store);
const cookieParser = require('cookie-parser');

const Sequelize = require("sequelize");
const sequelize = new Sequelize(dbConfig.DB, dbConfig.USER, dbConfig.PASSWORD, {
	host: dbConfig.HOST,
	dialect: dbConfig.dialect,
	useUTC: false,
	timezone: '+03:00',
	operatorsAliases: false,
  pool: {
    max: dbConfig.pool.max,
    min: dbConfig.pool.min,
    acquire: dbConfig.pool.acquire,
    idle: dbConfig.pool.idle
  }
});

const db = {};

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.tutorials = require("../tutorialmode.js").Tutorial(sequelize, Sequelize);
db.users = require("../tutorialmode.js").users(sequelize, Sequelize);

module.exports = db;

//~ const sequelizeSessionStore = new SessionStore({
    //~ db: sequelize,
    //~ checkExpirationInterval:56000,
    //~ expiration:15000,
//~ });
