const userController = require("../controllers/userController");
const router = require("express").Router();

router.post("/", userController.addUser);

router.get("/", userController.getAllUsers);

// router.get("/:id", userController.getOneUser);

// router.put("/:id", userController.updateUser);


module.exports = router;