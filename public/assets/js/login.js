
// Create New User via the Sign-up Form
$("#signupBtn").on("click", async function() {
    event.preventDefault();

  const first_name = $('#first-name-signup').val().trim();
  const last_name = $('#last-name-signup').val().trim();
  const display_name = $('#display-name-signup').val().trim();
  const email = $('#email-signup').val().trim();
  const password = $('#password-signup').val().trim();

  if (first_name && last_name && display_name && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ first_name, last_name, display_name , email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      document.location.replace('/dashboard');
      console.log("success", response)
    } else {
      console.log('Failed to sign up.');
    }
}
})


// Create New User via the Sign-up Form
$("#loginBtn").on("click", async function() {
  event.preventDefault();
const email = $('#email-login').val().trim();
const password = $('#password-login').val().trim();

if (email && password) {
  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify({ email, password }),
    headers: { 'Content-Type': 'application/json' },
  });
console.log(response)
  if (response.ok) {
    document.location.replace('/dashboard');
    console.log("success", response)
  } else {
    console.log('Failed to sign up.');
  }
}
})

$("#logout").on("click", async function() {
  event.preventDefault();
  const response = await fetch('/api/users/logout', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
  });

  if (response.ok) {
    alert("You have logged out!")
    document.location.replace('/');
  } else {
    alert(response.statusText);
  }
})