/*Задание 6
Напиши скрипт, который бы при потере фокуса на инпуте, проверял его содержимое 
на правильное количество символов.
Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
Если введено подходящее количество, то border инпута становится зеленым, 
если неправильное - красным.
Для добавления стилей, используй CSS-классы valid и invalid.*/
const input = document.querySelector('#validation-input');
const inputAction = input.dataset.length;

input.addEventListener('input', event => {
  if (event.target.value.length === Number(inputAction)) {
    input.classList.add('valid');
    input.classList.remove('invalid');
  } else {
    input.classList.add('invalid');
  }
});
