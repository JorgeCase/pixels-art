/* window.onload = function(){ */
const initialColor = document.getElementById('palette1');
initialColor.style.color = 'black';
const initialLength = document.querySelector('#pixel-board');
// A função abaixo foi desenvolvida em concordância com o que foi discutido na mentoria técnica com o João Andrade Jr.
// Essa função cria os pixels do quadro
function createFrame(num) {
  const sectionFather = document.getElementById('pixel-board');
  for (let i = 0; i < num; i += 1) {
    const createLine = document.createElement('div');
    sectionFather.appendChild(createLine);
    createLine.className = 'linha-pixel';
    for (let i2 = 0; i2 < num; i2 += 1) {
      const createColumn = document.createElement('div');
      createLine.appendChild(createColumn);
      createColumn.className = 'pixel';
    }
  }
}
createFrame();

// Adiciona o evento que seleciona a cor
const clickColorSelect = document.getElementsByClassName('color');
for (let i3 = 0; i3 < clickColorSelect.length; i3 += 1) {
  clickColorSelect[i3].addEventListener('click', (event) => {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}

// Aplica a cor selecionada na paleta ao pixel
function changeColor() {
  const pixelClass = document.querySelectorAll('.pixel');
  for (let i4 = 0; i4 < pixelClass.length; i4 += 1) {
    pixelClass[i4].addEventListener('click', (event) => {
      const element = document.querySelector('.selected');
      const objectCss = window.getComputedStyle(element);
      const colorCss = objectCss.getPropertyValue('background-color');
      event.target.style.backgroundColor = colorCss;
    });
  }
}
changeColor();

// Reseta a área dos pixels. Aplica a cor 'branca' para todos os pixels.
const clearButton = document.getElementById('clear-board');

function clearPixels() {
  clearButton.addEventListener('click', () => {
    const selectPixel = document.querySelectorAll('.pixel');
    console.log(selectPixel);
    for (let i5 = 0; i5 < selectPixel.length; i5 += 1) {
      selectPixel[i5].style.backgroundColor = 'rgb( 255, 255, 255)';
    }
  });
}
clearPixels();

// Escolhendo o tamanho do quadro de pixels
// Criando constantes
const inputNum = document.createElement('input');
const buttonNum = document.createElement('button');
const divFather = document.querySelector('#choiceNumber');
// Inserindo características
inputNum.id = 'board-size';
inputNum.min = 1;
inputNum.type = 'number';
buttonNum.id = 'generate-board';
buttonNum.innerText = 'VQV';
// Criando os elementos na página
divFather.appendChild(inputNum);
divFather.appendChild(buttonNum);
// Estabelecendo condições
function choice() {
  createFrame(5);
  changeColor();
  buttonNum.addEventListener('click', () => {
    if (inputNum.value === '') {
      alert('Board inválido!');
      return;
    }
    if (inputNum.value < 5) {
      inputNum.value = 5;
    }
    if (inputNum.value > 50) {
      inputNum.value = 50;
    }
    initialLength.textContent = '';
    createFrame(inputNum.value);
    changeColor();
  });
}
choice();
