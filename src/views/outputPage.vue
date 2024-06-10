<template>
  <div class="output-container">
    <navbarPage />

    <main class="output-page" style="padding: 100px; margin-top: 66px">
      <h4 style="text-align: center; margin-bottom: 50px">Output Form Pengisian Sistem Peringkat</h4>
      
      <div v-if="formData">
        <div class="output-item">
          <label class="output-label">Tahun:</label>
          <p class="output-value">{{ formData.tahun }}</p>
        </div>

        <div class="output-item">
          <label class="output-label">Jawaban:</label>
          <p class="output-value">{{ formData.jawaban1 }}</p>
        </div>

        <div class="output-item" v-if="formData.lampirkan_url1">
          <label class="output-label">Lampirkan URL:</label>
          <p class="output-value"><a :href="formData.lampirkan_url1" target="_blank">{{ formData.lampirkan_url1 }}</a></p>
        </div>

        <div class="output-item" v-if="formData.lampiran_file1">
          <label class="output-label">Lampiran file:</label>
          <p class="output-value"><a :href="formData.lampiran_file1" target="_blank">Download File</a></p>
        </div>
      </div>
      <div v-else>
        <p>Loading...</p>
      </div>

      <div class="button-container">
        <button class="btn btn-primary" type="button" @click="goBack">Kembali</button>
      </div>
    </main>
  </div>
</template>

<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
  data() {
    return {
      formData: null,
    };
  },
  created() {
    this.fetchFormData();
  },
  methods: {
    fetchFormData() {
      fetch('/inputnu')
        .then(response => response.json())
        .then(data => {
          this.formData = data;
        })
        .catch(error => {
          console.error('Error fetching form data:', error);
        });
    },
    goBack() {
      this.$router.go(-1);
    }
  }
};
</script>

<style scoped>
.output-container {
  text-align: center;
}

.output-item {
  margin-bottom: 20px;
}

.output-label {
  font-weight: bold;
}

.output-value {
  margin-left: 10px;
  display: inline-block;
}

.button-container {
  margin-top: 20px;
  text-align: center;
}

.btn {
  padding: 7px 25px;
  margin: 0 10px;
  border-radius: 5px;
  cursor: pointer;
  margin-bottom: 50px;
}

.btn-primary {
  padding: 8px 25px;
  background-color: #2aaa94;
  color: white;
  border: none;
}
.btn-primary:hover {
  background-color: #268e7d;
}

.btn-primary:active {
  background-color: #1f7e6e;
  color: white;
}
</style>
