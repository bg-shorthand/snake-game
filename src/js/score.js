const $score = document.querySelector('.score span');

export default () => {
  $score.textContent = +$score.textContent + 10;
};