// Задание 2
//С клавиатуры вводятся цифры. В цикле происходит проверка – если введено простое число, тогда происходит выход из цикла и число выводится на экране с помощью alert.
var k = +prompt('Enter the number', 100);
var c = 0;
for(var i = 2; i < k; i++){
    if(k%i == 0){
    c++;
        break;
    }
}
if (c == 0){
     alert('Number is simple');
    }
else if(c>0){
    alert('Number is not simple ');
}
