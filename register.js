const form = document.getElementById('registerForm');
const password = document.getElementById('password');
const confirmPassword = document.getElementById('confirmPassword');
const genderError = document.getElementById('genderError');

form.addEventListener('submit', function (e) {
  e.preventDefault();

  if (confirmPassword.value !== password.value) {
    confirmPassword.setCustomValidity('Passwords do not match');
  } else {
    confirmPassword.setCustomValidity('');
  }

  const fields = form.querySelectorAll('input[type="text"], input[type="email"], input[type="password"], select');
  fields.forEach(function (field) {
    if (field.checkValidity()) {
      field.classList.add('is-valid');
      field.classList.remove('is-invalid');
    } else {
      field.classList.add('is-invalid');
      field.classList.remove('is-valid');
    }
  });

  const genderChecked = form.querySelector('input[name="gender"]:checked');
  if (genderChecked) {
    genderError.classList.add('d-none');
  } else {
    genderError.classList.remove('d-none');
  }
});

form.addEventListener('reset', function () {
  form.querySelectorAll('.is-valid, .is-invalid').forEach(function (field) {
    field.classList.remove('is-valid', 'is-invalid');
  });
  genderError.classList.add('d-none');
});