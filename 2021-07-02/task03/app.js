    //Задание 3
    //Создайте массив со значениями: ‘Angular’, ‘jQuery’
// Добавьте в начало массива значение ‘Backbone.js’
// Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// Добавьте в массив значение ‘CommonJS’ вторым элементом
// Найдите и удалите из массива значение ‘jQuery’, выведите его в alert со словами “Это здесь лишнее”

    const third = ['Angular', 'jQuery'];
    third.unshift('Backbone.js');
    third.push('ReactJS');
    third.push('Vue.js');
    third.splice(1, 1, ('CommonJS'));
    for(let i = 0; i <= third.length; i++){
      if (third[i] == 'jQuery'){
          third.splice(i,1) ;
          alert('Это лишнее')
      }
      
      }
    console.log(third);
