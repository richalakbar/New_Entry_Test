<template>
  <div class="container login">
    <div class="card-body d-flex login">
      <div class="form-style login">
        <h1 class="title-page-style fw-bold login">
          Sistem <span>Pemeringkatan</span>
        </h1>
        <img src="../assets/LOGO.png" class="mb-3 login" alt="Logo Unhas" />
        <form action="process_login.php" method="post" class="login">
          <div class="mb-3 login">
            <label for="username" class="label-style login">USERNAME</label>
            <input
              type="text"
              id="username"
              name="username"
              class="form-control input-custom login"
              required
            />
          </div>
          <div class="mb-3 login">
            <label for="password" class="label-style login">PASSWORD</label>
            <input
              type="password"
              id="password"
              name="password"
              class="form-control input-custom login"
              required
            />
          </div>
          <RouterLink to="/" class="login">
            <button type="submit" class="btn-style btn-login login">LOGIN</button>
          </RouterLink>
        </form>
      </div>
      <div class="img-style login">
        <img src="../assets/image.png" alt="Login" class="img-size login" />
      </div>
    </div>
  </div>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  components: {},
};
</script>

<style>
.container.login {
  max-width: 1018px;
  margin: 100 auto;
}

.label-style.login {
  display: flex;
  justify-content: flex-start;
  align-items: flex-start; 
}

.d-flex.login {
  display: flex;
  justify-content: center;
  align-items: center;
}

.title-page-style.login {
  margin-bottom: 10px;
}

.form-style.login {
  margin-right: 5px;
  margin-left: -40px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.btn-login.login {
  width: 100%;
  background-color: #2aaa94;
  color: white;
  padding: 10px;
  text-align: center;
  border: none;
  border-radius: 5px;
}

.btn-login.login:hover {
  background-color: #268e7d;
}

.btn-login.login:active {
  background-color: #1f7e6e;
}

.input-custom.login {
  background-color: #f0f8ff;
  border: 2px solid #e4e4e4;
  padding: 10px;
}

.input-custom.login:focus {
  background-color: #e0f7fa;
  border-color: #268e7d;
}

.img-size.login {
  margin-right: -80px;
  width: 45ch;
  height: auto;
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
}

.img-style.login {
  margin-left: 100px; 
}

.card-body.login {
  max-width: 950px; 
  width: 100%;
  display: flex;
  justify-content: flex-center;
  align-items: flex-center;
}

.img-style.login {
  margin-left: 20px; 
}
                                              
@media (max-width: 768px) {
  .img-style.login {
    display: none;
  }

  .form-style.login {
    margin-left: 0;
    margin-right: 0;
  }

  .d-flex.login {
    flex-direction: column;
  }

  .card-body.login {
    margin: 10px;
  }
}
</style>
