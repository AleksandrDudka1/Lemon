//У Чжуан-цзы было N яблок, Цзэн-Цзы съел несколько. Чжуан-Цзы обвиняет Цзэн-Цзы в том, что он съел все яблоки, но Цзэн-Цзы возражает. Запишите повествование в переменных и выражениях, читая значения из prompt. Не используя операторы сравнения, покажите, правду говорит Цзэн-Цзы или ложь.


 var x = +prompt('Введите первоночальное количество яблок', 10 );
 var z = +prompt('Введите количество съеденых яблок', 10 );
 alert(Boolean((x - z) == 0));
