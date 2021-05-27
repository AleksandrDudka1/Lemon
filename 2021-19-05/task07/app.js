// Задание 7 
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

