import { RouterLink } from 'vue-router';
<template>
  <header>
    <div class="wrapper">
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <div class="container">
          <RouterLink class="navbar-brand" to="/">School Management System</RouterLink>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false"
            aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
              <li class="nav-item">
                <RouterLink class="nav-link active" to="/home">Home</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/students">Students</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/teachers">Teachers</RouterLink>
              </li>
              <li class="nav-item">
                <RouterLink class="nav-link" to="/login">Logout</RouterLink>
              </li>
            </ul>

          </div>
        </div>
      </nav>

    </div>
  </header>

  <div class="card bg-dark">
    <div class="card-header bg-dark">
      <h3>Students <RouterLink to="/students/create" class="btn btn-primary float-end">Add student</RouterLink>
      </h3>
    </div>
    <div class="card-body bg-dark">
      <table class="table table-bordered bg-dark">
        <thead>
          <tr>
            <!-- <th>ID</th> -->
            <th>Student_id</th>
            <th>Name</th>
            <th>Age</th>
            <th>Birth_Date</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Father</th>
            <th>Mother</th>
            <th>Father_Num</th>
            <th>Address</th>
            <th>CGPA</th>
            <th>Action</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody v-if="this.students.length > 0">
          <tr v-for="(student, index) in this.students" :key="index">
            <!-- <td>{{ student.id }}</td> -->
            <td>{{ student.Student_id }}</td>
            <td>{{ student.Name }}</td>
            <td>{{ student.Age }}</td>
            <td>{{ student.Birth_Date }}</td>
            <td>{{ student.Phone }}</td>
            <td>{{ student.Email }}</td>
            <td>{{ student.Father }}</td>
            <td>{{ student.Mother }}</td>
            <td>{{ student.Father_Num }}</td>
            <td>{{ student.Address }}</td>
            <td>{{ student.CGPA }}</td>
            <td>
              <RouterLink :to="{ path: '/students/' + student.id + '/edit' }" class="btn btn-success">Edit</RouterLink>
            </td>
            <td><button type="button" @click="deleteStudent(student.id)" class="btn btn-danger">Delete</button></td>


          </tr>
        </tbody>
        <tbody v-else>
          <tr>
            <td colspan="14">Loading...</td>
          </tr>

        </tbody>
      </table>
    </div>
  </div>

</template>

<script>
import axios from 'axios';


export default {

  name: 'students',
  data() {
    return {
      students: []
    }
  },

  mounted() {
    // console.log('i am here')
    this.getStudents();
  },

  methods: {
    getStudents() {
      axios.get('http://127.0.0.1:8000/api/students').then(res => {
        this.students = res.data.students
        //  console.log(this.students) 
      });
    },
    deleteStudent(studentId) {
      if (confirm("Do you want to delete this deta?")) {
        // console.log(studentId);
        axios.delete(`http://127.0.0.1:8000/api/students/${studentId}/delete`)
          .then(res => {
            alert(res.data.message);
            this.getStudents();
          })
          .catch(function (error) {
            if (error.response) {
              if (error.response.status == 404) {
                alert(error.response.data.message);
              }
            }


          });
      }
    },
  }

}


</script>