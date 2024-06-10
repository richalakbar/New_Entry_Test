<template>
  <navbarPage />

  <main
    class="title-page"
    style="padding-left: 100px; padding-right: 100px; margin-top: 66px"
  >
    <h4 style="text-align: center; margin-bottom: 50px">
      Form Pengisian Sistem Peringkat
    </h4>
    <div style="padding-bottom: 50px" class="mb-3">
      <label for="tahun" class="form-label">Tahun</label>
      <input
        type="text"
        class="form-control"
        id="tahun"
        v-model="tahun"
        placeholder="Masukkan tahun saat ini"
      />
    </div>

    <div style="margin-bottom: -5ch;">
      <div class="margin-form">
        <div class="mb-3">
          <h6>1. Pertanyaan</h6>
          <label style="margin-top: -8px" for="jawaban1" class="form-label"
            >Jawaban</label
          >
          <textarea
            class="form-control"
            id="jawaban1"
            v-model="jawaban1"
            rows="3"
            placeholder="Masukkan jawaban anda"
          ></textarea>
        </div>
        <div class="mb-3">
          <label for="lampirkan_url1" class="form-label">Lampirkan URL</label>
          <input
            type="text"
            class="form-control"
            id="lampirkan_url1"
            v-model="lampirkan_url1"
            placeholder="Lampirkan URL jika ada"
          />
        </div>
        <div class="mb-3">
          <label for="lampiran_file1" class="form-label"
            >Lampiran file (Jpg,Jpeg,Png,Docx,Pdf)</label
          >
          <input
            class="form-control"
            type="file"
            id="lampiran_file1"
            @change="onFileChange"
          />
        </div>
      </div>
    </div>

    <div class="button-container">
      <a href="/output"><button class="btn btn-kirim" type="submit" @click="submitForm">Kirim</button></a>
     <a href="/outputmenunu"><button class="btn btn-success" type="button" @click="viewForm">Lihat</button></a>
      <button class="btn btn-primary" type="button" @click="editForm">Edit</button>
    </div>
  </main>
</template>

<script>
import navbarPage from "@/components/navbarComponent.vue";

export default {
  components: {
    navbarPage,
  },
  data() {
    return {
      tahun: '',
      jawaban1: '',
      lampirkan_url1: '',
      lampiran_file1: null
    };
  },
  methods: {
    submitForm() {
      const formData = new FormData();
      formData.append('tahun', this.tahun);
      formData.append('jawaban1', this.jawaban1);
      formData.append('lampirkan_url1', this.lampirkan_url1);
      formData.append('lampiran_file1', this.lampiran_file1);

      fetch('/', { 
        method: 'POST',
        body: formData,
      })
      .then(response => {
        if (response.ok) {
          alert('Formulir berhasil dikirim!');
          this.resetForm();
        } else {
          alert('Terjadi kesalahan saat mengirim formulir!');
        }
      })
      .catch(error => {
        console.error('Error:', error);
        alert('Terjadi kesalahan saat mengirim formulir!');
      });
    },
    resetForm() {
      this.tahun = '';
      this.jawaban1 = '';
      this.lampirkan_url1 = '';
      this.lampiran_file1 = null;
    },
    viewForm() {
      this.$router.push('/output');
    },
    editForm() {
      alert("Mengedit formulir!");
    },
    onFileChange(event) {
      this.lampiran_file1 = event.target.files[0];
    }
  }
};
</script>

<style scoped>
.margin-form {
  margin-bottom: 100px;
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

.btn-kirim {
  padding: 8px 25px;
  background-color: #2aaa94;
  color: white;
  border: none;
}
.btn-kirim:hover {
  background-color: #268e7d;
}

.btn-kirim:active {
  background-color: #1f7e6e;
  color: white;
}
</style>
