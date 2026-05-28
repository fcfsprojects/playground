// DOM Elements
const jokeText = document.getElementById('jokeText');
const jokeType = document.getElementById('jokeType');
const generateBtn = document.getElementById('generateBtn');
const copyBtn = document.getElementById('copyBtn');
const loading = document.getElementById('loading');
const errorDiv = document.getElementById('error');

let currentJoke = '';

// Event Listeners
generateBtn.addEventListener('click', fetchJoke);
copyBtn.addEventListener('click', copyJokeToClipboard);

// Fetch joke from API
async function fetchJoke() {
    try {
        // Hide previous error and show loading
        errorDiv.style.display = 'none';
        loading.style.display = 'block';
        generateBtn.disabled = true;
        copyBtn.disabled = true;

        // Fetch from JokeAPI
        const response = await fetch('https://v2.jokeapi.dev/joke/Any?type=single');
        
        if (!response.ok) {
            throw new Error(`API Error: ${response.status}`);
        }
        
        const data = await response.json();
        
        // Check if joke was returned
        if (data.error) {
            throw new Error('Failed to get joke');
        }
        
        // Display the joke
        currentJoke = data.joke;
        jokeText.textContent = currentJoke;
        jokeType.textContent = `Type: ${data.type.toUpperCase()}`;
        
        // Hide loading
        loading.style.display = 'none';
        generateBtn.disabled = false;
        copyBtn.disabled = false;
        
    } catch (error) {
        console.error('Error fetching joke:', error);
        errorDiv.textContent = `❌ Error: ${error.message}. Please try again.`;
        errorDiv.style.display = 'block';
        loading.style.display = 'none';
        generateBtn.disabled = false;
    }
}

// Copy joke to clipboard
function copyJokeToClipboard() {
    if (!currentJoke) {
        alert('No joke to copy yet! Generate one first.');
        return;
    }
    
    navigator.clipboard.writeText(currentJoke).then(() => {
        const originalText = copyBtn.textContent;
        copyBtn.textContent = '✓ Copied!';
        setTimeout(() => {
            copyBtn.textContent = originalText;
        }, 2000);
    }).catch(err => {
        console.error('Failed to copy:', err);
        alert('Failed to copy joke to clipboard');
    });
}

// Load a joke on page load
window.addEventListener('load', () => {
    fetchJoke();
});