document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la soumission classique du formulaire

    // Récupération des données du formulaire
    const formData = {
      massage: document.getElementById("massage").value,
      duration: document.getElementById("duration").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
    };

    // Texte lisible pour la prestation sélectionnée
    const massageText = form.querySelector(`#massage option[value="${formData.massage}"]`).textContent;

    // Génération du message de confirmation avec <strong>
    confirmation.innerHTML = `
      <p>Votre réservation a été enregistrée avec succès :</p>
      <ul>
        <li><strong>Prestation :</strong> ${massageText}</li>
        <li><strong>Durée :</strong> ${formData.duration} minutes</li>
        <li><strong>Date :</strong> ${formData.date}</li>
        <li><strong>Heure :</strong> ${formData.time}</li>
      </ul>
    `;
    confirmation.style.color = "green";
  });
});
