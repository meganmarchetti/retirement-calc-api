const db = require("../models/index");
const Calc = db.Calcs;

const addCalc = async(req, res) => {
    let input_data = {
        user_id: req.body.user_id,
        yrly_income: req.body.yrly_income,
        curr_age: req.body.curr_age,
        ret_age: req.body.ret_age,
        monthly_cont: req.body.monthly_cont,
        sav_balance: req.body.sav_balance,
        ret_acc_val: req.body.ret_acc_val
    };
    const calc = await Calc.create(input_data);

    res.status(200).send(calc);
};

const getAllCalcs = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let calcs = await Calc.findAll({})
    res.status(200).send(calcs)
};  

const getOneCalc = async (req, res) => {

    // getting the id from the params in the req
    let user_id = req.params.user_id
    
    // using the builtin 'findOne' function on Customer Model
    let calcs = await Calc.findOne({where: {user_id: user_id}})
    res.status(200).send(calcs)
};

const updateCalc = async (req, res) => {
    let user_id = req.params.user_id

    // using the builtin 'update' function on Customer Model
    const calc = await Calc.update(req.body, { where: {user_id: user_id}})
    res.status(200).send(calc)
};

// const deleteCustomer = async (req, res) => {
//     let id = req.params.id

//     // using the builtin 'destroy' function on Customer Model
//     await Customer.destroy({where :{id: id}})
//     res.status(200).send(`customer with id: ${id} is deleted`)
// };

module.exports = {
    addCalc,
    getAllCalcs,
    getOneCalc,
    updateCalc,
    // deleteCustomer
};