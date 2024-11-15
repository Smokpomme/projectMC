const list = document.querySelector(".list");

  // We want to know the width of one of the items. We'll use this to decide how many pixels we want our carousel to scroll.
  const item = document.querySelector(".item");
  const itemWidth = item.offsetWidth;

  function handleClick(direction) {
    // Based on the direction we call `scrollBy` with the item width we got earlier
    if(direction === "previous") {
      list.scrollBy({ left: -itemWidth, behavior: "smooth" });
    } else {
      list.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  }



  function toggleFlip(card) {
    const flipCard = card.querySelector('.flip-card');
    flipCard.classList.toggle('flip-active'); // Appliquez l'effet de flip
    card.classList.toggle('flipped'); // Ajoutez/enlevez la classe 'flipped'
}