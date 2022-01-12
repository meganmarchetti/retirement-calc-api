// inputs: sequelize instance and DT Class, returns: a Customer Model object
module.exports = (sequelize, DataTypes) => {

    // Define a new model, representing a table in the database.
    // modelName is 'customer' (first argument of define() function)
    // When synced, this will create a table name of "modelName" + "s", i.e. "customers"
    const Calc = sequelize.define('calc', {
        user_id: { // the id will be our primary key for accessing customer data
            type: DataTypes.INTEGER,
            // autoIncrement: true,
            allowNull: false,
            primaryKey: true
        },
        yrly_income: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        curr_age: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        ret_age: { 
            type: DataTypes.INTEGER,
            allowNull: false
        },
        monthly_cont: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        sav_balance: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        },
        ret_acc_val: { 
            type: DataTypes.DECIMAL(18,2),
            allowNull: false
        }
    })

    return Calc;
}