export const initLike = () => {
  const likeButtons = document.querySelectorAll('.gallery-btn-like');

  if (!likeButtons) {
    return
  }

  const likeCounts = document.querySelectorAll('.gallery-like-counter');

  likeButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
      btn.classList.toggle('selected');
      const current = Number(likeCounts[index].textContent);
      const inc = btn.classList.contains('selected') ? 1 : -1;
      likeCounts[index].textContent = current + inc;
    });
  });
};
