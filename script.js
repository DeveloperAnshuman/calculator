
let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string = "";

buttons.forEach(button => {
  button.addEventListener('click', () => {
    if (button.textContent === '=') {
      string = eval(string);
      input.value = string;
    } else if (button.textContent === 'AC') {
      string = "";
      input.value = string;
    } else if (button.textContent === 'DEL') {
      string = string.slice(0, -1);
      input.value = string;
    } else if (button.textContent === '%') { 
      string += '/100'; 
      input.value = string;
    } else {
      string += button.textContent;
      input.value = string;
    }
  })
})

