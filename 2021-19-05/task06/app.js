//Задание 6 
//В переменную day записан текущий день недели. Если это не суббота и не воскресенье, выведите в alert сентенцию о необходимости идти на работу.
let day = prompt("Enter a day", 'day');
day = day.toLocaleLowerCase();

if(day == "sunday" || day == "saturday"){
    alert("We can stay at home");
}
else {
    alert("We have to go to the job");
}


