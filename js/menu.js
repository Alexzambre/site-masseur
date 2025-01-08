document.addEventListener("DOMContentLoaded", () => {
  // Vérifie si la page actuelle est dans le dossier "pages"
  const isInPagesFolder = window.location.pathname.includes("/pages/");

  let menuHTML;

  if (isInPagesFolder) {
    // Si la page est dans le dossier "pages"
    menuHTML = `
      <nav>
        <ul>
          <li><a href="../index.html">Accueil</a></li> <!-- Remonte au niveau racine -->
          <li><a href="prestations.html">Prestations</a></li> <!-- Même dossier -->
          <li><a href="reservation.html">Réservations</a></li> <!-- Même dossier -->
        </ul>
      </nav>
    `;
  } else {
    // Si la page est à la racine
    menuHTML = `
      <nav>
        <ul>
          <li><a href="index.html">Accueil</a></li> <!-- Reste au niveau racine -->
          <li><a href="pages/prestations.html">Prestations</a></li> <!-- Dossier "pages" -->
          <li><a href="pages/reservation.html">Réservations</a></li> <!-- Dossier "pages" -->
        </ul>
      </nav>
    `;
  }

  // Injecte le menu dans le conteneur <div id="menu">
  document.getElementById("menu").innerHTML = menuHTML;
});
