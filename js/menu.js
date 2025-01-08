document.addEventListener("DOMContentLoaded", () => {
  // Détermine la profondeur de la page en comptant les "/"
  const pathDepth = window.location.pathname.split('/').length - 1;

  // Calcule le préfixe pour remonter correctement dans l'arborescence
  const prefix = '../'.repeat(pathDepth - 1);

  // Génère le menu avec les chemins dynamiques
  const menuHTML = `
    <nav>
      <ul>
        <li><a href="${prefix}index.html">Accueil</a></li>
        <li><a href="${prefix}pages/prestations.html">Prestations</a></li>
        <li><a href="${prefix}pages/reservation.html">Réservations</a></li>
      </ul>
    </nav>
  `;

  // Injecte le menu dans l'élément <div id="menu">
  document.getElementById("menu").innerHTML = menuHTML;
});
