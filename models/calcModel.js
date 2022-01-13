
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    const Calc = sequelize.define('calc', {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            allowNull: false
        },
        
        yrlyIncome: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        currAge: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        retAge: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        monthlyCont: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        rateReturn: {
            type: DataTypes.DECIMAL(5,2),
            allowNull: false,

        },
        savBalance: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        retAccVal: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: true,

        },
        userId: { 
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    })

    return Calc;
}