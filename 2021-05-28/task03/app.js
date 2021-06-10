// Задание 3 
//Создайте объект person, описывающий персону, с произвольным количеством произвольных полей. Запустите цикл, в котором через prompt запрашивается имя свойства. С помощью оператора in или typeof проверьте наличие в объекте этого свойства, и выведите его на экран. Если свойства нет, то добавляйте его в объект со значением, которое также запрашивается из prompt. Выйти из цикла и закончить проверки можно с помощью клавиши Cancel окна prompt.

let person = {
  name: 'Sasha',
  age: 15,
  hight: 180,
  weight: 70,
  hobby: 'tenis',
  number:  'absent',
}





var c = false;
for(;;){
  var par = prompt('Enter the parametr ');

  if (par == null ){
    break;
  }

  for(key in person){
    if (key == par){
    alert(`${par} is ${person[key]}`);
    c = true;
    break;
}
}

if(c == false){
var add = prompt('Add the parametr' )
person[par] = add;
console.log(person);
}
if(c == true){
    c = false;
}
}

