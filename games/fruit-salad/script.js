document.addEventListener('DOMContentLoaded', () => {
  const startBtn = document.querySelector('.start-btn');
  const introScreen = document.querySelector('.intro-screen');
  const gameScreen = document.querySelector('.game-screen');
  const blueberryContainer = document.querySelector('.blueberry-container');
  const doneBtn = document.querySelector('.done-btn');
  const box = document.querySelector('.box');
  const targetNumber = 40;
  let boxCount = 0;

  startBtn.onclick = () => {
    introScreen.classList.add('hidden');
    gameScreen.classList.remove('hidden');
    generateBlueberries();
  };

  function generateBlueberries() {
    for (let i = 0; i < 10; i++) {
      const blueberry = document.createElement('div');
      blueberry.classList.add('blueberry');
      blueberry.dataset.value = "10";
      blueberry.draggable = true;

      blueberry.ondragstart = (e) => {
        e.dataTransfer.setData('text/plain', '10');
        e.dataTransfer.effectAllowed = 'move';
      };

      blueberryContainer.appendChild(blueberry);
    }
  }

  box.ondragover = (e) => {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
  };

  box.ondrop = (e) => {
    e.preventDefault();
    const value = parseInt(e.dataTransfer.getData('text/plain'));
    boxCount += value;
    e.target.appendChild(document.querySelector('.blueberry-container .blueberry'));
  };

  doneBtn.onclick = () => {
    if (boxCount === targetNumber) {
      alert("Great Job! You counted correctly!");
    } else {
      alert(`Oops! You put ${boxCount}, try again!`);
      resetGame();
    }
  };

  function resetGame() {
    boxCount = 0;
    blueberryContainer.innerHTML = '';
    box.innerHTML = '';
    generateBlueberries();
  }
});
