document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la soumission normale du formulaire

    // Récupération des valeurs du formulaire
    const massage = document.getElementById("massage").value;
    const duration = document.getElementById("duration").value;
    const date = document.getElementById("date").value;
    const time = document.getElementById("time").value;

    // Génération du message de confirmation
    const massageText = form.querySelector(`#massage option[value="${massage}"]`).textContent;
    confirmation.innerHTML = `
      <p>Votre réservation a été enregistrée avec succès :</p>
      <ul>
        <li><strong>Prestation :</strong> ${massageText}</li>
        <li><strong>Durée :</strong> ${duration} minutes</li>
        <li><strong>Date :</strong> ${date}</li>
        <li><strong>Heure :</strong> ${time}</li>
      </ul>
    `;
    confirmation.style.color = "green";
  });
});
