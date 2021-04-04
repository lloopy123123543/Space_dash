let cube = {
    id: 'cube',
    x: 340,
    y: 100,
    width: 100,
    height: 100,
    trnstn: .25,
    step: 50,
    color: 'black'
}
let cubeq = {
  id: 'cubeq',
  x: 340,
  y: 500,
  width: 100,
  height: 100,
  trnstn: .25,
  step: 50,
  color: 'red'
}

let map = {
    x:0,
    y:0,
    width: 500,
    height: 500,
    color: 'yellow',
    border: 'yellow',
}
let enemy = {
  x:1500,
  y: 100,
  width:80,
  height:80,
  color:"blue"
}
let enemyq = {
  x:1500,
  y: 500,
  width:80,
  height:80,
  trnstn:.7,
  color:"blue"
}
renderCubeq(cubeq);
renderCube(cube);
renderCubeq(cubeq);
