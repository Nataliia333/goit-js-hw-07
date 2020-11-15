/*Задание 4
Счетчик состоит из спана и кнопок, которые должны увеличивать и уменьшать значение счетчика на 1.
Создай переменную counterValue в которой будет хранится текущее значение счетчика.
Создай функции increment и decrement для увеличения и уменьшения значения счетчика
Добавь слушатели кликов на кнопки, вызовы функций и обновление интерфейса*/

const btnIncrement = document.querySelector('button[data-action="increment"]');
const btnDecrement = document.querySelector('button[data-action="decrement"]');
const counterValue = document.querySelector('#value')

let value = 0;

function decremenet() {
  value -= 1;
  render();
  }
    
function incremenet() {
  value += 1;
  render();
}
  
function render() {
  counterValue.textContent = value;
} 

btnIncrement.addEventListener('click', incremenet);
btnDecrement.addEventListener('click', decremenet);
