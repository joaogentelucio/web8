let loginForm = document.querySelector(".form-wrapper");

loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    let email = document.getElementById("email");
    let senha = document.getElementById("senha");

    console.log("Email:", email.value);
    console.log("Senha:", senha.value);
});

document.getElementById("togglePassword").addEventListener("click", function() {
    const passwordField = document.getElementById("senha");
    const icon = this;

    // Alternar entre o tipo "password" e "text"
    if (passwordField.type === "password") {
        passwordField.type = "text";
        icon.classList.remove("fa-lock");
        icon.classList.add("fa-unlock");
    } else {
        passwordField.type = "password";
        icon.classList.remove("fa-unlock");
        icon.classList.add("fa-lock");
    }
});
