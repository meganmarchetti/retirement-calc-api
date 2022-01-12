const calcController = require("../controllers/calcController");
const router = require("express").Router();

router.post("/", calcController.addCalc);

router.get("/", calcController.getAllCalcs);

router.get("/:id", calcController.getOneCalc);

router.put("/:id", calcController.updateCalc);

// router.delete("/:id", calcController.deleteCustomer);

module.exports = router;