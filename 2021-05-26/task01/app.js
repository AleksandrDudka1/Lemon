// Задание 1
//Сформируйте строку вида ".#.#.#.#.#." чередованием символов . и # в каждой итерации с помощью цикла for. После выхода из цикла распечатайте полученную строку.
var n = +prompt(`Enter the amount of symbols in string: `,10)
var string = '#';
for(let i = 0; i < n; i++ ){
  if(i%2 == 1){
    string = string + "#";
  }else{
    string = string + ".";
  }
}
console.log(string);
