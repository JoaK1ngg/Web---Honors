document.getElementById("darkToggle").onclick = () => {
  document.body.classList.toggle("dark-mode");
};


document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  document.getElementById("loginMessage").textContent = "Accediendo a Wiki de Brainrot...";
  setTimeout(() => {
    window.location.href = "https://en.namu.wiki/w/Italian%20Brainrot/등장%20캐릭터";
  }, 1000);
});

async function fetchData() {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  document.getElementById("apiResult").textContent = data.value;
}


    document.getElementById("toggle-dark").addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
    });

    document.getElementById("contactForm").addEventListener("submit", async (e) => {
      e.preventDefault();
      const nombre = document.getElementById("nombre").value;
      const email = document.getElementById("email").value;
      const mensaje = document.getElementById("mensaje").value;

      const response = await fetch("http://localhost:3000/contacto", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email, mensaje })
      });

      if (response.ok) {
        document.getElementById("contactoMensaje").textContent = "Mensaje enviado con éxito.";
      } else {
        document.getElementById("contactoMensaje").textContent = "Error al enviar el mensaje.";
      }
    });