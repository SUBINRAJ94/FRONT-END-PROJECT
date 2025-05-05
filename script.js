
  const form = document.getElementById('loginForm');
  const usernameInput = document.getElementById('username');
  const passwordInput = document.getElementById('password');
  const warning = document.getElementById('warning');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    const username = usernameInput.value.trim();
    const password = passwordInput.value.trim();

    if (!username || !password) {
      warning.textContent = 'Please enter both username and password.';
      warning.style.color = 'red';
      return;
    }

    if (username !== 'admin' || password !== 'admin') {
      warning.textContent = 'Incorrect username or password.';
      warning.style.color = 'red';
      return;
    }

    // Successful login
    warning.style.color = 'green';
    warning.textContent = 'Login successful! Redirecting...';

    // Redirect to index.html after a short delay
    setTimeout(() => {
      window.location.href = 'index.html';
    }, 1500); // 1.5 seconds delay
  });
  document.addEventListener("DOMContentLoaded", function () {
    // Handle login
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
      loginForm.addEventListener('submit', function() {
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;
  
        if (username === 'admin' && password === 'admin') {
          // Store user login info in localStorage
          localStorage.setItem('loggedInUser', 'admin');
          // Redirect to the index page
          window.location.href = 'index.html';
        } else {
          alert('Invalid login credentials.');
        }
      });
    }
  
    // Admin login check
    const user = localStorage.getItem('loggedInUser');
    const loginBtn = document.getElementById('login-btn');
    const welcomeText = document.getElementById('welcome-admin');
  
    if (user === 'admin') {
      loginBtn.style.display = 'none';
      welcomeText.style.display = 'inline';
    }
  });
  
  function logout() {
    localStorage.removeItem('loggedInUser');
    location.reload();
  }
  