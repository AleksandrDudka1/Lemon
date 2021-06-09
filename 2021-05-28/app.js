// Создайте структуру данных, полностью описывающую html-разметку картинки. С помощью методов браузера добавьте ее на страницу со всеми атрибутами, читая значения свойств из созданного объекта.

let photo = document.createElement('img');
photo.src = 'https://www.google.com.ua/logos/doodles/2017/bella-akhmadulinas-80th-birthday-5134676388741120.3-law.gif';
photo.width = '200';
photo.style = 'border: 1px solid #ccc';
photo.alt = '';


let div1 = document.createElement('div');
div1.appendChild(photo);
document.body.appendChild(div1);
