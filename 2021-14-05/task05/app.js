//Задание 5
//Космический корабль летит с Земли на Луну. Расстояние равно 384 400 км. Скорость полета корабля определяется в prompt. Рассчитайте, за какое время ваш космический корабль доберется до Луны. Используйте осмысленные названия переменных для хранения значений.

 var S = 384400;
 alert(`Расстояние между Землей и Луной: ${S.toLocaleString('ru')}`);
 var U = prompt('Введите скорость: ', '1');
 alert(`Время за которое корабль доберется до луны: ${S / U}`);

