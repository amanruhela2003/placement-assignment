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

  <h1>Employee List</h1>
  <!-- {{ emplist }} -->
  <table class="table">
    <thead>
      <tr>
        <th scope="col">Employee Name</th>
        <th scope="col">Father Name</th>
        <th scope="col">Mobile No</th>
        <th scope="col">Aadhar Card</th>
        <th scope="col">Address Line 1</th>
        <th scope="col">Address Line 2</th>
        <th scope="col">City</th>
        <th scope="col">State</th>
        <th scope="col">Salary</th>
        <th scope="col">Action</th>
      </tr>
      <tr v-for="(emp, index) in emplist" :key="index">
        <td>{{ emp.empName }}</td>
        <td>{{ emp.fatherName }}</td>
        <td>{{ emp.mobileNo }}</td>
        <td>{{ emp.aadharCard }}</td>
        <td>{{ emp.addressLine1 }}</td>
        <td>{{ emp.addressLine2 }}</td>
        <td>{{ emp.city }}</td>
        <td>{{ emp.state }}</td>
        <td>{{ emp.salary }}</td>
        <td>
          <button class="btn btn-primary" @click="openEditPage(emp._id)">
            Edit
          </button>
          <button class="btn btn-primary p-1" @click="deleteEmp(emp._id)">
            Delete
          </button>
        </td>
      </tr>
    </thead>
  </table>

  <!-- <div v-else>
      <h1>No Record Found</h1>
    </div> -->
</template>

<script>
import axios from "axios";
import router from "@/router";
export default {
  name: "EmpList",
  data() {
    return {
      emplist: [],
    };
  },
  created() {
    this.getEmpList();
  },
  methods: {
    async getEmpList() {
      let result = await axios({
        method: "get",
        url: "http://localhost:3000/emp/list",
      });
      console.log(result);
      this.emplist = result.data.data;
    },
    openEditPage(id) {
      router.push({ path: "/emp/edit/" + id });
    },
    async deleteEmp(id) {
      let result = await axios({
        method: "delete",
        url: "http://localhost:3000/emp/delete/" + id,
      });
      if (result.data.success) {
        this.getEmpList();
      }
    },
  },
};
</script>
