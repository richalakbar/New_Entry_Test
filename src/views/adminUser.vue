<template>
  <div>
    <navbarPage />
    <main class="container-admin-user">
      <navbarAdmin />
      <div class="content-admin-user">
        <table class="table">
          <thead>
            <tr class="th-middle">
              <th class="text-center" scope="col">No</th>
              <th scope="col">User</th>
              <th scope="col">Fakultas</th>
              <th scope="col">Prodi</th>
              <th scope="col">Username</th>
              <th scope="col">Password</th>
              <th class="text-center" scope="col">WCU (QS/THE)</th>
              <th class="text-center" scope="col">NU Greenmetric</th>
              <th class="text-center" scope="col">SNI Award</th>
              <th class="text-center action-column" scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="(user, index) in users" :key="user.id">
              <th class="text-center th-middle" scope="row">{{ index + 1 }}</th>
              <td v-if="!user.isEditing" class="text-left td-middle">{{ user.nama_lengkap }}</td>
              <td v-else><input v-model="user.nama_lengkap" class="table-input" /></td>
              <td v-if="!user.isEditing" class="text-left td-middle">{{ user.fakultas }}</td>
              <td v-else><input v-model="user.fakultas" class="table-input" /></td>
              <td v-if="!user.isEditing" class="text-left td-middle">{{ user.program_studi }}</td>
              <td v-else><input v-model="user.program_studi" class="table-input" /></td>
              <td v-if="!user.isEditing" class="text-left td-middle">{{ user.username }}</td>
              <td v-else><input v-model="user.username" class="table-input" /></td>
              <td v-if="!user.isEditing" class="text-left td-middle">{{ user.password }}</td>
              <td v-else><input v-model="user.password" class="table-input" /></td>
              <td class="text-center td-middle"><iconPlus v-if="!user.isEditing" /></td>
              <td class="text-center td-middle"><iconPlus v-if="!user.isEditing" /></td>
              <td class="text-center td-middle"><iconPlus v-if="!user.isEditing" /></td>
              <td class="text-center action-column">
                <button v-if="!user.isEditing" @click="editUser(index)" class="action-btn edit-btn">Edit</button>
                <button v-else @click="saveUser(index)" class="action-btn save-btn">Simpan</button>
                <button @click="removeUser(user.id)" style="margin-left: 5px" class="action-btn remove-btn">Hapus</button>
              </td>
            </tr>
          </tbody>
        </table>
        <div>
          <button @click="addNewRow" class="action-btn add-new-btn">Tambah User</button>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import axios from 'axios';
import api from '../services/api';
import navbarPage from "@/components/navbarComponent.vue";
import navbarAdmin from "@/components/navbarAdmin.vue";
import iconPlus from "@/components/iconPlus.vue";

export default {
  components: {
    navbarPage,
    navbarAdmin,
    iconPlus
  },
  data() {
    return {
      users: []
    };
  },
  created() {
    this.fetchUsers();
  },
  methods: {
    async fetchUsers() {
      try {
        const response = await api.getUsers();
        this.users = response.data.map(user => ({ ...user, isEditing: false }));
      } catch (error) {
        console.error('Error fetching users:', error);
      }
    },
    addNewRow() {
      this.users.push({
        id: null,
        nama_lengkap: '',
        fakultas: '',
        program_studi: '',
        username: '',
        password: '',
        isEditing: true
      });
    },
    async addUser(index) {
      const user = this.users[index];
      try {
        const response = await api.createUser(user);
        this.$set(this.users, index, { ...response.data, isEditing: false });
      } catch (error) {
        console.error('Error adding user:', error);
      }
    },
    editUser(index) {
      this.$set(this.users, index, { ...this.users[index], isEditing: true });
    },
    async saveUser(index) {
      const user = this.users[index];
      try {
        if (user.id) {
          const response = await api.updateUser(user.id, user);
          this.$set(this.users, index, { ...response.data, isEditing: false });
        } else {
          const response = await api.createUser(user);
          this.$set(this.users, index, { ...response.data, isEditing: false });
        }
      } catch (error) {
        console.error('Error saving user:', error);
      }
    },
    async removeUser(id) {
      try {
        await api.deleteUser(id);
        this.users = this.users.filter(user => user.id !== id);
      } catch (error) {
        console.error('Error removing user:', error);
      }
    }
  }
};
</script>

<style scoped>
/* Add your styles here */
.form-group {
  margin-bottom: 15px;
}
.form-control {
  width: 100%;
  padding: 10px;
  margin-top: 5px;
}
.btn {
  margin-top: 10px;
}
</style>
