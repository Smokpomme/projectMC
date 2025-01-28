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

// Fonction afficher le popup
function showPopup() {
  document.getElementById('popup').style.display = 'flex';
}

<<<<<<< HEAD
// Fonction fermer le popup
=======
// Fonction pour fermer le popup
>>>>>>> b6d36adb386348ac10ecf6c9008a312cae5622d8
function closePopup() {
  document.getElementById('popup').style.display = 'none';
}

<<<<<<< HEAD
// popup cacher à l'ouverture
=======
// À l'ouverture de la page, assurez-vous que le popup est caché
>>>>>>> b6d36adb386348ac10ecf6c9008a312cae5622d8
window.onload = function() {
  document.getElementById('popup').style.display = 'none';
};