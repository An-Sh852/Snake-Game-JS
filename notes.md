1. snake speed = 2 moves per second
2. time taken by 1 move = 1/2 i.e 1/snake_speed
3. when to move snake? when secondsSinceLastRender > 1/2
4. 2 fuctions -> update() [update all the logic for game] & draw() [draw/render everything on screen based on update()]


# Snake.js
- Represent snake as x & y position in grid-based system
- segment -> each piece of snake
- movement -> add snakeElement-div to the direction in which the snake is heading
 