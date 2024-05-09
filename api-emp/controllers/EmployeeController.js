const Employee = require("../models/Employee");

const createEmployee = async (req, res) => {
  try {
    console.log(req.body);
    let employee = new Employee(req.body);
    await employee.save();
    res
      .status(200)
      .send({
        success: true,
        message: "Employee Created Successfully",
        data: employee,
      });
  } catch (error) {
    console.log(error);
    res
      .status(500)
      .send({ success: false, message: "Something Went Wrong", data: "" });
  }
};
const getEmpList = async (req, res) => {
    try {
      console.log(req.body);
      let emp = await Employee.find({});
      console.log(emp, "Employees");
      res
        .status(200)
        .send({ success: true, message: "Emp data fetch success", data: emp });
    } catch (error) {
      console.log(error);
      res
        .status(500)
        .send({ success: false, message: "Something fetch error", data: "" });
    }
  };
  
  const getEmpForEdit = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(id, "id");
      let emp = await Employee.findOne({ _id: id });
      console.log(emp, "empl..");
      res.status(200).send({ success: true, message: " edit ", data: emp });
    } catch (error) {
      console.log(error);
      res.status(200).send({ success: false, message: " edit ", data: " " });
    }
  };
  
  const updateEmp = async (req, res) => {
    try {
      let id = req.params.id;
      console.log(id, "id");
      let emp = await Employee.findOne({ _id: id });
      console.log(emp, "emp..");
      emp.empName = req.body.empName;
      emp.fatherName = req.body.fatherName;
      emp.mobileNo = req.body.mobileNo;
      emp.aadharCard = req.body.aadharCard;
      emp.addressLine1 = req.body.addressLine1;
      emp.addressLine2 = req.body.addressLine2;
      emp.city = req.body.city;
      emp.state = req.body.state;
      emp.salary = req.body.salary;
      
      emp = await emp.save();
      res
        .status(200)
        .send({ success: true, message: "emp Udated Sucessfully", data: emp });
    } catch (error) {
      console.error("Error updating Emp:", error);
      res
        .status(500)
        .send({ success: false, message: "something went wrong", data: "" });
    }
  };
  
  const deleteEmp = async (req, res) => {
    try {
      id = req.params.id;
      let emp = await Employee.deleteOne({ _id: id });
      res
        .status(200)
        .send({ success: true, message: "Emp Deleted Succesfully", data: emp });
    } catch (error) {
      res
        .status(500)
        .send({ success: false, message: "something went wrong", data: "" });
    }
  };

module.exports = {
  createEmployee,
  deleteEmp,
  updateEmp,
  getEmpForEdit,
  getEmpList,
};
