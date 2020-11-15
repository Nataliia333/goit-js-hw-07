/*Задание 2
Напиши скрипт, который для каждого элемента массива ingredients 
создаст отдельный li, после чего вставит все li за одну операцию 
в список ul.ingredients. Для создания DOM-узлов используй 
document.createElement().*/

const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];

let items = '';
const list = document.querySelector('ul#ingredients');
ingredients.forEach(item => {
  items = document.createElement('li');
  items.textContent = item;
  list.append(items);
})