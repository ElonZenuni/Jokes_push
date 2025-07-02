const buttonContainer = document.querySelector('.button-container');
const allMessages = document.querySelectorAll('.hidden-message');
const hiddenButton = document.getElementById('hiddenButton');
const toggleAllBtn = document.getElementById('revealAll');

let allRevealed = false;//tracks the current state 

buttonContainer.addEventListener("click", toggle);


function toggle(event) {
    const clicked = event.target;

    if (clicked.id === 'revealAll') {
        allRevealed = !allRevealed;

        allMessages.forEach(msg => {
            msg.classList.toggle('hidden', !allRevealed);
        });

        toggleAllBtn.textContent = allRevealed ? 'Hide All' : 'Reveal All';
    }





    // Only run if a joke button was clicked
    if (clicked.tagName === 'BUTTON' && clicked.id.startsWith('Joke_')) {
        // Each joke button is followed by its message, so we just toggle the next sibling
        const message = clicked.nextElementSibling;

        // If it has the hidden-message class, toggle it
        if (message && message.classList.contains('hidden-message')) {
            allMessages.forEach(msg => {
                if (msg !== message) {
                    msg.classList.add('hidden');
                }
            });
            message.classList.toggle('hidden');
        }
    }
}