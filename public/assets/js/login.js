$("#signupBtn").on("click", async function() {
    event.preventDefault();

  const firstName = $('#first-name-signup').val().trim();
  const lastName = $('#last-name-signup').val().trim();
  const displayName = $('#display-name-signup').val().trim();
  const email = $('#email-signup').val();
  const password = $('#password-signup').val().trim();

  if (firstName && lastName && displayName && email && password) {
    const response = await fetch('/api/users', {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, displayName , email, password }),
      headers: { 'Content-Type': 'application/json' },
    });
console.log(response)
    if (response.ok) {
      console.log("success", response)
    } else {
      console.log('Failed to sign up.');
    }
}
})