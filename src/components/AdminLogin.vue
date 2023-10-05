<script setup>
  import { useRouter } from 'vue-router';
  import { ref } from 'vue';
  
  import { useNav } from '../assets/Nav'

  const router = useRouter();

  const username = ref('');
  const password = ref('');
  const isAuthenticated = ref(false);
  const loginError = ref(false);

  const { redirect } = useNav(isAuthenticated, 'blog');

  function login() {
    const registeredUsername = localStorage.getItem('registeredUsername');
    const registeredPassword = localStorage.getItem('registeredPassword');

    if (username.value === registeredUsername && password.value === registeredPassword) {
      isAuthenticated.value = true;
      localStorage.setItem('isAdmin', 'true');
      loginError.value = false; 

      alert("Authentication successful. You will now be redirected to the blog page...");

      redirect();

    } else {
      localStorage.setItem('isAdmin', 'false');
      isAuthenticated.value = false;
      loginError.value = true;
    }
  }
</script>

<style scoped>
    input,
    label,
    button {
        display: flex;
        justify-content: center;
        margin: auto !important;
        float: center;
        width: 250px;
    }

</style>

<template>
    <div>
      <h1>Login Page</h1>
      <form @submit.prevent="login">
        <label for="username">Username:</label>
        <input type="text" id="username" v-model="username" required />
        <br />
  
        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password" required />
        <br />
  
        <button type="submit">Login</button>
      </form>
  
      <p v-if="isAuthenticated">Welcome back, {{ username }}!</p>
      <p v-if="loginError">Invalid credentials. Please try again.</p>
    </div>
  </template>
  
  
  