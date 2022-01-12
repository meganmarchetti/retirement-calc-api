// inputs: sequelize instance and DT Class, returns: a Customer Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
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
            allowNull: false
        },
        monthlyCont: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        savBalance: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        retAccVal: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        userId: { 
            type: DataTypes.INTEGER,
            // autoIncrement: true,
            allowNull: false,
        }
    })

    return Calc;
}