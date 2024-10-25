var services = {
    "стрижка": "60 грн",
    "гоління": "80 грн",
    "Миття голови": "100 грн",

    // Додаємо нову послугу
    addService: function(name, cost) {
        this[name] = cost;
    },

    // Метод для обчислення загальної вартості
    price: function() {
        let total = 0;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                total += parseInt(this[service]);
            }
        }
        return total + " грн";
    },

    // Метод для повернення мінімальної вартості
    minPrice: function() {
        let min = Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let cost = parseInt(this[service]);
                if (cost < min) {
                    min = cost;
                }
            }
        }
        return min + " грн";
    },

    // Метод для повернення максимальної вартості
    maxPrice: function() {
        let max = -Infinity;
        for (let service in this) {
            if (typeof this[service] === 'string') {
                let cost = parseInt(this[service]);
                if (cost > max) {
                    max = cost;
                }
            }
        }
        return max + " грн";
    }
};

// Додаємо нову послугу
services.addService("Розбити скло", "200 грн");


console.log("Загальна вартість: " + services.price()); // Загальна вартість
console.log("Мінімальна вартість: " + services.minPrice()); // Мінімальна вартість
console.log("Максимальна вартість: " + services.maxPrice()); // Максимальна вартість
