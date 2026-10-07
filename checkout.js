 document.addEventListener("DOMContentLoaded", function () {

    const button = document.getElementById("placeOrderBtn");

    const street = document.getElementById("streetAddress");
    const city = document.getElementById("city");
    const state = document.getElementById("state");
    const zip = document.getElementById("zipCode");
    const country = document.getElementById("country");
    const email = document.getElementById("email");
    const name = document.getElementById("fullName");


    // Create error message
    function showError(input, message) {

        const oldError = input.parentElement.querySelector(".error-message");

        if (oldError) {
            oldError.remove();
        }

        input.style.border = "1px solid #dc3545";

        const error = document.createElement("div");

        error.className = "error-message";

        error.innerText = message;

        error.style.color = "#dc3545";
        error.style.fontSize = "13px";
        error.style.marginTop = "5px";

        input.parentElement.appendChild(error);
    }


    // Remove error
    function removeError(input) {

        input.style.border = "";

        const error =
            input.parentElement.querySelector(".error-message");

        if (error) {
            error.remove();
        }
    }


    // Validate
    button.addEventListener("click", function () {

        let valid = true;


        // Street Address
        if (street.value.trim() === "") {

            showError(
                street,
                "Street Address is required."
            );

            valid = false;

        } else {

            removeError(street);
        }


        // City
        if (city.value.trim() === "") {

            showError(
                city,
                "City is required."
            );

            valid = false;

        } else if (!/^[A-Za-z\s]+$/.test(city.value.trim())) {

            showError(
                city,
                "Please enter a valid city."
            );

            valid = false;

        } else {

            removeError(city);
        }


        // State
        if (state.value.trim() === "") {

            showError(
                state,
                "State is required."
            );

            valid = false;

        } else if (!/^[A-Za-z\s]+$/.test(state.value.trim())) {

            showError(
                state,
                "Please enter a valid state."
            );

            valid = false;

        } else {

            removeError(state);
        }


        // Zip Code
        if (zip.value.trim() === "") {

            showError(
                zip,
                "Zip Code is required."
            );

            valid = false;

        } else if (!/^\d{4,10}$/.test(zip.value.trim())) {

            showError(
                zip,
                "Zip Code must contain 4-10 numbers."
            );

            valid = false;

        } else {

            removeError(zip);
        }


        // Country
        if (country.value.trim() === "") {

            showError(
                country,
                "Country is required."
            );

            valid = false;

        } else if (!/^[A-Za-z\s]+$/.test(country.value.trim())) {

            showError(
                country,
                "Please enter a valid country."
            );

            valid = false;

        } else {

            removeError(country);
        }


        // Email
        const emailPattern =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (email.value.trim() === "") {

            showError(
                email,
                "Email is required."
            );

            valid = false;

        } else if (!emailPattern.test(email.value.trim())) {

            showError(
                email,
                "Please enter a valid email."
            );

            valid = false;

        } else {

            removeError(email);
        }


        // Full Name
        if (name.value.trim() === "") {

            showError(
                name,
                "Full Name is required."
            );

            valid = false;

        } else if (name.value.trim().length < 3) {

            showError(
                name,
                "Full Name must be at least 3 characters."
            );

            valid = false;

        } else if (!/^[A-Za-z\s]+$/.test(name.value.trim())) {

            showError(
                name,
                "Please enter a valid name."
            );

            valid = false;

        } else {

            removeError(name);
        }


        // SUCCESS
        if (valid) {

            const message =
                document.createElement("div");

            message.innerText =
                "✓ Order placed successfully!";

            message.style.backgroundColor = "#e8f7ee";
            message.style.color = "#198754";
            message.style.border = "1px solid #b7e4c7";
            message.style.padding = "12px 15px";
            message.style.borderRadius = "6px";
            message.style.marginTop = "15px";
            message.style.fontSize = "14px";

            button.parentElement.appendChild(message);


            // Clear inputs
            street.value = "";
            city.value = "";
            state.value = "";
            zip.value = "";
            country.value = "";
            email.value = "";
            name.value = "";


            // Remove success message after 5 seconds
            setTimeout(function () {

                message.remove();

            }, 5000);
        }

    });

});