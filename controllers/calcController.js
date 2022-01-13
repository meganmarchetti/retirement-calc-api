const db = require("../models/index");
const Calc = db.Calcs;

const addCalc = async(req, res) => {
    let input_data = {
        id: req.body.id,
        yrlyIncome: req.body.yrlyIncome,
        currAge: req.body.currAge,
        retAge: req.body.retAge,
        monthlyCont: req.body.monthlyCont,
        rateReturn: req.body.rateReturn,
        savBalance: req.body.savBalance,
        retAccVal: ((req.body.savBalance) * ((1 + ((req.body.rateReturn/100)/12))**((req.body.retAge - req.body.currAge)*12))) + ((req.body.monthlyCont) * (((1 + (req.body.rateReturn/100)/12)**((req.body.retAge - req.body.currAge)*12)) - 1) / (((req.body.rateReturn/100)/12) * (1 + (req.body.rateReturn/100)/12))),
        userId: req.body.userId
    };
    const calc = await Calc.create(input_data);

    res.status(200).send(calc);
};

const getAllCalcs = async (req, res) => {

    // using the builtin 'findOne' function on Model
    let calcs = await Calc.findAll({include: db.Users})
    res.status(200).send(calcs)
};  

const getOneCalc = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Model
    let calcs = await Calc.findOne({where: {id: id}})
    res.status(200).send(calcs)
};

const updateCalc = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Model
    const calc = await Calc.update(req.body, { where: {id: id}})
    res.status(200).send(calc)
};



module.exports = {
    addCalc,
    getAllCalcs,
    getOneCalc,
    updateCalc
};



