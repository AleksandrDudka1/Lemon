// Задание 3
//Напишите проверку пароля, введенного пользователем. Если введенный пароль правильный, то программа выдает сообщение “Вы успешно авторизованы”. Если пароль неправильный, программа снова выдает запрос пароля – до тех пор, пока пользователь не введет правильный пароль или не нажмет Отмена. В случае отмены авторизации, выдать окно подтверждения с текстом: “Вы уверены, что хотите отменить авторизацию?”. Если ответ утвердительный, тогда выдать сообщение “Вы отменили авторизацию”, если ответ отрицательный, тогда снова выдать запрос пароля.
var correctPassword = 'qwerty';
let result;
do {
	password = prompt('Введите пароль:', '');
  if (password == correctPassword) {
     alert('Вы успешно авторизованы!')
     break;
  } else if(password == null) {
            result = confirm('Вы уверены, что хотите отменить авторизацию?');
  }
  if (result == true) {
    alert('Вы отменили авторизацию');
    break;
  }
} while (password !== correctPassword);
