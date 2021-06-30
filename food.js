import {  onSnake, expandSnake } from './snake.js'
import { randomGridPosition} from './grid.js'

export let foodPosition =  getRandomFoodPosition()
const EXPANSTION_RATE = 1


export function update(){
  console.log(onSnake(foodPosition))
  if( onSnake(foodPosition) ){
    //eat food
    expandSnake(EXPANSTION_RATE)
    foodPosition = getRandomFoodPosition()
  } 
}

export function draw(gameBoard){
     const foodElement = document.createElement('div')
     foodElement.style.gridRowStart = foodPosition.y
     foodElement.style.gridColumnStart = foodPosition.x
     foodElement.classList.add('food')
     gameBoard.appendChild(foodElement)
}

function getRandomFoodPosition() {
  let newFoodPosition
  while(newFoodPosition == null || onSnake(newFoodPosition)){
    newFoodPosition = randomGridPosition()
  }
  return newFoodPosition
}