// require the db configuration from the dbConfig file
const dbConfig = require("../config/dbConfig");
    
// require the sequelize Constructor and Datatypes from sequelize module
const { Sequelize, DataTypes } = require("sequelize");

// construct the sequelize object using the constructor
const sequelize = new Sequelize({ // use imported configurations from dbConfig
        database: dbConfig.DB,
        username: dbConfig.USER,
        password: dbConfig.PASSWORD,
        dialect: dbConfig.dialect,
        host: dbConfig.HOST,
});

sequelize.authenticate()
    .then(() => {
        console.log("connected to pg db");
    })
    .catch(e => {
        console.log("unable to connect"+e);
    });

const db = {};
db.sequelize = sequelize;

db.Calcs = require("./calcModel")(sequelize, DataTypes);
db.Users = require("./userModel")(sequelize, DataTypes);

// sync the db by running the model
// "force: false" ensures that the table is not created again every time the program runs
db.sequelize.sync({ force: false }).then(() => {
    console.log('DB synced with sequelize');
}).catch((error) => {
    console.log('Error syncing the DB to sequelize' + error);
});

db.Calcs.belongsTo(db.Users);
db.Users.hasOne(db.Calcs);

module.exports = db;