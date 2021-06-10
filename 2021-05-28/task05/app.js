
//Задание 5
//Динамически (скриптом) создайте HTML элемент <dl>. Переберите в цикле (for..in) сгенерированный ранее объект person, добавляя dt - для имени свойства и dd - для значения свойства (работа с DOM - с использованием методов Native JS)
let person = {
  name: 'Sasha',
  age: 15,
  hight: 180,
  weight: 70,
  hobby: 'tenis',
  phone: 'absent'
}
let dl = document.createElement('dl');
document.body.appendChild(dl);



for (let key in person) {
    let dt = document.createElement('dt');
    dl.appendChild(dt);
    dt.innerText = key;
    let dd = document.createElement('dd');
    dl.appendChild(dd);
    dd.innerText = person[key];
}  

