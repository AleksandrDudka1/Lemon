//Задание 6
//Сгенерируйте объект, описывающий модель телефона, заполнив все свойства значениями, прочитанными из prompt (например: brand, model, resolution, color...). Добавьте этот гаджет персоне, созданной ранее. После этого создайте независимую копию объекта person, не используя встроенный метод Object.assign и JSON.parse, а то есть перебором свойств.

 let person = {
    name: 'Sasha',
    age: 15,
    hight: 180,
    weight: 70,
    hobby: 'tenis',
    phone: 'absent'
  }
let phone = {
  brand: prompt('Enter brand'),
  model: prompt('Enter model'),
  color: prompt('Enter color')
}
person.phone = phone;
console.log(person);

let personCopy = {};
for(let key in  person) {
  personCopy[key] = person[key];
}
console.log(personCopy);
