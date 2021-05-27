//Задание 8 !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
//В переменной month хранится текущий месяц (new Date()). Определите в какую пору года попадает этот месяц (зима, лето, весна, осень).

let month = new Date();
month = month.getMonth() + 1;
let result;


switch (month) {
    case (1) : {
      result =  alert('Winter');
        break;
    } 
    case (2) : {
      result =  alert('Winter');
        break;
    }
    case (3) : {
      result = alert('Spring');
        break;
    }
    case (4) : {
      result =  alert('Spring');
        break;
    }
    case (5) : {
      result = alert('Spring');
        break;
    }
    case (6) : {
      result = alert('Summer');
      break;
    }
    case (7) : {
      result = alert('Summer');
        break;
    }
    case (8) : {
      result = alert('Summer');
      break;
    }
    case (9) : {
      result = alert('Autumn');
      break;
    }
    case (10) : {
      result = alert('Autumn');
      break;
    }
    case (11) : {
      result = alert('Autumn');
      break;
    }
    case (12) : {
      result = alert('Winter');
      break;
    } 
    }


//Напишите калькулятор обмена валюты USD-UAH. Из первого prompt читается тип операции (регистр символов не имеет значения), из второго - сумма, подлежащая конвертации. Используя switch, рассчитайте результат конвертации. Результат выведите его в alert.
    let currency =  prompt('Введите валюту USD или UAH: ');
    currency = currency.toLowerCase();
    let amount = +prompt(`Введите сумму которыю вы хотите перевести в ${currency}:`);
    let mon = 28;
    let result;

    switch(currency) {

      case 'usd': result = amount / mon;break;
      case 'uah': result = amount * mon;break;
      default: result = 'Произошла ошибка, попробуйте еще раз!';
    }

    alert(result);

