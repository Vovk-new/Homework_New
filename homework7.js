const car = {
    marke: 'Toyota',
    color: 'Red',
    engineCapacity: '2.0L',
    mileage: '30,000 km',

    getInfo: function() {
        for (let property in this) {
            if (this.hasOwnProperty(property) && typeof this[property] !== 'function') {
                console.log(property + ': ' + this[property]);
            }
        }
    }
};


car.getInfo(); // Виводить інформацію про об'єкт

// Додаємо нову властивість
car.newProperty = 'Нова властивість!';

car.getInfo();