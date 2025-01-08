document.addEventListener("DOMContentLoaded", () => {
  // Détecte si la page actuelle est dans le dossier "pages"
  const isInPagesFolder = window.location.pathname.includes("/pages/");

  const menuHTML = `
    <nav>
      <ul>
        <li><a href="${isInPagesFolder ? '../' : ''}index.html">Accueil</a></li>
        <li><a href="${isInPagesFolder ? '' : 'pages/'}prestations.html">Prestations</a></li>
        <li><a href="${isInPagesFolder ? '' : 'pages/'}reservation.html">Réservations</a></li>
      </ul>
    </nav>
  `;

  document.getElementById("menu").innerHTML = menuHTML;
});
