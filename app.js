const buttonContainer = document.querySelector('.button-container');
const allMessages = document.querySelectorAll('.hidden-message');
const hiddenButton = document.getElementById('hiddenButton');
const toggleAllBtn = document.getElementById('revealAll');

let allRevealed = false;//tracks the current state 

buttonContainer.addEventListener("click", toggle);


function toggle(event) {
    const clicked = event.target;




    // --------------    RANDOM BUTTON  ------------------
    if (clicked.id === 'randomID') {
        // Hide all messages
        allMessages.forEach(msg => msg.classList.add('hidden'));

        // Pick a random message index
        const randomIndex = Math.floor(Math.random() * allMessages.length);

        // Show only the random message
        allMessages[randomIndex].classList.remove('hidden');

        // Since only one is shown, set allRevealed to false
        allRevealed = false;

        // Update the Reveal All button text
        toggleAllBtn.textContent = 'Reveal All';
    }




    // --------------    REVEAL ALL BUTTON  ------------------
    if (clicked.id === 'revealAll') {
        allRevealed = !allRevealed;

        allMessages.forEach(msg => {
            msg.classList.toggle('hidden', !allRevealed);
        });

        toggleAllBtn.textContent = allRevealed ? 'Hide All' : 'Reveal All';
    }



    //      ----------------- INDIVIDUAL BUTTONS -------------------


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