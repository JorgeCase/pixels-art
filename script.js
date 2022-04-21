window.onload = function () {
  const lines = 5;
  const columns = 5;

  // A função abaixo foi desenvolvida em concordância com o que foi discutido na mentoria técnica com o João Andrade Jr.
  function createFrame() {
    const sectionFather = document.getElementById('pixel-board');
    for (let index = 0; index < lines; index += 1) {
      const createLine = document.createElement('div');
      sectionFather.appendChild(createLine);
      createLine.className = 'linha-pixel';
      for (let index2 = 0; index2 < columns; index2 += 1) {
        const createColumn = document.createElement('div');
        createLine.appendChild(createColumn);
        createColumn.className = 'pixel';
      }
    }
  }
  createFrame();
};

// Altera a classe color do elemento preto da paleta de cores
/* let cor = 'black'; */
/*
const tamLinha = document.getElementByClassName('linha-pixel');
tamLinha.style.maxWidth = (40 * 5);
 */
