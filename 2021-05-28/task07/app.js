// Задание 7
//С помощью деструктуризации сохраните свойство phone объекта-копии в переменную с именем gadget. Добавьте поля объекта gadget в созданный ранее список <dl>


let phone = {
  brand: prompt('Enter brand'),
  model: prompt('Enter model'),
  color: prompt('Enter color')
}

let gadget = {brand, model, color} = phone;
let dl = document.createElement('dl');
document.body.appendChild(dl);



for (let key in gadget) {
    let dt = document.createElement('dt');
    dl.appendChild(dt);
    dt.innerText = key;
    let dd = document.createElement('dd');
    dl.appendChild(dd);
    dd.innerText = gadget[key];
}  
