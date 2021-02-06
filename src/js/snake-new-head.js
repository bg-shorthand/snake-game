import snakeState from './snake-state';
import wayState from './way-state';

export default () => {
  const { x: newX, y: newY } = snakeState[0];
  return wayState.dir === 'up'
    ? { x: newX, y: newY - 10 }
    : wayState.dir === 'down'
      ? { x: newX, y: newY + 10 }
      : wayState.dir === 'left'
        ? { x: newX - 10, y: newY }
        : { x: newX + 10, y: newY };
};