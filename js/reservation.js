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
      timeslot: document.getElementById("timeslot").value,
      location: document.getElementById("location").value,
      name: document.getElementById("name").value,
      phone: document.getElementById("phone").value,
    };

    // Texte lisible pour la prestation sélectionnée
    const massageText = form.querySelector(`#massage option[value="${formData.massage}"]`).textContent;

    // Vérification des champs
    if (!formData.massage || !formData.duration || !formData.date || !formData.timeslot || !formData.location || !formData.name || !formData.phone) {
      confirmation.innerHTML = `<p class="error-message">Veuillez remplir tous les champs.</p>`;
      return;
    }

    // Afficher un message pendant l'envoi
    confirmation.innerHTML = `<p>Envoi en cours...</p>`;

    // Envoi des données via EmailJS
    emailjs
      .send("service_fjzjevg", "template_k993hpd", formData) // Remplacez avec vos IDs EmailJS
      .then(() => {
        // Génération du message de confirmation avec <strong>
        confirmation.innerHTML = `
          <p style="color: green;">Votre réservation a été enregistrée avec succès :</p>
          <ul>
            <li><strong>Prestation :</strong> ${massageText}</li>
            <li><strong>Durée :</strong> ${formData.duration} minutes</li>
            <li><strong>Date :</strong> ${formData.date}</li>
            <li><strong>Heure :</strong> ${formData.timeslot}</li>
            <li><strong>Lieu :</strong> ${formData.location}</li>
            <li><strong>Nom :</strong> ${formData.name}</li>
            <li><strong>Téléphone :</strong> ${formData.phone}</li>
          </ul>
        `;
      })
      .catch((error) => {
        confirmation.innerHTML = `<p style="color: red;">Une erreur s'est produite. Veuillez réessayer.</p>`;
        console.error("Erreur EmailJS :", error);
      });
  });
});