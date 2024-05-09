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
    <div>
      <h1>This is Edit Page</h1>
  
      <div class="container">
        <div class="alert bg-success my-3">
          <h4 class="text-center" style="color: white">Update Employee</h4>
        </div>
      </div>
      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col">
            <div class="field my-3">
              <label for="" class="form-label">Employee Name</label>
              <input
                type="text"
                class="form-control"
                name="empName"
                v-model="empName"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Father Name</label>
              <input
                type="text"
                class="form-control"
                name="fatherName"
                v-model="fatherName"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Mobile No.</label>
              <input
                type="text"
                class="form-control"
                name="mobileNo"
                v-model="mobileNo"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Aadhar Card</label>
              <input
                type="text"
                class="form-control"
                name="aadharCard"
                v-model="aadharCard"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Address Line 1</label>
              <input
                type="text"
                class="form-control"
                name="addressLine1"
                v-model="addressLine1"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Address Line 2</label>
              <input
                type="text"
                class="form-control"
                name="addressLine2"
                v-model="addressLine2"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">City</label>
              <input
                type="text"
                class="form-control"
                name="city"
                v-model="city"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">state</label>
              <input
                type="text"
                class="form-control"
                name="state"
                v-model="state"
              />
            </div>
            <div class="field my-3">
              <label for="" class="form-label">Salary</label>
              <input
                type="text"
                class="form-control"
                name="salary"
                v-model="salary"
              />
            </div>
            <button class="btn btn-primary" @click="updateEmp()">update</button>
          </div>
          <div class="col"></div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import { useRoute } from "vue-router";
  import axios from "axios";
  import router from "@/router";
  
  export default {
    name: "EmpEdit",
    data() {
      return {
        empName: "",
        fatherName: "",
        mobileNo: "",
        aadharCard: "",
        addressLine1: "",
        addressLine2: "",
        city: "",
        state: "",
        salary: "",
        empID: "",
      };
    },
    created() {
      this.getEmpList();
    },
    methods: {
      async getEmpList() {
        try {
          const route = useRoute();
          let id = route.params.id;
          this.empID= id;
          const result = await axios({
            method:"get",
            url:"http://localhost:3000/emp/for/edit/" + id
          }
          );
          // Set data from API response to form fields
          console.log(result,"result..");
          this.empName = result.data.data.empName;
          this.fatherName = result.data.data.fatherName;
          this.mobileNo = result.data.data.mobileNo;
          this.aadharCard = result.data.data.aadharCard;
          this.addressLine1 = result.data.data.addressLine1;
          this.addressLine2 = result.data.data.addressLine2;
          this.city = result.data.data.city;
          this.state = result.data.data.state;
          this.salary = result.data.data.salary;
          // this.userId = result.data.data.userId;
        } catch (error) {
          console.error("Error fetching emp data:", error);
        }
      },
      async updateEmp() {
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
          };
          let result = await axios({
            method: "put",
            url: "http://localhost:3000/edit/emp/" + this.empID,
            data: data,
          });
          console.log(result, "result");
          if (result.data.success) {
            router.push({ path: "/emplist" });
          }
        } catch (error) {
          console.error("Error updating emp:", error);
        }
      },
    },
  };
  </script>
  