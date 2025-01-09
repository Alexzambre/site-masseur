document.addEventListener("DOMContentLoaded", () => {
  // Calculer la profondeur à partir de la racine
  const pathDepth = window.location.pathname.split('/').length - 2; // Ajustement ici
  const prefix = pathDepth > 0 ? '../'.repeat(pathDepth) : './'; // Remonter à la racine

  // Générer le menu HTML
  const menuHTML = `
    <nav>
      <ul>
        <li><a href="${prefix}index.html">Accueil</a></li>
        <li><a href="${prefix}pages/prestations.html">Prestations</a></li>
        <li><a href="${prefix}pages/reservation.html">Réservations</a></li>
      </ul>
    </nav>
  `;

  // Injecter le menu dans le conteneur
  document.getElementById("menu").innerHTML = menuHTML;
});
