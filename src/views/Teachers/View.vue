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
  <div>
    <div class="card bg-dark">
      <div class="card-header bg-dark">
        <h3>Teachers <RouterLink to="/teachers/create" class="btn btn-primary float-end">Add Teacher</RouterLink>
        </h3>
      </div>
      <div class="card-body bg-dark">
        <table class="table table-bordered">
          <thead>
            <tr>
              <!-- <th>ID</th> -->
              <th>Teacher_id</th>
              <th>Name</th>
              <th>Age</th>
              <th>Birth_Date</th>
              <th>Phone</th>
              <th>Email</th>
              <th>Gander</th>
              <th>Department</th>
              <th>Possession</th>
              <th>Address</th>
              <th>Salary</th>
              <th>Action</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody v-if="this.teachers.length > 0">
            <tr v-for="(teacher, index) in this.teachers" :key="index">
              <!-- <td>{{ teacher.id }}</td> -->
              <td>{{ teacher.Teacher_id }}</td>
              <td>{{ teacher.Name }}</td>
              <td>{{ teacher.Age }}</td>
              <td>{{ teacher.Birth_Date }}</td>
              <td>{{ teacher.Phone }}</td>
              <td>{{ teacher.Email }}</td>
              <td>{{ teacher.Gander }}</td>
              <td>{{ teacher.Department }}</td>
              <td>{{ teacher.Possession }}</td>
              <td>{{ teacher.Address }}</td>
              <td>{{ teacher.Salary }}</td>
              <td>
                <RouterLink :to="{path:'/teachers/'+teacher.id+'/edit'}" class="btn btn-success">Edit</RouterLink>
              </td>
              <td><button type="button" @click="deleteTeacher(teacher.id)" class="btn btn-danger">Delete</button></td>
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
  </div>
</template>


<script>
import axios from 'axios';


export default {

  name: 'teachers',
  data() {
    return {
      teachers: []
    }
  },

  mounted() {
    this.getTeacher();
  },

  methods: {
    getTeacher() {
      axios.get('http://127.0.0.1:8000/api/teachers')
        .then(res => {
          this.teachers = res.data.teachers
        });
    },
    
    deleteTeacher(teacherId){
      if(confirm("Do you want to delete this data?")){
        axios.delete(`http://127.0.0.1:8000/api/teachers/${teacherId}/delete`)
            .then(res=>{
              alert(res.data.message);
              this.getTeacher();
            })
            .catch(function(error){
                if(error.response){
                    if(error.response.status == 404){
                        alert(error.response.data.message);
                    }
                }


            });
      }

    }

  }






}


</script>