import { getInputDirection } from './input.js'



export const SNAKE_SPEED = 2 //how many times snake moves per second
const snakeBody = [ {x: 11, y: 11} ]
//number of new segments
let newSegments = 0


export function update(){
  addSegments()
  const inputDirection = getInputDirection()
  const lastDivXCoordinate = snakeBody[snakeBody.length - 1].x
  const lastDivYCoordinate = snakeBody[snakeBody.length - 1].y
  const directionObj = { x: lastDivXCoordinate + inputDirection.x , y: lastDivYCoordinate + inputDirection.y}
  snakeBody.push(directionObj)
  snakeBody.shift() 
}

export function draw(gameBoard){
  snakeBody.forEach(segment => {
     const snakeElement = document.createElement('div')
     // set x & y coordinate to div
     snakeElement.style.gridRowStart = segment.y
     snakeElement.style.gridColumnStart = segment.x
     snakeElement.classList.add('snake')
     gameBoard.appendChild(snakeElement)
  })
}

export function onSnake(foodPosition, { ignoreHead = false} = {}){ 
  return snakeBody.some( segment, imdex => {
    if(ignoreHead && index === 0) return false 
    return equalPositions( segment, foodPosition)
  })
}

export function expandSnake(EXPANSTION_RATE){
  newSegments += EXPANSTION_RATE
}

export function getSnakeHead(){
  return snakeBody[0]
}

export function snakeIntersection(){
  return onSnake(snakeBody[0], { ignoreHead: true})
}


const equalPositions = function( pos1, pos2) {
  return pos1.x === pos2.x && pos1.y === pos2.y
}

const addSegments = function(){
  for( let i=0; i < newSegments; i++){
    const obj = { x:snakeBody[snakeBody.length - 1].x, y: snakeBody[snakeBody.length - 1].y }
    snakeBody.push(obj)
  }
  newSegments = 0 
}

