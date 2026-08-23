function toggleMenu() {
    var x = document.getElementById("myLinks");

    // Affichage du menu
    if (x.style.display === "block") {
        x.style.display = "none";
    } else {
        x.style.display = "block";
    }

    // Ajoute/enlève la classe sur le body pour tout masquer
    document.body.classList.toggle("menu-open");
}