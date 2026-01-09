const music = document.getElementById("bgMusic");
let musicStarted = false;

// Comença música amb el primer clic
document.addEventListener("click", () => {
  if (!musicStarted) {
    music.volume = 0.3;
    music.play().catch(() => {});
    musicStarted = true;
  }
});

const form = document.getElementById("cartaForm");
const missatge = document.getElementById("missatge");

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value;
  const data = document.getElementById("data").value;
  const assumpte = document.getElementById("assumpte").value;
  const text = document.getElementById("text").value;

  if(!email || !data || !text) {
    alert("Si us plau, completa tots els camps.");
    return;
  }

  // Missatge de confirmació
  missatge.innerText = `Carta preparada per enviar el ${data}. En un pas posterior, connectarem amb el servei d'enviament per enviar-la automàticament al teu email.`;

  console.log({
    email: email,
    data: data,
    assumpte: assumpte,
    text: text
  });

  // Aquí és on posteriorment s'hauria de connectar amb EmailJS o backend
});
