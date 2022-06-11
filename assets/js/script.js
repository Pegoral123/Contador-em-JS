let count = 0;

const CURRENT_NUMBER = document.getElementById('currentNumber');

function increment() {
    count++;
    CURRENT_NUMBER.innerHTML = count;

    if (count >= 10) {
        CURRENT_NUMBER.innerHTML = "10 é um numero muito parecido comigo como programador"
    }
}

function decrement() {
    count--;
    CURRENT_NUMBER.innerHTML = count;
    if (count < 0) {
        CURRENT_NUMBER.innerHTML = "Caindo igual o vasco"
    }
}