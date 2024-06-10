<template>
  <div class="wrapper-create">
    <div class="container-create">
      <form>
        <div class="mb-3">
          <label for="userInput" class="form-label">User</label>
          <input type="text" class="form-control" id="userInput" placeholder="Masukkan nama anda" />
        </div>

        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked />
          <label class="form-check-label" for="flexRadioDefault1">User</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2" />
          <label class="form-check-label" for="flexRadioDefault2">Admin</label>
        </div>

        <div class="mb-3 mt-3">
          <label for="fakultasInput" class="form-label">Fakultas</label>
          <input type="text" class="form-control" id="fakultasInput" placeholder="Masukkan fakultas anda" />
        </div>

        <div class="mb-3">
          <label for="prodiInput" class="form-label">Prodi</label>
          <input type="text" class="form-control" id="prodiInput" placeholder="Masukkan prodi anda" />
        </div>

        <div class="mb-3">
          <label for="usernameInput" class="form-label">Username</label>
          <input type="text" class="form-control" id="usernameInput" placeholder="Masukkan username anda" />
        </div>

        <div class="mb-3">
          <label for="passwordInput" class="form-label">Password</label>
          <input type="password" class="form-control" id="passwordInput" placeholder="Masukkan password anda" />
        </div>

        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="flexCheckWCU" />
          <label class="form-check-label" for="flexCheckWCU">WCU (QS/THE)</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="flexCheckGreenmetric" />
          <label class="form-check-label" for="flexCheckGreenmetric">NU Greenmetric</label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="checkbox" id="flexCheckSNI" />
          <label class="form-check-label" for="flexCheckSNI">SNI Award</label>
        </div>

        <button style="margin-top: 20px;" type="submit" class="btn-create btn-primary">Submit</button>
      </form>
    </div>
  </div>
</template>

<style>
.wrapper-create {
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
}

.container-create {
  width: 50%;
  max-width: 500px;
  padding: 20px;
  border: 1px solid #ccc;
  border-radius: 10px;
  background-color: #f9f9f9;
  text-align: left;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Efek bayangan */
}

.btn-create {
  width: 100%;
  background-color: #2aaa94;
  color: white;
  padding: 6px;
  text-align: center;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

.btn-create:hover {
  background-color: #268e7d;
}

.btn-create:active {
  background-color: #1f7e6e;
}
</style>
