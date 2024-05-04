const themeSelector = document.getElementById('theme-toggle');
const body = document.body;
function changeTheme() {
//check to see what the current value of our select is. The current value is conveniently found in themeSelector.value!
if (body.classList.contains('dark-theme')) {
    body.classList.remove('dark-theme');
} else {
    body.classList.add('dark-theme');
}
}

// if the value is dark then:
// add the dark class to the body
// change the source of the logo to point to the white logo.
// otherwise
// remove the dark class
// make sure the logo src is the blue logo.
// add eventlistener to the themeSelector element here. Use the changeTheme function as the event handler function.
themeSelector.addEventListener('click', changeTheme);