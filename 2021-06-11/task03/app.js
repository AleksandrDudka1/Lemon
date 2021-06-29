//  Задание 3
//  Создайте объект array с методом инициализации начального значения массива, c методами добавления, удаления последнего элемента массива и методом возврата текущего состояния массива. Используйте концепцию chaining для создания цепочки вызовов.

 let array = {
     mas: mas = [1,2,3,4],
     firstElement: function () {
       let veriable = +prompt('Введите значение первого єлемента: ');
       this.mas[0] = veriable;
     },
     secondElement: function () {
       this.mas.pop();
     },
     thirdElement: function () {
      let add = +prompt('введите название элемента которое вы хотите добавить: ');
      this.mas.push(add);
     },
     fourthElement: function () {
      console.log(array.mas)
     }
 }
array.firstElement();
array.secondElement();
array.thirdElement();
array.fourthElement();
