
  function toggleFlip(card) {
    const flipCard = card.querySelector('.flip-card');
    flipCard.classList.toggle('flip-active'); // Appliquez l'effet de flip
    card.classList.toggle('flipped'); // Ajoutez/enlevez la classe 'flipped'
}