//Задание 6
//Создайте объект user с полем name. Создайте функцию format с параметрами start и end:
//Привяжите функцию format() к объекту user таким образом, чтобы ее вызов возвращал отформатированное имя пользователя
// userFormat('<<<', '>>>'); // <<<John>>>
let user = {
  name: 'sasha',


}

let userFormat = function (){
  format.call(user, '<<<', '>>>')
}
function format(start, end) {
  console.log(start + this.name + end);
}

userFormat();

