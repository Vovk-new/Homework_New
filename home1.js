const text = "Wonderful Joyful Happiness Time Task Apple";

// Регулярний вираз для пошуку слів без літери "A"
const regex = /\b[^aA\s]{6,}\b/g;

// Знаходимо всі відповідності
const matches = text.match(regex);

// Виводимо результати
console.log(matches); // ["Wonderful", "Joyful"]
