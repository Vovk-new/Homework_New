function checkProbabilityTheory(count) {
    let evenCount = 0;
    let oddCount = 0;

    for (let i = 0; i < count; i++) {
        // Генеруємо випадкове число в діапазоні від 100 до 1000 включно
        const rnd = Math.floor(Math.random() * 901) + 100; // 901 = 1000 - 100 + 1

        // Перевіряємо, чи є число парним чи непарним
        if (rnd % 2 === 0) {
            evenCount++;
        } else {
            oddCount++;
        }
    }

    // Обчислюємо відсоток парних до непарних
    const evenToOddRatio = (evenCount / oddCount);

    // Виводимо результати
    console.log(`Кількість згенерованих чисел: ${count}`);
    console.log(`Кількість парних: ${evenCount}`);
    console.log(`Кількість непарних: ${oddCount}`);
    console.log(`Відсоток парних до непарних: ${evenToOddRatio}`);

    return {
        totalCount: count,
        evenCount,
        oddCount,
        evenToOddRatio
    };
}

checkProbabilityTheory(100);
