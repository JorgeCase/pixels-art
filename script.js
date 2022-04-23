/* window.onload = function(){ */
const initialColor = document.getElementById('palette1');
initialColor.style.color = 'black';
// initialColor.className = 'selected';
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
createFrame(5);

// Adiciona o evento que seleciona a cor
/* const blackElement = document.querySelector('.color');
blackElement.classList.replace('color', 'color selected');
console.log(blackElement); */
const clickColorSelect = document.getElementsByClassName('color');

for (let i3 = 0; i3 < clickColorSelect.length; i3 += 1) {
  clickColorSelect[i3].addEventListener('click', function (event) {
    document.querySelector('.selected').classList.remove('selected');
    event.target.classList.add('selected');
  });
}
