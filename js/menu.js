document.addEventListener("DOMContentLoaded", () => {
  // Vérifie si la page actuelle est dans le dossier "pages"
  const isInPagesFolder = window.location.pathname.includes("/pages/");

  // Définir les chemins dynamiques en fonction de la page courante
  const menuHTML = `
    <nav>
      <ul>
        <li><a href="${isInPagesFolder ? '../index.html' : 'index.html'}">Accueil</a></li>
        <li><a href="${isInPagesFolder ? 'prestations.html' : 'pages/prestations.html'}">Prestations</a></li>
        <li><a href="${isInPagesFolder ? 'reservation.html' : 'pages/reservation.html'}">Réservations</a></li>
      </ul>
    </nav>
  `;

  // Injecte le menu dans le conteneur <div id="menu">
  document.getElementById("menu").innerHTML = menuHTML;
});
