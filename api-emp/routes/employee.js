const express = require("express");
const router = express.Router();
const EmployeeController = require("../controllers/EmployeeController");

router.post("/empcreate", (req, res) => {
  EmployeeController.createEmployee(req, res);
});
router.get("/emp/list", (req, res) => {
  EmployeeController.getEmpList(req, res);
  });
  router.get("/emp/for/edit/:id", (req, res) => {
    EmployeeController.getEmpForEdit(req, res);
  });
  router.put("/edit/emp/:id", (req, res) => {
    EmployeeController.updateEmp(req, res);
  });
  router.delete("/emp/delete/:id", (req, res) => {
    EmployeeController.deleteEmp(req, res);
  });

module.exports = router;
