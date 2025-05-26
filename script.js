document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.querySelector('.login-container form');
  
    loginForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const usernameInput = this.querySelector('input[name="username"]');
      const passwordInput = this.querySelector('input[name="password"]');
      const username = usernameInput.value.trim();
      const password = passwordInput.value.trim();
      const specificUsername = "Inthiyaz";
      const specificPassword = "ishan";
  
      if (username === specificUsername && password === specificPassword) {
        window.location.href = this.action; 
        console.log("Login successful for specific user!");
      } else {
        const errorMessage = document.createElement('p');
        errorMessage.textContent = "Invalid username or password.";
        errorMessage.style.color = "red";
        this.insertBefore(errorMessage, this.querySelector('button'));
        passwordInput.value = "";
  
        console.log("Login failed.");
      }
    });
  });