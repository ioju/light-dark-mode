const toggleSwitch = document.querySelector('input[type=checkbox]');

const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

function capitalize(word) {
    const firstLetterCap = word.charAt(0).toUpperCase()
    const remainingLetters = word.slice(1);

    return firstLetterCap + remainingLetters;
}

function switchTheme(event) {
    const lightMode = !event.target.checked;
    const mode = lightMode ? 'light' : 'dark';

    localStorage.setItem('theme', mode);

    document.documentElement.setAttribute('data-theme', `${mode}`);

    const navBackgroundColor = lightMode ? 255 : 0;
    const textBoxBackgroundColor = lightMode ? 0 : 255;
    const darkIcon = 'fa-moon';
    const lightIcon = 'fa-sun';
    const backgroundOpacity = 50;

    nav.style.backgroundColor = `rgb(${navBackgroundColor} ${navBackgroundColor} ${navBackgroundColor} / 50%)`;
    textBox.style.backgroundColor = `rgb(${textBoxBackgroundColor} ${textBoxBackgroundColor} ${textBoxBackgroundColor}S / ${backgroundOpacity}%)`;

    toggleIcon.children[0].textContent = `${capitalize(mode)} Mode`;

    if (lightMode) {
        toggleIcon.children[1].classList.replace(darkIcon, lightIcon);
    } else {
        toggleIcon.children[1].classList.replace(lightIcon, darkIcon);
    }

    image1.src = `img/undraw_proud_coder_${mode}.svg`;
    image2.src = `img/undraw_feeling_proud_${mode}.svg`;
    image3.src = `img/undraw_conceptual_idea_${mode}.svg`;
}

toggleSwitch.addEventListener('change', switchTheme);

function setInitialTheme() {
    const theme = localStorage.getItem('theme');

    if (theme === 'dark') {
        toggleSwitch.click();
    }
}

setInitialTheme();