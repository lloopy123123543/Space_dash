document.onkeydown = checkButton;
let logg = 0;

function checkButton(event) {


    if (event.keyCode === 38) {
        console.log("ArrowUp");
        renderCube(cube);

    }


    if (event.keyCode === 40) {
        console.log("ArrowDown");
        renderCubeq(cubeq);

    }







    if (event.keyCode === 39 ) {
        console.log("ArrowUp");
        renderEnemy(enemy);
        renderEnemy(enemy);
    }
    if (enemy.x>0){
      printNumbers(enemy);
    }









}




function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function printNumbers(enemy.x<0) {
  let current = from;

  let timerId = setInterval(function() {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
      enemy.x-100;
      renderEnemy(enemy);

    }
    enemy.x-100+'px';
    current++;
  }, 1000);
}

// использование:
printNumbers(1, 1500);




function renderCube(cube) {
    document.getElementById(cube.id).style.top = cube.y + 'px';
    document.getElementById(cube.id).style.left = cube.x + 'px';
    document.getElementById(cube.id).style.width = cube.width + 'px';
    document.getElementById(cube.id).style.height = cube.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cube.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cube.color;
}
function renderCubeq(cubeq) {
    document.getElementById(cube.id).style.top = cubeq.y + 'px';
    document.getElementById(cube.id).style.left = cubeq.x + 'px';
    document.getElementById(cube.id).style.width = cubeq.width + 'px';
    document.getElementById(cube.id).style.height = cubeq.height + 'px';
    document.getElementById(cube.id).style.transition = 'ease ' + cubeq.trnstn + 's';
    document.getElementById(cube.id).style.backgroundColor = cubeq.color;
}
function renderEnemy(enemy) {
  document.getElementById(cube.id).style.top = enemy.y + 'px';
  document.getElementById(cube.id).style.left = enemy.x + 'px';
  document.getElementById(cube.id).style.width = enemy.width + 'px';
  document.getElementById(cube.id).style.height = enemy.height + 'px';
  document.getElementById(cube.id).style.backgroundColor = enemy.color;
}

function renderEnemyq(enemyq) {
  document.getElementById(cube.id).style.top = enemyq.y + 'px';
  document.getElementById(cube.id).style.left = enemyq.x + 'px';
  document.getElementById(cube.id).style.width = enemyq.width + 'px';
  document.getElementById(cube.id).style.height = enemyq.height + 'px';
  document.getElementById(cube.id).style.transition = 'ease ' + enemyq.trnstn + 's';
  document.getElementById(cube.id).style.backgroundColor = enemyq.color;
}
