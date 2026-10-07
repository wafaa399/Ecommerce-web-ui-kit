const form = document.getElementById("signinForm");

const email = document.getElementById("email");
const password = document.getElementById("password");

const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");

const successMessage = document.getElementById("successMessage");

const showPassword = document.getElementById("showPassword");


// ================= SHOW / HIDE PASSWORD =================

showPassword.addEventListener("click", function () {

    if (password.type === "password") {

        password.type = "text";

        showPassword.innerHTML =
            '<i class="fa-regular fa-eye-slash"></i>';

    } else {

        password.type = "password";

        showPassword.innerHTML =
            '<i class="fa-regular fa-eye"></i>';
    }

});


// ================= FORM SUBMIT =================

form.addEventListener("submit", function (event) {

    event.preventDefault();


    // Clear old messages

    emailError.textContent = "";
    passwordError.textContent = "";
    successMessage.textContent = "";


    let isValid = true;


    // ================= EMAIL VALIDATION =================

    const emailValue = email.value.trim();

    if (emailValue === "") {

        emailError.textContent =
            "Please enter your email.";

        isValid = false;

    } else {

        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(emailValue)) {

            emailError.textContent =
                "Please enter a valid email address.";

            isValid = false;
        }
    }


    // ================= PASSWORD VALIDATION =================

    const passwordValue = password.value;

    if (passwordValue === "") {

        passwordError.textContent =
            "Please enter your password.";

        isValid = false;

    } else if (passwordValue.length < 6) {

        passwordError.textContent =
            "Password must be at least 6 characters.";

        isValid = false;
    }


    // ================= SUCCESS =================

    if (isValid) {

        successMessage.textContent =
            "Sign in successful!";

        form.reset();

        // Return password icon to normal

        password.type = "password";

        showPassword.innerHTML =
            '<i class="fa-regular fa-eye"></i>';
    }

});