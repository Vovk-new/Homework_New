
let x = 2; 
let y = 3;

function pow(x, y) {
    let result = 1; // Початкове значення має бути 1, оскільки будь-яке число у нульовому степені дорівнює 1
    while (y > 0) {
        result = result * x; // Множимо поточний результат на x
        y--; // Зменшуємо y на 1
    }
    console.log(result);  
}

pow(x, y);
