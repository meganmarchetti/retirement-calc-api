const db = require("../models/index");
const Calc = db.Calcs;

const addCalc = async(req, res) => {
    let input_data = {
        id: req.body.id,
        yrlyIncome: req.body.yrlyIncome,
        currAge: req.body.currAge,
        retAge: req.body.retAge,
        monthlyCont: req.body.monthlyCont,
        savBalance: req.body.savBalance,
        retAccVal: req.body.retAccVal,
        userId: req.body.userId
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
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let calcs = await Calc.findOne({where: {id: id}})
    res.status(200).send(calcs)
};

const updateCalc = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Customer Model
    const calc = await Calc.update(req.body, { where: {id: id}})
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