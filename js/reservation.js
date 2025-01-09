document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("booking-form");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // Empêche la soumission classique du formulaire

    // Récupération des données du formulaire
    const formData = {
      massage: document.getElementById("massage").value,
      duration: document.getElementById("duration").value,
      date: document.getElementById("date").value,
      time: document.getElementById("time").value,
    };

    // Envoi des données via EmailJS
    emailjs
      .send("service_fjzjevg", "template_k993hpd", formData)
      .then(() => {
        alert("Votre réservation a été envoyée avec succès !");
      })
      .catch((error) => {
        console.error("Erreur EmailJS :", error);
        alert("Une erreur s'est produite. Veuillez réessayer.");
      });
  });
});
