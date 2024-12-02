const list = document.querySelector(".list");
let items = Array.from(document.querySelectorAll(".item"));
let currentIndex = 0;

function handleClick(direction) {
    if (direction === "next") {
        // Déplace le premier élément à la fin
        const firstItem = items.shift();
        items.push(firstItem);
        list.appendChild(firstItem);
    } else if (direction === "previous") {
        // Déplace le dernier élément au début
        const lastItem = items.pop();
        items.unshift(lastItem);
        list.insertBefore(lastItem, list.firstChild);
    }

    // Redéfinir la position pour le défilement
    list.style.transition = "none";
    list.style.transform = `translateX(0)`;
}

// Fonction pour afficher le popup
function showPopup() {
    document.getElementById('popup').style.display = 'flex';
  }
  
  // Fonction pour fermer le popup
  function closePopup() {
    document.getElementById('popup').style.display = 'none';
  }
  
  // À l'ouverture de la page, assurez-vous que le popup est caché
  window.onload = function() {
    document.getElementById('popup').style.display = 'none';
  };