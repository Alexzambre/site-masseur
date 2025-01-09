document.addEventListener("DOMContentLoaded", () => {
  console.log("DOM entièrement chargé et analysé."); // Vérification que le DOM est prêt
  const form = document.getElementById("booking-form");
  const confirmation = document.getElementById("confirmation");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la soumission classique du formulaire
    console.log("Formulaire soumis."); // Log à chaque soumission
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
    console.log("Données récupérées :", formData);
    
    // Texte lisible pour la prestation sélectionnée
    const massageText = form.querySelector(`#massage option[value="${formData.massage}"]`).textContent;

    // Vérification des champs
    if (!formData.massage || !formData.duration || !formData.date || !formData.timeslot || !formData.location || !formData.name || !formData.phone) {
      console.warn("Certains champs sont manquants.");
      confirmation.innerHTML = `<p class="error-message">Veuillez remplir tous les champs.</p>`;
      return;
    }
    
    // Afficher un message pendant l'envoi
    confirmation.innerHTML = `<p>Envoi en cours...</p>`;
    console.log("Tentative d'envoi des données via EmailJS...");
    
    // Envoi des données via EmailJS
    emailjs
      .send("service_fjzjevg", "template_k993hpd", formData) // Remplacez avec vos IDs EmailJS
      .then(() => {
        console.log("Email envoyé avec succès."); // Log de succès
        // Génération du message de confirmation avec <strong>
        confirmation.innerHTML = `
          <p style="color: green;">Votre r&eacute;servation a &eacute;t&eacute; enregistr&eacute;e avec succ&eacute;s !</p>
          <ul>
            <li><strong>Prestation :</strong> ${massageText}</li>
            <li><strong>Dur&eacute;e :</strong> ${formData.duration} minutes</li>
            <li><strong>Date :</strong> ${formData.date}</li>
            <li><strong>Heure :</strong> ${formData.timeslot}</li>
            <li><strong>Lieu :</strong> ${formData.location}</li>
            <li><strong>Nom :</strong> ${formData.name}</li>
            <li><strong>T&eacute;l&eacute;phone :</strong> ${formData.phone}</li>
          </ul>
        `;
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        confirmation.innerHTML = `<p style="color: red;">Une erreur s'est produite. Veuillez r&eacute;essayer.</p>`;
      });
  });
});
