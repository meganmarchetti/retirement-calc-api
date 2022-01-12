// inputs: sequelize instance and DT Class, returns: a Customer Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const User = sequelize.define('user', {
        id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            // autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        name: { 
            type: DataTypes.STRING,
            allowNull: true
        }
    })

    return User;
}