// Para el menú de cerrar sesión en el header (si lo tienes)
const settingsButtonHeader = document.querySelector('.settings-button');
const logoutOptionsHeader = document.querySelector('.logout-options');

if (settingsButtonHeader && logoutOptionsHeader) {
    settingsButtonHeader.addEventListener('click', function() {
        logoutOptionsHeader.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.logout-container')) {
            logoutOptionsHeader.classList.remove('show');
        }
    });
}

// Para el menú de cerrar sesión en el sidebar
const settingsButtonSidebar = document.querySelector('.settings-button-sidebar');
const logoutOptionsSidebar = document.querySelector('.logout-options-sidebar');

if (settingsButtonSidebar && logoutOptionsSidebar) {
    settingsButtonSidebar.addEventListener('click', function() {
        logoutOptionsSidebar.classList.toggle('show');
    });

    document.addEventListener('click', function(event) {
        if (!event.target.closest('.logout-container-sidebar')) {
            logoutOptionsSidebar.classList.remove('show');
        }
    });
}