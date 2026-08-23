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

document.querySelectorAll('nav #myLinks a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelectorAll('nav #myLinks a').forEach(l => l.classList.remove('active'));

        // Ajoute la classe active au lien cliqué
        this.classList.add('active');
    });
});