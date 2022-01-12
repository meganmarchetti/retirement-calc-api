const db = require("../models/index");
const User = db.Users;

const addUser = async(req, res) => {
    let input_data = {
        id: req.body.id,
        name: req.body.name
    };
    const user = await User.create(input_data);

    res.status(200).send(user);
};

const getAllUsers = async (req, res) => {

    // using the builtin 'findOne' function on Customer Model
    let users = await User.findAll({})
    res.status(200).send(users)
};  

const getOneUser = async (req, res) => {

    // getting the id from the params in the req
    let id = req.params.id
    
    // using the builtin 'findOne' function on Customer Model
    let users = await User.findOne({where: {id: id}})
    res.status(200).send(users)
};

const updateUser = async (req, res) => {
    let id = req.params.id

    // using the builtin 'update' function on Customer Model
    const user = await User.update(req.body, { where: {id: id}})
    res.status(200).send(user)
};

// const deleteCustomer = async (req, res) => {
//     let id = req.params.id

//     // using the builtin 'destroy' function on Customer Model
//     await Customer.destroy({where :{id: id}})
//     res.status(200).send(`customer with id: ${id} is deleted`)
// };

module.exports = {
    addUser,
    getAllUsers,
    getOneUser,
    updateUser,
    // deleteCustomer
};