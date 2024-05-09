<template>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Bootstrap demo</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH"
      crossorigin="anonymous"
    />
  </head>
  <div class="container">
    <div class="alert bg-success my-3">
      <h1 class="text-center" style="color: white">Create Employee</h1>
    </div>
    <div class="row">
      <div class="col"></div>
      <div class="col">
        <div class="field my-3">
          <label for="" class="form-label">Employee Name</label>
          <input type="text" class="form-control" v-model="empName" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">Father Name</label>
          <input type="text" class="form-control" v-model="fatherName" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">Mobile No</label>
          <input type="text" class="form-control" v-model="mobileNo" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">Aadhar Card </label>
          <input type="text" class="form-control" v-model="aadharCard" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">Address Line 1</label>
          <input type="text" class="form-control" v-model="addressLine1" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">Address Line 2</label>
          <input type="text" class="form-control" v-model="addressLine2" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">City</label>
          <input type="text" class="form-control" v-model="city" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">State</label>
          <input type="text" class="form-control" v-model="state" />
        </div>
        <div class="field my-3">
          <label for="" class="form-label">Salary</label>
          <input type="text" class="form-control" v-model="salary" />
        </div>

        <button @click="createEmp()">Create Employee</button>
      </div>
      <div class="col"></div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import router from "@/router";

export default {
  name: 'EmpCreate',
  data() {
    return{
        empName: "",
        fatherName: "",
        mobileNo:"",
        aadharCard:"",
        addressLine1: "",
        addressLine2:"",
        city: "",
        state: "",
        salary:"",
    }
  },
  methods :{
     async createEmp(){
        try {
            let data = {
            empName: this.empName,
            fatherName: this.fatherName,
            mobileNo:this.mobileNo,
            aadharCard:this.aadharCard,
            addressLine1: this.aadharCard,
            addressLine2:this.addressLine2,
            city: this.city,
            state: this.state,
            salary:this.salary,

        }
        let result = await axios.post("http://localhost:3000/empcreate", data);
        console.log(result);
        if (result.data.success) {
          router.push({ path: "/emplist" });
        }

        } catch (error) {

            console.log(error)

        }
        


    }
  }
}
</script>
