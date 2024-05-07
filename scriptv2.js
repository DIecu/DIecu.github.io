const toggleButton = document.getElementById('toggle');
const overlay = document.getElementById('overlay');

toggleButton.addEventListener('click', () => {
    toggleButton.classList.toggle('active');
    overlay.classList.toggle('open');
});