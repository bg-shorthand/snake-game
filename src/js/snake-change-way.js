import wayState from './way-state';

const $left = document.querySelector('.left');
const $right = document.querySelector('.right');

export default () => {
  const { dir } = wayState;
  window.addEventListener('keydown', e => {
    if (e.code !== 'ArrowLeft') return;
    if (dir === 'up') {
      wayState.dir = 'left';
    } else if (dir === 'down') {
      wayState.dir = 'right';
    } else if (dir === 'left') {
      wayState.dir = 'down';
    } else if (dir === 'right') {
      wayState.dir = 'up';
    }
  });
  window.addEventListener('keydown', e => {
    if (e.code !== 'ArrowRight') return;
    if (dir === 'up') {
      wayState.dir = 'right';
    } else if (dir === 'down') {
      wayState.dir = 'left';
    } else if (dir === 'left') {
      wayState.dir = 'up';
    } else if (dir === 'right') {
      wayState.dir = 'down';
    }
  });
  $left.addEventListener('click', () => {
    if (dir === 'up') {
      wayState.dir = 'left';
    } else if (dir === 'down') {
      wayState.dir = 'right';
    } else if (dir === 'left') {
      wayState.dir = 'down';
    } else if (dir === 'right') {
      wayState.dir = 'up';
    }
  });
  $right.addEventListener('click', () => {
    if (dir === 'up') {
      wayState.dir = 'right';
    } else if (dir === 'down') {
      wayState.dir = 'left';
    } else if (dir === 'left') {
      wayState.dir = 'up';
    } else if (dir === 'right') {
      wayState.dir = 'down';
    }
  });
};