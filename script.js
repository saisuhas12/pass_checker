function checkStrength() {
    const password = document.getElementById("password").value;
    const strengthValue = document.getElementById("strength-value");
    const strengthBar = document.getElementById("strength-bar");

    let strength = 0;

    // Check for length
    if (password.length >= 8) {
        strength += 1;
    }

    // Check for uppercase letters
    if (/[A-Z]/.test(password)) {
        strength += 1;
    }

    // Check for numbers
    if (/\d/.test(password)) {
        strength += 1;
    }

    // Check for special characters
    if (/[\W]/.test(password)) {
        strength += 1;
    }

    // Update the strength meter
    if (strength === 0) {
        strengthValue.innerText = "Weak";
        strengthBar.classList.remove("yellow", "green");
        strengthBar.classList.add("red");
    } else if (strength < 3) {
        strengthValue.innerText = "Medium";
        strengthBar.classList.remove("red", "green");
        strengthBar.classList.add("yellow");
    } else {
        strengthValue.innerText = "Strong";
        strengthBar.classList.remove("red", "yellow");
        strengthBar.classList.add("green");
    }
}
