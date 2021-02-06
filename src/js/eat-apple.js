import snakeState from './snake-state';
import appleState from './apple.state';
import appleLocationChoice from './apple-location-choice';
import appleRender from './apple-render';
import score from './score';

let { randomX: x, randomY: y } = appleLocationChoice();
export default () => {
  appleRender(x, y);
  if (snakeState[0].x === appleState.x && snakeState[0].y === appleState.y) {
    snakeState.push(
      {
        x: snakeState[snakeState.length - 1].x,
        y: snakeState[snakeState.length - 1].y
      }
    );
    x = appleLocationChoice().randomX;
    y = appleLocationChoice().randomY;
    score();
  }
};