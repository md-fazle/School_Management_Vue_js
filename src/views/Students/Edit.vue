<template>
    <div class="bg-dark">
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
    <div class="container mt-5 bg-dark">
        <div class="card bg-dark">
            <div class="card-header bg-dark text-white">
                <h4>Edit student</h4>
            </div>
            <div class="card-body bg-dark text-white">
                <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                    <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                      {{ error[0] }}
                    </li>
                </ul>
                <div class="mb-3">
                    <label for="">Student_id</label>
                    <input type="text" v-model="model.student.Student_id" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Name</label>
                    <input type="text" v-model="model.student.Name" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Age</label>
                    <input type="text" v-model="model.student.Age" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Birth_Date</label>
                    <input type="text" v-model="model.student.Birth_Date" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Phone</label>
                    <input type="text" v-model="model.student.Phone" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Email</label>
                    <input type="text" v-model="model.student.Email" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Father</label>
                    <input type="text" v-model="model.student.Father" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Mother</label>
                    <input type="text" v-model="model.student.Mother" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Father_Num</label>
                    <input type="text" v-model="model.student.Father_Num" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">Address</label>
                    <input type="text" v-model="model.student.Address" class="form-control" />
                </div>
                <div class="mb-3">
                    <label for="">CGPA</label>
                    <input type="text" v-model="model.student.CGPA" class="form-control" />
                </div>
                <div class="mb-3">
                    <button type="button" @click="updateStudent" class="btn btn-primary">Update</button>
                </div>
            </div>
        </div>
    </div>
    </div>
 
</template>
<script>
import axios from 'axios';


export default {
    name: 'students-edit',
    data() {
        return {
            studentId:'',
            errorList:'',
            model: {
                student: {
                    Student_id: '',
                    Name: '',
                    Age: '',
                    Birth_Date: '',
                    Phone: '',
                    Email: '',
                    Father: '',
                    Mother: '',
                    Father_Num: '',
                    Address: '',
                    CGPA: ''
                }
            }
        }
    },
    mounted(){
        // console.log(this.$route.params.id);
        this.studentId = this.$route.params.id;
        this.getStudentData(this.$route.params.id);
    },

    methods: {
        getStudentData(studentId){
            axios.get(`http://127.0.0.1:8000/api/students/${studentId}/edit`)
                 .then(res=>{
                    console.log(res.data.student);
                    this.model.student = res.data.student

            })
            .catch(function(error){
                if(error.response){
                    if(error.response.status == 405){
                        alert(error.response.data.message);
                    }
                }


            });
        },

        updateStudent() {
            var mythis = this;
            axios.put(`http://127.0.0.1:8000/api/students/${this.studentId}/edit`, this.model.student)
                .then(res => {
                    console.log(res.data)
                    alert(res.data.message)
                    this.errorList = '';
                    this.$router.push('/students');
                })
                .catch(function (error) {
                    if (error.response) {
                        if(error.response.status == 422){
                            mythis.errorList = error.response.data.errors;
                        }
                        if(error.response.status == 404){
                             alert(error.response.data.message);
                        }
                    } else if (error.request) {
                  
                        console.log(error.request);
                    } else {
                         
                        console.log('Error', error.message);
                    }
                    console.log(error.config);
                });
        }

    },
}

</script>