<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
};
</script>

<template>
  <navbarPage />
  <div style="margin-top: 80px">
    <div class="row justify-content-center">
      <div class="col-md-11">
        <a href="/outputmenuwcu" class="title-page text-decoration-none">
          <div class="card custom-card">
            <div class="container-dashboard">
              <div style="margin-right: 15px; margin-left: 12px">
                <img
                  width="70"
                  height="70"
                  src="../assets/User Male.png"
                  alt="..."
                  class="rounded-image"
                />
              </div>
              <div class="row">
                <h5 style="margin-top: 10px" class="card-title">
                  Richal Akbar
                </h5>
                <p style="margin-top: -10px">Teknik</p>
                <p style="margin-bottom: 10px">
                  <small class="text-body-secondary">Teknik Informatika</small>
                </p>
              </div>
              <div class="year">
                <p style="margin-right: 12px" class="card-text">2024</p>
              </div>
            </div>
          </div>
        </a>
      </div>
    </div>
  </div>
  <a style="margin-top: 15px;" href="/" class="button-wrapper-outputmenu">
    <button class="btn-dashboard btn-primary border-btn" type="submit">Kembali</button>
  </a>
</template>

<style>
.rounded-image {
  border-radius: 50%;
}

.custom-card {
  background-color: rgba(42, 170, 148, 0.2);
  transition: background-color 0.3s ease; 
}

.custom-card:hover {
  background-color: rgba(42, 170, 148, 0.5); 
}

.custom-card:active {
  background-color: rgba(42, 170, 148, 0.8); 
}

.container-dashboard {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
}

.row {
  flex-grow: 1;
}

.year {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.btn-dashboard {
  background-color: #2aaa94;
  color: white;
  padding: 7px;
  text-align: center;
  padding-left: 8px;
  padding-right: 8px;
  width: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.btn-dashboard:hover {
  background-color: #268e7d;
  border-color: #2aaa94;
}

.btn-dashboard:active {
  background-color: #1f7e6e;
  border-color: #1f7e6e;
}

.button-wrapper-outputmenu {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}
</style>
