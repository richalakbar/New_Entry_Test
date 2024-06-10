<template>
  <div>
    <h1>API Data</h1>
    <div v-if="loading">Loading...</div>
    <div v-else-if="error">{{ error }}</div>
    <div v-else>
      <ul>
        <li v-for="item in data" :key="item.id">{{ item.name }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import apiService from "@/apiService";

export default {
  data() {
    return {
      data: [],
      loading: true,
      error: null,
    };
  },
  created() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        const response = await apiService.get("/endpoint");
        this.data = response.data;
      } catch (err) {
        if (err.response) {
          // Server responded with a status other than 200 range
          this.error = `Error: ${err.response.status} - ${err.response.data.message}`;
        } else if (err.request) {
          // Request was made but no response received
          this.error = "No response from server.";
        } else {
          // Something happened in setting up the request
          this.error = "Request error: " + err.message;
        }
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>
