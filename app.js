
document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login');
    const loginModal = document.getElementById('login-modal');
    const closeBtn = document.querySelector('.close-btn');
    const loginForm = document.getElementById('login-form');
    const adminPanel = document.getElementById('admin-panel');

    btnLogin.addEventListener('click', () => { loginModal.classList.remove('hidden'); });
    closeBtn.addEventListener('click', () => { loginModal.classList.add('hidden'); });
    window.addEventListener('click', (e) => { if (e.target === loginModal) loginModal.classList.add('hidden'); });

    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const emailInput = loginForm.querySelector('input[type="email"]').value;
        loginModal.classList.add('hidden');
        
        btnLogin.textContent = "Mi Cuenta";
        btnLogin.style.backgroundColor = "#2ecc71";
        btnLogin.style.color = "#fff";

        if (emailInput === "admin@uptc.edu.co") {
            alert("Cuenta privilegiada detectada. Acceso concedido al panel de administrador para chatear y eliminar contenido.");
            adminPanel.classList.remove('hidden');
        } else {
            alert("Sesión iniciada. Bienvenido a la comunidad UPTC.");
            adminPanel.classList.add('hidden');
        }
    });
});
