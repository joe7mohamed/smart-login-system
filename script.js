document.addEventListener('DOMContentLoaded', () => {
    const registerForm = document.getElementById('registerForm');
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');

    const nameError = document.getElementById('nameError');
    const emailError = document.getElementById('emailError');
    const passwordError = document.getElementById('passwordError');

    registerForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        let isValid = true;

        // Validate name
        if (name.length < 4 || name.length > 20) {
            nameError.classList.remove('hidden');
            isValid = false;
        } else {
            nameError.classList.add('hidden');
        }

        // Validate email
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            emailError.classList.remove('hidden');
            isValid = false;
        } else {
            emailError.classList.add('hidden');
        }

        // Validate password
        if (password.length < 8) {
            passwordError.classList.remove('hidden');
            isValid = false;
        } else {
            passwordError.classList.add('hidden');
        }

        // If valid, store user data in localStorage
        if (isValid) {
            const users = JSON.parse(localStorage.getItem('users')) || [];
            users.push({ name, email, password });
            localStorage.setItem('users', JSON.stringify(users));

            alert('Registration successful!');
            registerForm.reset();
        }
    });
});
