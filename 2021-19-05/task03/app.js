// Задание 3
//Получите из prompt значение для имени пользователя. Выведите на экран приветствие. Учтите вариант, что пользователь может не ввести ничего или нажать на Отмена.
let firstName = prompt('Введите имя: ');
let greeting;
if (firstName){
  greeting = ` Привет ${firstName}`;
}else if  (firstName == '') {
 greeting = 'Пока!';
}else{
  greeting = 'Пока!';
}
alert(greeting);

