<template>
    <div class="bg-dark text-white">
        <header>
            <div class="wrapper">
                <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div class="container">
                        <RouterLink class="navbar-brand" to="/">School Management System</RouterLink>
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
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
            <div class="card bg-dark text-white">
                <div class="card-header">
                    <h4>Add Teacher</h4>
                </div>
                <div class="card-body">
                    <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
                        <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
                            {{ error[0] }}
                        </li>
                    </ul>
                    <div class="mb-3">
                        <label for="">Teacher_id</label>
                        <input type="text" v-model="model.teacher.Teacher_id" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Name</label>
                        <input type="text" v-model="model.teacher.Name" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Age</label>
                        <input type="text" v-model="model.teacher.Age" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Birth_Date</label>
                        <input type="text" v-model="model.teacher.Birth_Date" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Phone</label>
                        <input type="text" v-model="model.teacher.Phone" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Email</label>
                        <input type="text" v-model="model.teacher.Email" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Gander</label>
                        <input type="text" v-model="model.teacher.Gander" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Department</label>
                        <input type="text" v-model="model.teacher.Department" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Possession</label>
                        <input type="text" v-model="model.teacher.Possession" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Address</label>
                        <input type="text" v-model="model.teacher.Address" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <label for="">Salary</label>
                        <input type="text" v-model="model.teacher.Salary" class="form-control" />
                    </div>
                    <div class="mb-3">
                        <button type="button" @click="saveTeacher" class="btn btn-primary">Save</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import axios from 'axios';


export default {
    name: 'teachers-create',
    data() {
        return {
            errorList: '',
            model: {
                teacher: {
                    Teacher_id: '',
                    Name: '',
                    Age: '',
                    Birth_Date: '',
                    Phone: '',
                    Email: '',
                    Gander: '',
                    Department: '',
                    Possession: '',
                    Address: '',
                    Salary: ''
                }
            }
        }
    },
    methods: {

        saveTeacher() {
            var mythis = this;
            axios.post('http://127.0.0.1:8000/api/teachers', this.model.teacher)
                .then(res => {
                    console.log(res.data)
                    alert(res.data.message)
                    this.model.teacher = {
                        Teacher_id: '',
                        Name: '',
                        Age: '',
                        Birth_Date: '',
                        Phone: '',
                        Email: '',
                        Gander: '',
                        Department: '',
                        Possession: '',
                        Address: '',
                        Salary: ''
                    }
                    this.errorList = '';
                    this.$router.push('/teachers');

                })
                .catch(function (error) {
                    if (error.response) {
                        if (error.response.status == 422) {
                            mythis.errorList = error.response.data.errors;
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