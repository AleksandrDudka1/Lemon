//Задание 4
//Запустите бесконечный цикл. В цикле вызывайте prompt, в котором пишется либо delete, либо update. В зависимости от указанного действия, удаляйте или добавляйте (редактируйте) свойство в объекте персоны (которая уже имеет телефон). Какое именно свойство удалять или добавлять - также читается из prompt. Какое значение будет у добавленного свойства - тоже берется из prompt. При нажатии на Отмена при появлении prompt редактирование person заканчивается. И обновленные данные распечатываются в консоли.

let person = {
  name: 'Sasha',
  age: 15,
  hight: 180,
  weight: 70,
  hobby: 'tenis',
  number:  'absent',
  phone: 'absent'
}


for (;;) {
  let ask = prompt('Enter delete or update: ');
  //ask.toLocaleLowerCase();
  if(ask == null) {
    break;
  }

  if (ask == 'delete') {
    let parDel = prompt('Which property do you want to delete?');
    for(let key in person) {
      
      if(key == parDel) {
         delete person[parDel];
         console.log(person);
         break;
        }
    }
  }


  if (ask == 'update') {
    let parAdd = prompt('Which property do you want to add?');
    let propAdd = prompt(`Enter property for ${parAdd}`);
    for( let key in person) {
       if (key != parAdd) {
         person[parAdd] = propAdd;
         console.log(person);
         break;
       } 
    }
  }
}
