// Captura el formulario de reserva
document.addEventListener("DOMContentLoaded", function() {
    const reservationForm = document.querySelector("form.grid");

    reservationForm.addEventListener("submit", function(event) {
        event.preventDefault(); // Evita el envío del formulario por defecto

        // Captura los valores ingresados por el usuario
        let name = document.getElementById("name").value;
        let email = document.getElementById("email").value;
        let date = document.getElementById("date").value;
        let time = document.getElementById("time").value;

        // Verifica que los campos no estén vacíos
        if (name && email && date && time) {
            alert(`¡Gracias, ${name}! Tu reserva para el ${date} a las ${time} ha sido registrada. Te enviaremos un correo de confirmación a ${email}.`);
            reservationForm.reset(); // Limpia el formulario después del envío
        } else {
            alert("Por favor, completa todos los campos antes de reservar.");
        }
    });
});
