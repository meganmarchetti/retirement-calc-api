
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    const User = sequelize.define('user', {
        id: { 
            type: DataTypes.INTEGER,
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