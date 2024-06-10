<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
};
</script>

<template>
  <div>
    <navbarPage />
    <body>
      <div style="margin-bottom: -10px;">
        <h1 style="margin-top: 66px" class="title-page fw-bold text-center">
          Sistem <span>Pemeringkatan</span>
        </h1>
        <p class="paragrah-page text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore veniam...
        </p>
      </div>
      <div
        style="margin-bottom: 33px"
        class="card-container d-flex justify-content-center flex-wrap"
      >
        <div class="card" style="width: 18rem">
          <img src="../assets/WCN (QS/WCN.png" class="card-img-top" alt="..." />
          <div class="card-body">
            <h5 class="card-title">WCU (QS/THE)</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#"
              class="btn-home border-btn btn-primary button-wrapper-outputmenu text-decoration-none"
              >WCU (QS/THE)</a
            >
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img
            src="../assets/NI Greenmetrit/ni.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">NU Greenmetric</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="/inputnu"
              class="btn-home border-btn btn-primary button-wrapper-outputmenu text-decoration-none"
              >NU Greenmetric</a
            >
          </div>
        </div>

        <div class="card" style="width: 18rem">
          <img
            src="../assets/SNI Award/sni.png"
            class="card-img-top"
            alt="..."
          />
          <div class="card-body">
            <h5 class="card-title">SNI Award</h5>
            <p class="card-text">
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </p>
            <a
              href="#"
              class="btn-home border-btn btn-primary button-wrapper-outputmenu text-decoration-none"
              >SNI Award</a
            >
          </div>
        </div>
      </div>
    </body>
  </div>
</template>

<style>
h1 span {
  color: #2aaa94;
}

.card-container {
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
}

.card {
  margin: 10px;
}

.card-body {
  background-color: #f8f9fa;
  border-radius: 25px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
}

.container {
  max-width: 400px;
  margin: 0 auto;
  padding: 50px 20px;
  text-align: center;
}

.card {
  margin-left: 30px;
  border-radius: 23px;
}

.paragrah-page {
  margin-bottom: 40px;
}

.btn-home {
  background-color: #2aaa94;
  color: white;
  padding: 7px;
  text-align: center;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: none;
}

.btn-home:hover {
  background-color: #268e7d;
  border-color: #2aaa94;
}

.btn-home:active {
  background-color: #1f7e6e;
  border-color: #1f7e6e;
}
</style>
