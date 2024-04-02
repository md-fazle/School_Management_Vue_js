<template>
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
                                <RouterLink class="nav-link active" to="/login">Login</RouterLink>
                            </li>
                            <li class="nav-item">
                                <RouterLink class="nav-link" to="/register">Registration</RouterLink>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>

        </div>
    </header>
  <div class="container mt-3 ">
    <div class="card bg-dark text-white">
      <div class="card-header bg-dark text-white">
        <h2 style='text-align: center;'>Registration</h2>
      </div>
      <div class="card-body bg-dark text-white">
        <ul class="alert alert-warning" v-if="Object.keys(this.errorList).length > 0">
          <li class="mb-0 ms-3" v-for="(error, index) in this.errorList" :key="index">
            {{ error[0] }}
          </li>
        </ul>
        <div class="mb-3">
          <label for="">Name</label>
          <input type="text" v-model="model.user.name" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Email</label>
          <input type="text" v-model="model.user.email" class="form-control" />
        </div>
        <div class="mb-3">
          <label for="">Password</label>
          <input type="text" v-model="model.user.password" class="form-control" />
        </div>
      </div>
      <div class="mb-3">
        <button type="button" @click="saveUser" class="btn btn-primary">Save</button>
      </div>
    </div>
  </div>
</template>

<script>

import axios from 'axios';

export default {
  name: 'register',
  data() {
    return {
      errorList: '',
      model: {
        user: {
          name: '',
          email: '',
          password: ''
        }
      }
    }
  },
  methods: {

    saveUser() {
      var mythis = this;
      axios.post('http://127.0.0.1:8000/api/register', this.model.user)
        .then(res => {
          console.log(res.data)
          alert(res.data.message)
          this.model.user = {
            name: '',
            email: '',
            password: ''
          }
          this.errorList = '';
          this.$router.push('/login');
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