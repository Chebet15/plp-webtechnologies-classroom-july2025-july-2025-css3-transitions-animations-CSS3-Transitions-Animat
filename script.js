// Global Variables (demonstrating global scope)
let isLoaderActive = false;
const colors = ['#ff6b6b', '#4ecdc4', '#45b7d1', '#96ceb4', '#ffeaa7', '#dda0dd'];

// Part 1 & 3: CSS Animation Control Functions

/**
 * Toggles flip animation on card
 * @param {HTMLElement} element - The card element to flip
 */
function toggleFlip(element) {
    element.classList.toggle('flipped');
}

/**
 * Toggles bouncing animation
 * @param {HTMLElement} element - The box element to animate
 */
function toggleBounce(element) {
    element.classList.toggle('animate');
    
    // Demonstrate local scope with timeout
    setTimeout(function() {
        let localMessage = "Bounce animation completed!"; // Local scope variable
        console.log(localMessage);
    }, 2000);
}

/**
 * Slides element in specified direction
 * @param {HTMLElement} element - Element to slide
 * @param {string} direction - Direction to slide ('left', 'right', 'up')
 */
function slideElement(element, direction) {
    // Remove any existing slide classes
    element.classList.remove('slide-left', 'slide-right', 'slide-up');
    
    // Add the new slide class based on direction
    element.classList.add('slide-' + direction);
    
    // Add pulse effect temporarily
    element.classList.add('pulse-element');
    setTimeout(() => {
        element.classList.remove('pulse-element');
    }, 2000);
}

/**
 * Resets all slider elements to original position
 */
function resetSliders() {
    const sliders = document.querySelectorAll('.slide-box');
    sliders.forEach(slider => {
        slider.classList.remove('slide-left', 'slide-right', 'slide-up', 'pulse-element');
    });
}

/**
 * Toggles loading animation on/off
 */
function toggleLoader() {
    const loader = document.getElementById('loader');
    isLoaderActive = !isLoaderActive; // Using global variable
    
    if (isLoaderActive) {
        loader.classList.add('spinning');
    } else {
        loader.classList.remove('spinning');
    }
}

// Part 2: JavaScript Functions with Parameters and Return Values

/**
 * Performs mathematical calculations and returns formatted results
 * @param {number} a - First number
 * @param {number} b - Second number
 * @returns {object} Object containing calculation results
 */
function calculateOperations(a, b) {
    // Local variables demonstrating local scope
    const sum = a + b;
    const difference = a - b;
    const product = a * b;
    const quotient = b !== 0 ? a / b : 'Cannot divide by zero';
    
    return {
        sum: sum,
        difference: difference,
        product: product,
        quotient: quotient,
        average: (a + b) / 2
    };
}

/**
 * Main calculation function that uses calculateOperations
 */
function performCalculation() {
    const num1 = parseFloat(document.getElementById('num1').value) || 0;
    const num2 = parseFloat(document.getElementById('num2').value) || 0;
    
    const results = calculateOperations(num1, num2);
    
    const resultDiv = document.getElementById('calc-result');
    resultDiv.innerHTML = `
        <strong>Results for ${num1} and ${num2}:</strong><br>
        Sum: ${results.sum}<br>
        Difference: ${results.difference}<br>
        Product: ${results.product}<br>
        Division: ${results.quotient}<br>
        Average: ${results.average}
    `;
}

/**
 * Transforms string based on various operations
 * @param {string} text - Input text to transform
 * @returns {object} Object with different transformations
 */
function transformText(text) {
    if (!text) return { error: "No text provided!" };
    
    // Local scope variables
    const upperCase = text.toUpperCase();
    const lowerCase = text.toLowerCase();
    const reversed = text.split('').reverse().join('');
    const wordCount = text.trim().split(/\s+/).length;
    const charCount = text.length;
    
    return {
        original: text,
        upper: upperCase,
        lower: lowerCase,
        reversed: reversed,
        wordCount: wordCount,
        charCount: charCount
    };
}

/**
 * Main string manipulation function
 */
function manipulateString() {
    const inputText = document.getElementById('user-text').value;
    const transformations = transformText(inputText);
    
    const resultDiv = document.getElementById('string-result');
    
    if (transformations.error) {
        resultDiv.innerHTML = `<span style="color: #ff6b6b;">${transformations.error}</span>`;
        return;
    }
    
    resultDiv.innerHTML = `
        <strong>Original:</strong> ${transformations.original}<br>
        <strong>Uppercase:</strong> ${transformations.upper}<br>
        <strong>Lowercase:</strong> ${transformations.lower}<br>
        <strong>Reversed:</strong> ${transformations.reversed}<br>
        <strong>Words:</strong> ${transformations.wordCount} | <strong>Characters:</strong> ${transformations.charCount}
    `;
}

/**
 * Generates a random color and returns color information
 * @returns {object} Color information object
 */
function getRandomColorInfo() {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    const randomRGB = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
    
    return {
        hexColor: randomColor,
        rgbColor: randomRGB,
        colorName: getColorName(randomColor)
    };
}

/**
 * Helper function that returns a color name based on hex value
 * @param {string} hexColor - Hex color value
 * @returns {string} Color name
 */
function getColorName(hexColor) {
    const colorNames = {
        '#ff6b6b': 'Coral Red',
        '#4ecdc4': 'Turquoise',
        '#45b7d1': 'Sky Blue',
        '#96ceb4': 'Mint Green',
        '#ffeaa7': 'Sunny Yellow',
        '#dda0dd': 'Plum Purple'
    };
    
    return colorNames[hexColor] || 'Mystery Color';
}

/**
 * Main color generation function
 */
function generateRandomColor() {
    const colorInfo = getRandomColorInfo();
    const resultDiv = document.getElementById('color-result');
    
    resultDiv.style.backgroundColor = colorInfo.hexColor;
    resultDiv.innerHTML = `
        <strong>${colorInfo.colorName}</strong><br>
        Hex: ${colorInfo.hexColor}<br>
        RGB: ${colorInfo.rgbColor}
    `;
}

// Modal Functions (Part 3: CSS + JavaScript Integration)

/**
 * Shows the modal with smooth animation
 */
function showModal() {
    const modal = document.getElementById('modal');
    modal.classList.add('show');
    
    // Prevent background scrolling
    document.body.style.overflow = 'hidden';
}

/**
 * Hides the modal with smooth animation
 */
function hideModal() {
    const modal = document.getElementById('modal');
    modal.classList.remove('show');
    
    // Restore background scrolling
    document.body.style.overflow = 'auto';
}

// Event Listeners and Initialization

// Close modal when clicking outside of modal content
document.getElementById('modal').addEventListener('click', function(event) {
    if (event.target === this) {
        hideModal();
    }
});

// Keyboard event listener for modal (ESC key)
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        hideModal();
    }
});

// Initialize some elements on page load
document.addEventListener('DOMContentLoaded', function() {
    console.log('Page loaded! All functions are ready to demonstrate scope, parameters, and return values.');
    
    // Example of global vs local scope
    const globalMessage = "This is in global scope!";
    
    function demonstrateScope() {
        const localMessage = "This is in local scope!";
        console.log(globalMessage); // Can access global
        console.log(localMessage);  // Can access local
    }
    
    demonstrateScope();
    // console.log(localMessage); // This would cause an error - local variable not accessible
});

// Utility function to add some interactivity to buttons
document.querySelectorAll('.animated-button').forEach(button => {
    button.addEventListener('click', function() {
        // Temporary visual feedback
        this.style.transform = 'scale(0.95)';
        setTimeout(() => {
            this.style.transform = '';
        }, 100);
    });
});