<template>
    <div class="form-container">
      <div class="form-header">
        <h1>{{ isLogin ? 'Login' : 'Register' }}</h1>
        <p>{{ isLogin ? 'Welcome back! Please login to continue.' : 'Create an account to get started.' }}</p>
      </div>
      <form @submit.prevent="isLogin ? login : register" class="form-body">
        <div class="form-group">
          <label for="username">Username</label>
          <input type="text" id="username" v-model="username" required>
        </div>
        <div class="form-group">
          <label for="password">Password</label>
          <input type="password" id="password" v-model="password" required>
        </div>
        <button type="submit">{{ isLogin ? 'Login' : 'Register' }}</button>
      </form>
      <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>
      <div class="form-footer">
        <p>{{ isLogin ? 'Don\'t have an account?' : 'Already have an account?' }}</p>
        <button @click="toggleForm">{{ isLogin ? 'Register' : 'Login' }}</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        isLogin: true,
        username: '',
        password: '',
        errorMessage: ''
      };
    },
    methods: {
    toggleForm() {
      this.isLogin = !this.isLogin;
      this.username = '';
      this.password = '';
      this.errorMessage = '';
    },
    login() {
  // Simulasi proses login
  if (this.username === 'admin' && this.password === 'password') {
    // Berhasil login
    alert('Login berhasil!');
    window.location.href = '/dashboard-app'; // Mengarahkan ke halaman dashboard-app
  } else {
    // Gagal login
    this.errorMessage = 'Invalid username or password';
  }
},
      register() {
        // Simulasi proses registrasi
      if (this.username && this.password) {
        // Berhasil registrasi
        alert('Registration successful!');
      } else {
        // Gagal registrasi
        this.errorMessage = 'Please fill in all fields';
        }
      }
    }
  };
  </script>
  
  <style>
  .form-container {
    max-width: 400px;
    margin: 0 auto;
    padding: 20px;
    background-color: #f4f4f4;
    border-radius: 5px;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .form-header {
    text-align: center;
    margin-bottom: 20px;
  }
  
  .form-group {
    margin-bottom: 10px;
  }
  
  label {
    font-weight: bold;
  }
  
  input[type="text"],
  input[type="password"] {
    width: 100%;
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    display: block;
    width: 100%;
    padding: 10px;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 4px;
    cursor: pointer;
  }
  
  .error-message {
    color: red;
    text-align: center;
    margin-top: 10px;
  }
  
  .form-footer {
    text-align: center;
    margin-top: 20px;
  }
  
  .form-footer button {
    background-color: transparent;
    border: none;
    color: #4caf50;
    cursor: pointer;
    text-decoration: underline;
  }
  </style>