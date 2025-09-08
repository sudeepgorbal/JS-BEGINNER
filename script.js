// script.js - Improved Interactive Page

// Elements
const nameInput = document.getElementById('nameInput');
const greetBtn = document.getElementById('greetBtn');
const heading = document.getElementById('heading');

const colorInput = document.getElementById('colorInput');
const applyColor = document.getElementById('applyColor');

const numInput = document.getElementById('numInput');
const printBtn = document.getElementById('printBtn');
const numbersDiv = document.getElementById('numbers');

const toggleSecret = document.getElementById('toggleSecret');
const secret = document.getElementById('secret');

// 1. Greet user
greetBtn.addEventListener('click', () => {
  const name = nameInput.value.trim();
  heading.textContent = name ? `Hello, ${name}! 👋` : 'Hello, stranger!';
});

// 2. Change background color
applyColor.addEventListener('click', () => {
  const color = colorInput.value || '#ffffff';
  document.body.style.background = color;
});

// 3. Print numbers
printBtn.addEventListener('click', () => {
  const n = parseInt(numInput.value, 10);
  numbersDiv.innerHTML = ''; // clear before new print
  if (isNaN(n) || n < 1) {
    numbersDiv.textContent = '⚠️ Please enter a valid number greater than 0.';
    return;
  }
  for (let i = 1; i <= n; i++) {
    const p = document.createElement('p');
    p.textContent = i;
    numbersDiv.appendChild(p);
  }
});

// 4. Show/Hide secret box
toggleSecret.addEventListener('click', () => {
  secret.classList.toggle('hidden');
});
