    // Задание 4
//Создайте строку с текстом ‘Как Однажды Жак Звонарь Сломал Городской Фонарь’. Разбейте ее на массив слов, и переставьте слова в правильном порядке с помощью любых методов массива (indexOf, splice ...). Затем объедините элементы массива в строку и выведите в alert исходный и итоговый варианты.

    let string = 'Как Однажды Жак Звонарь Сломал Городской Фонарь';
    let stringCopy = string.split([' ']);
    let stringCopy2 = stringCopy[5];
    let stringCopy3 = stringCopy[4];
    stringCopy[5] = stringCopy3;
    stringCopy[4] = stringCopy2;
    console.log(stringCopy);
    alert(stringCopy.join(' '));
