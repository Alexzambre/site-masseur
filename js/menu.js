document.addEventListener("DOMContentLoaded", () => {
  const menuHTML = `
    <nav>
      <ul>
        <li><a href="index.html">Accueil</a></li>
        <li><a href="pages/prestations.html">Prestations</a></li>
        <li><a href="pages/reservation.html">Réservations</a></li>
      </ul>
    </nav>
  `;
  document.getElementById("menu").innerHTML = menuHTML;
});
