
 // Задание 9 
//Переменная lang может принимать два значения: 'ru' и 'en'. Переменная day принимает значение от 0 до 6-ти. Если lang имеет значение 'ru', то в переменную result запишите название дня недели на русском языке в соответствии со значением переменной day (0 – воскресенье, 1 – понедельник, 2 – вторник и т.д.). Если же lang имеет значение 'en' – то аналогично, но день недели будет на английском.


let lang = prompt('Enter language( en, ru )');
lang = lang.toLowerCase();
let day = new Date();
day = day.getDay();
let day_r_1 = "Понедельник";
let day_r_2 = "Вторик";
let day_r_3 = "Среда";
let day_r_4 = "Четверг";
let day_r_5 = "Пятница";
let day_r_6 = "Суббота";
let day_r_0 = "Воскресенье";
let day_e_1 = "Monday";
let day_e_2 = "Tuesday";
let day_e_3 = "Wednesday";
let day_e_4 = "Thursday";
let day_e_5 = "Friday";
let day_e_6 = "Sunday";
let day_e_0 = "Saturday";
let result;

switch(lang) {
  case("ru") : {
      switch(day) {
          case(0) : {
              result = alert(day_r_0);
              break;
          }
          case(1) : {
            result = alert(day_r_1);
              break;
          }
          case(2) : {
            result = alert(day_r_2);
              break;
          }
          case(3) : {
            result = alert(day_r_3);
              break;
          }
          case(4) : {
            result = alert(day_r_4);
              break;
          }
          case(5) : {
            result = alert(day_r_5);
              break;
          }
          case(6) : {
            result = alert(day_r_6);
              break;
          }
      }
      break;
  }
  
  case("en") : {
      switch(day) {
          case(0) : {
            result = alert(day_e_0);
              break;
          }
          case(1) : {
            result = alert(day_e_1);
              break;
          }
          case(2) : {
            result = alert(day_e_2);
              break;
          }
          case(3) : {
            result = alert(day_e_3);
              break;
          }
          case(4) : {
            result = alert(day_e_4);
              break;
          }
          case(5) : {
            result = alert(day_e_5);
              break;
          }
          case(6) : {
            result = alert(day_e_6);
              break;
          }
      } 
      break;
  }
 default : {
     alert('Wrong language');
 }

}


