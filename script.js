const noButton = document.querySelector('.no');

document.addEventListener('mousemove', (e) => {
  const maxX = window.innerWidth - noButton.offsetWidth;
  const maxY = window.innerHeight - noButton.offsetHeight;

  const randomX = Math.random() * maxX;
  const randomY = Math.random() * maxY;

  noButton.style.left = `${randomX}px`;
  noButton.style.top = `${randomY}px`;
});
