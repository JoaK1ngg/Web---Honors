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

document.getElementById("apiButton").onclick = async () => {
  const res = await fetch("https://api.chucknorris.io/jokes/random");
  const data = await res.json();
  document.getElementById("apiResult").textContent = data.value;
};