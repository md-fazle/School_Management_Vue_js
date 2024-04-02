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
                  <RouterLink class="nav-link" to="/teachers">Logout</RouterLink>
                </li>
              </ul>

            </div>
          </div>
        </nav>
      </div>
    </header>
    <div class="jumbotron jumbotron-fluid text-light bg-dark">
      <div class="container" style="margin-top: 57px;">
        <h1 class="display-4" style="color: white;">FR School Management System </h1>
        <p class="lead" style="color: white;">A School Management System (SMS) is like a digital assistant for your
          school. It helps streamline everyday tasks, freeing up teachers and staff to focus on what matters most -
          teaching and learning.

          Imagine a system that handles admissions, student records, grades, and even communication with parents. An SMS
          can do all that and more! It can also manage class schedules, fees, and keep track of library books. With all
          this information in one place, schools can run more efficiently and make better decisions. Ultimately, a good
          SMS can improve communication, boost parent satisfaction, and create a better learning environment for
          everyone.
        </p>
      </div>
    </div>
    <div class="card-group">
      <div class="card bg-dark">
        <img src="../assets/images/1.jpg" class="card-img-top" alt="...">
        <div class="card-body bg-dark">
          <h5 class="card-title bg-dark text-white">School Management System (SMS)s</h5>
          <p class="card-text bg-dark text-white">Software that helps schools run smoothly.</p>
        </div>
      </div>
      <div class="card bg-dark">
        <img src="../assets/images/2.jpg" class="card-img-top" alt="...">
        <div class="card-body bg-dark">
          <h5 class="card-title bg-dark text-white">Benefits:</h5>
          <p class="card-text bg-dark text-white">Saves time on admin tasks, improves communication between teachers,
            parents and students,
            helps schools make better decisions.</p>
        </div>
      </div>
      <div class="card bg-dark">
        <img src="../assets/images/3.jpg" class="card-img-top" alt="...">
        <div class="card-body bg-dark">
          <h5 class="card-title bg-dark text-white">Features:</h5>
          <p class="card-text bg-dark text-white">Handles admissions, records, grades, communication, schedules, fees,
            and more</p>
        </div>
      </div>
    </div>

  </div>

</template>
