var arr = [
    {
        userName: "Test",
        lastName: "Test",
        email: "test.test@gmail.com"
    },
    {
        userName: "Dmitro",
        lastName: "Porohov",
        email: "dmitro.porohov@yahoo.com"
    },
    {
        userName: "Andrii",
        lastName: "",
        email: "andrii@mail.ru" // Нам такі не підходять
    },
];

// Регулярний вираз для перевірки адреси
var validEmailPattern = /^[a-zA-Z0-9]+(\.[a-zA-Z0-9]+)*@(gmail\.com|yahoo\.com)$/;

// Створюємо масив для довірених адрес
var trustedEmails = [];

// Перебираємо масив об'єктів
for (var i = 0; i < arr.length; i++) {
    var email = arr[i].email;
    
    // Перевіряємо валідність адреси
    if (validEmailPattern.test(email)) {
        trustedEmails.push(email);
    }
}

console.log(trustedEmails); // ["test.test@gmail.com", "dmitro.porohov@yahoo.com"]
