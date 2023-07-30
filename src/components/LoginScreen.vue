<template>
    <div class="login-screen">
      <div class="login-container">
        <h1 class="login-title">Login / Register</h1>
        <img
          src="@/assets/google.png"
          alt="Google Logo"
          class="google-logo"
          @click="redirectToOAuth"
        />
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'LoginScreen',
    methods: {
      redirectToOAuth() {
        // Redirect the user to the provided OAuth URL
        window.location.href = 'http://127.0.0.1:8000/auth/login';
      },
    },
  };
  </script>
  
  <style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Arial', sans-serif;
    background-color: #f9fafb;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
  
  .login-container {
    text-align: center;
    padding: 2rem;
    border-radius: 8px;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
    background-color: #ffffff;
  }
  
  .login-title {
    font-size: 1.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    color: rgb(100 116 139); /* Google blue color */
    text-transform: uppercase; /* Convert the title to uppercase */
  }
  
  .google-logo {
    width: 80px; /* Adjust the size as needed */
    cursor: pointer;
    transition: transform 0.2s ease;
  }
  
  .google-logo:hover {
    transform: scale(1.1); /* Add a slight scale effect on hover */
  }
  </style>
  