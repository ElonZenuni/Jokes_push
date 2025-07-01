const buttonContainer = document.querySelector('.button-container');
const allMessages = document.querySelectorAll('.hidden-message');
const hiddenButton = document.getElementById('hiddenButton');

buttonContainer.addEventListener("click", toggle);

function toggle(event) {
    const clicked = event.target;

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