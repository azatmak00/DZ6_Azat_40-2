const minNumber = 1;
const maxNumber = 99;
const numbersCount = 6;

const btn = document.getElementById("btn");
const circles = document.querySelectorAll(".circle");

btn.addEventListener("click", generateNumbers);

function generateNumbers() {
    const uniqueNumbers = generateUniqueNumbers(minNumber, maxNumber, numbersCount);
    displayNumbers(uniqueNumbers);
}

function generateUniqueNumbers(min, max, count) {
    const numbersSet = new Set();
    while (numbersSet.size < count) {
        const randomNum = Math.floor(Math.random() * (max - min + 1)) + min;
        numbersSet.add(randomNum);
    }
    return Array.from(numbersSet);
}

function displayNumbers(numbers) {
    circles.forEach((circle, index) => {
        circle.textContent = numbers[index];
    });
}
