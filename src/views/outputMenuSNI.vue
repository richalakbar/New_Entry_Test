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

  <main class="title-page" style="padding-left: 100px; padding-right: 100px; margin-top: 66px;">
    <a
      href="/output"
      class="card mb-3 custom-card text-decoration-none"
      target="_blank"
    >
      <div class="container-outputmenu">
        <div class="col">
          <h5 class="card-title">Pertanyaan....</h5>
          <p class="margin-top-outputmenu card-text text-body-secondary">
            <small class="text-body-secondary">Isi pertanyaan....</small>
          </p>
        </div>
        <div>
          <p class="card-text text-end">2024</p>
        </div>
      </div>
    </a>
  </main>

  <a style="margin-top: 25px;" href="/" class="button-wrapper-outputmenu">
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
  padding: 10px;
  justify-content: center;
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

.custom-card-outputmenu {
  background-color: rgba(42, 170, 148, 0.2);
}

.container-outputmenu {
  display: flex;
  align-items: center;
  padding: 15px;
  justify-content: center;
}

.margin-top-outputmenu {
  margin-top: -10px;
}

.button-wrapper-outputmenu {
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
}

.btn-outputmenu {
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

.btn-outputmenu:hover {
  background-color: #268e7d;
  border-color: #2aaa94;
}
</style>