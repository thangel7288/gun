const settingsButton = document.querySelector('.settings-button');
const logoutOptions = document.querySelector('.logout-options');

if (settingsButton && logoutOptions) {
    settingsButton.addEventListener('click', function() {
        logoutOptions.classList.toggle('show');
    });

    // Opcional: Cerrar las opciones si se hace clic fuera
    document.addEventListener('click', function(event) {
        if (!event.target.closest('.logout-container')) {
            logoutOptions.classList.remove('show');
        }
    });
}


// Puedes agregar aquí más lógica específica del header si la tienes