const themeSelector = document.getElementById('theme-select');
const body = document.body;
const logo = document.getElementById('logo');

function changeTheme() {
    const theme = themeSelector.value;

    if (theme === 'Dark') {
        body.classList.add('dark-mode');
        logo.src = 'images/byui_dark.png'; // Update to the path of your dark mode logo
    } else {
        body.classList.remove('dark-mode');
        logo.src = 'images/byui.webp'; // Update to the path of your light mode logo
    }
}

themeSelector.addEventListener('change', changeTheme);