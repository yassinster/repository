

let firstname = 'yassin';
console.log(firstname);

let firstNumber = 50;
let secondNumber = 74;
let addTotalSum = firstNumber + secondNumber;
console.log("124")

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