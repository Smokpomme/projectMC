// Ouvrir la popup
document.querySelector(".relief-button").addEventListener("click", function () {
    document.getElementById("popup").classList.remove("hidden");
});

// Fermer la popup
function closePopup() {
    document.getElementById("popup").classList.add("hidden");
}

// Gestion du formulaire
document.getElementById("auth-form").addEventListener("submit", async function (event) {
    event.preventDefault();

    // Récupération des données du formulaire
    const firstName = document.getElementById("first-name").value;
    const lastName = document.getElementById("last-name").value;
    const email = document.getElementById("email").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Envoyer les données au backend
    const response = await fetch("/pop.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            firstName,
            lastName,
            email,
            username,
            password,
        }),
    });

    const result = await response.json();

    if (response.ok) {
        alert(result.message); // Succès
        closePopup();
    } else {
        alert(result.error); // Erreur
    }
});
