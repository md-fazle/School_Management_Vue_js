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
    <div class="container">
        <div class="row justify-content-center mt-5">
            <div class="col-md-6 col-sm-10">
                <div class="card ">
                    <div class="card-header bg-dark text-white">
                        <h3>Login</h3>
                    </div>
                    <div class="card-body bg-dark text-white">
                        <form @submit.prevent="submitLogin" class="mb-3">
                            <div class="form-group">
                                <label for="email" class="form-label">Email</label>
                                <input type="email" id="email" v-model="email" class="form-control">
                            </div>
                            <div class="form-group">
                                <label for="password" class="form-label">Password</label>
                                <input type="password" id="password" v-model="password" class="form-control">
                            </div>
                            <button type="submit" class="btn btn-primary">Login</button>
                            <div v-if="error" class="alert alert-danger mt-3" role="alert">{{ error }}</div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'; // Import Axios

export default {
    data() {
        return {
            email: '',
            password: '',
            error: '',
        };
    },
    methods: {
        async submitLogin() {
            try {
                const response = await axios.post('http://127.0.0.1:8000/api/login', {
                    email: this.email,
                    password: this.password,
                });

                const data = response.data;

                if (data.status === 200) {
                    //   localStorage.setItem('token', data.token); // Store token in localStorage
                    this.$router.push('/home'); // Redirect to home page
                } else {
                    this.error = data.message;
                }
            } catch (error) {
                console.error('Error logging in:', error);
                this.error = 'An error occurred. Please try again.';
            }
        },
    },
};
</script>
