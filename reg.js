document.getElementById("registrationForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const firstName = document.getElementById("firstName").value.trim();
  const lastName = document.getElementById("lastName").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const confirmPassword = document.getElementById("confirmPassword").value;
  const agreement = document.getElementById("agreement").checked;

  const errors = [];

  
  if (firstName === "") {
    errors.push("First name is required.");
  } else if (firstName.length > 8) {
    errors.push("First name must not exceed 8 characters.");
  }

  if (lastName === "") {
    errors.push("Last name is required.");
  } else if (lastName.length > 8) {
    errors.push("Last name must not exceed 8 characters.");
  }

  // Email validation
  if (email === "") {
    errors.push("Email is required.");
  } else if (!email.includes("@") || !email.includes(".")) {
    errors.push("Email must contain '@' and '.'");
  }

  // Password validation
  const hasNumber = /\d/.test(password);
  const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

  if (password === "") {
    errors.push("Password is required.");
  } else {
    if (password.length < 8) {
      errors.push("Password must be at least 8 characters long.");
    }
    if (!hasNumber) {
      errors.push("Password must contain at least one number.");
    }
    if (!hasSpecialChar) {
      errors.push("Password must contain at least one special character.");
    }
  }

  // Confirm password
  if (confirmPassword === "") {
    errors.push("Please confirm your password.");
  } else if (password !== confirmPassword) {
    errors.push("Passwords do not match.");
  }

  // Agreement checkbox
  if (!agreement) {
    errors.push("You must agree to the privacy policy and terms.");
  }

  // Display result
  if (errors.length > 0) {
    alert("Please fix the following:\n\n" + errors.join("\n"));
  } else {
    alert("Registration successful!");
    // Optional: submit the form or redirect
    // this.submit();
  }
});
