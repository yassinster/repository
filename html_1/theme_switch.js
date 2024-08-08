

let firstname = 'yassin';
console.log(firstname);

let firstFlashcard = 50;
let secondFlashcard = 74;
let addTotalFlashcards = firstFlashcard + secondFlashcard;
console.log(`${addTotalFlashcards}`)

document.getElementById('add-flashcard').addEventListener('click', function() {
    // Get the input values
    const frontContent = document.getElementById('front-content').value;
    const backContent = document.getElementById('back-content').value;

    // Ensure both fields have content before creating a flashcard
    if (frontContent.trim() === '' || backContent.trim() === '') {
        alert('Please fill out both the front and back content.');
        return;
    }

    // Select the flashcard container element
    const flashcardContainer = document.getElementById('flashcard-container');
    
    // Create a new flashcard element
    const newFlashcard = document.createElement('div');
    newFlashcard.classList.add('flashcard');
    
    // Add HTML content to the new flashcard
    newFlashcard.innerHTML = `
        <div class="front">${frontContent}</div>
        <div class="back">${backContent}</div>
    `;
    
    // Add an event listener to the new flashcard to handle flipping
    newFlashcard.addEventListener('click', function() {
        newFlashcard.classList.toggle('flipped');
    });
    
    // Append the new flashcard to the flashcard container
    flashcardContainer.appendChild(newFlashcard);

    // Clear the input fields
    document.getElementById('front-content').value = '';
    document.getElementById('back-content').value = '';
});

// Add event listeners to all existing flashcards to handle flipping
document.querySelectorAll('.flashcard').forEach(flashcard => {
    flashcard.addEventListener('click', function() {
        flashcard.classList.toggle('flipped');
    });
});



/* Theme toggle switch */
document.addEventListener("DOMContentLoaded", function() {
    const toggleSwitch = document.getElementById('mode-toggle');
    const body = document.body;

    // Initialize the theme based on saved preference or default to light mode
    const savedTheme = localStorage.getItem('theme') || 'dark-mode';
    body.classList.add(savedTheme);
    toggleSwitch.checked = savedTheme === 'dark-mode';

    // Event listener for the toggle switch
    toggleSwitch.addEventListener('change', function() {
        if (this.checked) {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark-mode');
        } else {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light-mode');
        }
    });
});
