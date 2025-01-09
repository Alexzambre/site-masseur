document.addEventListener("DOMContentLoaded", () => {
  // Récupère le chemin actuel
  const currentPath = window.location.pathname;

  // Détermine les préfixes en fonction de la page actuelle
  let prefix = './'; // Par défaut, pour la page d'accueil
  if (currentPath.includes('/pages/')) {
    prefix = '../'; // Pour les pages dans le dossier "pages"
  }

  // Génère le menu avec les chemins adaptés
  const menuHTML = `
    <nav>
      <ul>
        <li><a href="${prefix}index.html">Accueil</a></li>
        <li><a href="${prefix}pages/prestations.html">Prestations</a></li>
        <li><a href="${prefix}pages/reservation.html">Réservations</a></li>
      </ul>
    </nav>
  `;

  // Injecte le menu dans le conteneur
  document.getElementById("menu").innerHTML = menuHTML;
});
