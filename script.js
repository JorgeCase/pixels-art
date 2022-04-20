window.onload = function() {
    let linhas = 5;
    let colunas = 5;
    let pixel = document.getElementsByClassName('pixel');

//A função abaixo foi desenvolvida em concordância com o que foi discutido na mentoria técnica com o João Andrade Jr.
    function criaQuadro() {
        let paiSection = document.getElementById('pixel-board');
        for (let index = 0; index < linhas; index += 1) {
            let criaLinha = document.createElement('div');
            paiSection.appendChild(criaLinha);
            criaLinha.className = 'pixel';
            console.log(paiSection);
            for (let index2 = 0; index2 < colunas - 1; index2 += 1) {
                let criaColuna = document.createElement('div');
                criaLinha.appendChild(criaColuna);
                criaColuna.className = 'pixel';
                console.log(criaColuna);
            }
        }
    }
    criaQuadro();
};

/* window.onload = function() {
    let basePalette = 5;
    let numberOfLines = 5
    let controlLeft = numberOfLines; // 5
    let controlRight = numberOfLines; // 5
    let lines = document.querySelectorAll(".pixel");

// Cria uma caixa com base nas diferentes classes
function createBox(className) {
    let box = document.createElement("pixel");
    box.className = className;
    return box;
  }

 // Preenche uma linha
 function fillLine(divLine) {
    for (let lineColumn = 1; lineColumn <= basePyramid; lineColumn += 1) {
      if(lineColumn >= controlLeft && lineColumn <= controlRight) {
        let box = createBox("box");
        divLine.appendChild(box);
      } else {
        divLine.appendChild(createBox("box-empty"));
      }
    }
  }
  
    // Passa por todos as linhas (div com class line) e preenche o triangulo
    function fillTriangle(lines) {
      for(let index = 0; index < lines.length; index += 1) {
        fillLine(lines[index]);
        controlRight += 1;
        controlLeft -= 1;
      }
    }
     */