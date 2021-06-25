 // Задание 5
    //Напишите функцию, которая в строке, состоящей из чисел, разделенных пробелом, находит максимальное и минимальное и возвращает их 

  


    function number(result) {
      result = result.split(' ');
      result = result.map(Number);
      min = 0;
      max = min;
      for(let i = 0; i < result.length; i++) {
        if(result[i] < min) min = result[i];
        if(result[i] > max) max = result[i];
      }
      console.log(`Минимальное значение: ${min}, максимальное значение: ${max}`)
      return result;

    }
    var res = number('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6');
    console.log(res);
