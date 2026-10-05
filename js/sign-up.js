document.addEventListener("DOMContentLoaded", function () {

  // =====================================
  // SIGN UP FORM
  // =====================================

  const termsCheck = document.getElementById("termsCheck");

  if (!termsCheck) {
    console.log("Terms checkbox not found.");
    return;
  }

  const signupForm = termsCheck.closest("form");

  if (!signupForm) {
    console.log("Sign up form not found.");
    return;
  }


  // =====================================
  // INPUTS
  // =====================================

  const textInputs = signupForm.querySelectorAll(
    'input[type="text"]'
  );

  const firstName = textInputs[0];
  const lastName = textInputs[1];

  const email = signupForm.querySelector(
    'input[type="email"]'
  );

  const passwordInputs = signupForm.querySelectorAll(
    'input[type="password"]'
  );

  const password = passwordInputs[0];
  const confirmPassword = passwordInputs[1];

  const submitButton = signupForm.querySelector(
    'button[type="submit"]'
  );


  console.log("Sign-up JS is working!");


  // =====================================
  // CREATE ACCOUNT
  // =====================================

  signupForm.addEventListener("submit", function (event) {

    event.preventDefault();

    removeErrors();

    let valid = true;


    // =====================================
    // FIRST NAME
    // =====================================

    const firstNameValue = firstName.value.trim();

    if (firstNameValue === "") {

      showError(
        firstName,
        "First name is required."
      );

      valid = false;

    } else if (firstNameValue.length < 2) {

      showError(
        firstName,
        "First name must be at least 2 characters."
      );

      valid = false;
    }


    // =====================================
    // LAST NAME
    // =====================================

    const lastNameValue = lastName.value.trim();

    if (lastNameValue === "") {

      showError(
        lastName,
        "Last name is required."
      );

      valid = false;

    } else if (lastNameValue.length < 2) {

      showError(
        lastName,
        "Last name must be at least 2 characters."
      );

      valid = false;
    }


    // =====================================
    // EMAIL
    // =====================================

    const emailValue = email.value.trim();

    if (emailValue === "") {

      showError(
        email,
        "Email is required."
      );

      valid = false;

    } else if (!isValidEmail(emailValue)) {

      showError(
        email,
        "Please enter a valid email address."
      );

      valid = false;
    }


    // =====================================
    // PASSWORD
    // =====================================

    const passwordValue = password.value;

    if (passwordValue === "") {

      showError(
        password,
        "Password is required."
      );

      valid = false;

    } else if (passwordValue.length < 8) {

      showError(
        password,
        "Password must be at least 8 characters."
      );

      valid = false;
    }


    // =====================================
    // CONFIRM PASSWORD
    // =====================================

    const confirmPasswordValue =
      confirmPassword.value;

    if (confirmPasswordValue === "") {

      showError(
        confirmPassword,
        "Please confirm your password."
      );

      valid = false;

    } else if (
      passwordValue !== confirmPasswordValue
    ) {

      showError(
        confirmPassword,
        "Passwords do not match."
      );

      valid = false;
    }


    // =====================================
    // TERMS
    // =====================================

    if (!termsCheck.checked) {

      termsCheck.classList.add("is-invalid");

      const termsError = document.createElement("div");

      termsError.id = "termsError";

      termsError.className =
        "text-danger small mt-1";

      termsError.textContent =
        "You must agree to the Terms & Conditions.";

      termsCheck.parentElement.appendChild(
        termsError
      );

      valid = false;
    }


    // =====================================
    // IF FORM IS NOT VALID
    // =====================================

    if (!valid) {
      return;
    }


    // =====================================
    // SAVE USER
    // =====================================

    const user = {
      firstName: firstNameValue,
      lastName: lastNameValue,
      email: emailValue
    };

    localStorage.setItem(
      "user",
      JSON.stringify(user)
    );

    localStorage.setItem(
      "isLoggedIn",
      "true"
    );


    // =====================================
    // SUCCESS MESSAGE
    // =====================================

    const successMessage =
      document.createElement("div");

    successMessage.className =
      "alert alert-success mt-3";

    successMessage.textContent =
      "Account created successfully! Welcome, " +
      firstNameValue +
      "!";

    signupForm.appendChild(
      successMessage
    );


    // =====================================
    // DISABLE BUTTON
    // =====================================

    if (submitButton) {
      submitButton.disabled = true;
      submitButton.textContent =
        "Account Created ✓";
    }


    // =====================================
    // GO TO HOME PAGE
    // =====================================

    setTimeout(function () {

      window.location.href = "index.html";

    }, 1500);

  });


  // =====================================
  // REMOVE ERROR WHILE TYPING
  // =====================================

  signupForm
    .querySelectorAll("input")
    .forEach(function (input) {

      input.addEventListener(
        "input",
        function () {

          input.classList.remove(
            "is-invalid"
          );

          const error =
            input.parentElement.querySelector(
              ".custom-error"
            );

          if (error) {
            error.remove();
          }

        }
      );

    });


  // =====================================
  // TERMS CHECKBOX
  // =====================================

  termsCheck.addEventListener(
    "change",
    function () {

      termsCheck.classList.remove(
        "is-invalid"
      );

      const error =
        document.getElementById(
          "termsError"
        );

      if (error) {
        error.remove();
      }

    }
  );


  // =====================================
  // GOOGLE BUTTON
  // =====================================

  const googleBtn =
    document.getElementById("googleBtn");

  if (googleBtn) {

    googleBtn.addEventListener(
      "click",
      function () {

        console.log(
          "Google button clicked."
        );

      }
    );

  }


  // =====================================
  // NEWSLETTER
  // =====================================

  const newsletterForm =
    document.querySelector(
      ".newsletter-section form"
    );

  if (newsletterForm) {

    newsletterForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const newsletterInput =
          newsletterForm.querySelector(
            'input[type="email"]'
          );

        const newsletterEmail =
          newsletterInput.value.trim();

        if (newsletterEmail === "") {
          return;
        }

        if (!isValidEmail(newsletterEmail)) {
          return;
        }

        newsletterInput.value = "";

      }
    );

  }


  // =====================================
  // SEARCH
  // =====================================

  const searchForm =
    document.querySelector(
      "form.search-box"
    );

  if (searchForm) {

    searchForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const searchInput =
          searchForm.querySelector(
            'input[type="search"]'
          );

        const searchValue =
          searchInput.value.trim();

        if (searchValue === "") {
          return;
        }

        window.location.href =
          "listing.html?search=" +
          encodeURIComponent(
            searchValue
          );

      }
    );

  }


  // =====================================
  // ACCOUNT ICON
  // =====================================

  const accountButton =
    document.querySelector(
      '.icon-btn[aria-label="My Account"]'
    );

  if (accountButton) {

    accountButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        const isLoggedIn =
          localStorage.getItem(
            "isLoggedIn"
          );

        if (isLoggedIn === "true") {

          window.location.href =
            "index.html";

        } else {

          window.location.href =
            "signin.html";

        }

      }
    );

  }


  // =====================================
  // CART
  // =====================================

  const cartButton =
    document.querySelector(
      '.icon-btn[aria-label="Cart"]'
    );

  if (cartButton) {

    cartButton.addEventListener(
      "click",
      function (event) {

        event.preventDefault();

        window.location.href =
          "cart.html";

      }
    );

  }


  // =====================================
  // FUNCTIONS
  // =====================================

  function isValidEmail(email) {

    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(
      email
    );

  }


  function showError(input, message) {

    input.classList.add(
      "is-invalid"
    );

    let error =
      input.parentElement.querySelector(
        ".custom-error"
      );

    if (!error) {

      error = document.createElement(
        "div"
      );

      error.className =
        "custom-error text-danger small mt-1";

      input.parentElement.appendChild(
        error
      );

    }

    error.textContent = message;

  }


  function removeErrors() {

    signupForm
      .querySelectorAll(".custom-error")
      .forEach(function (error) {

        error.remove();

      });


    const termsError =
      document.getElementById(
        "termsError"
      );

    if (termsError) {
      termsError.remove();
    }


    signupForm
      .querySelectorAll(".is-invalid")
      .forEach(function (input) {

        input.classList.remove(
          "is-invalid"
        );

      });

  }

});