const music = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");
let musicStarted = false;

const form = document.getElementById("cartaForm");
const missatge = document.getElementById("missatge");
const dataInput = document.getElementById("data");

const today = new Date();
const yyyy = today.getFullYear();
const mm = String(today.getMonth() + 1).padStart(2, "0");
const dd = String(today.getDate()).padStart(2, "0");
dataInput.min = `${yyyy}-${mm}-${dd}`;

const toggleMusic = () => {
  if (!musicStarted || music.paused) {
    music.volume = 0.3;
    music.play().catch(() => {});
    musicStarted = true;
    musicToggle.textContent = "Pausar cançó";
    return;
  }

  music.pause();
  musicToggle.textContent = "Reproduir cançó";
};

musicToggle.addEventListener("click", toggleMusic);

// Comença música amb el primer clic a la pàgina
window.addEventListener("click", () => {
  if (!musicStarted) {
    toggleMusic();
  }
}, { once: true });

form.addEventListener("submit", function(e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const data = document.getElementById("data").value;
  const assumpte = document.getElementById("assumpte").value.trim();
  const text = document.getElementById("text").value.trim();

  if (!email || !data || !text) {
    alert("Si us plau, completa tots els camps obligatoris.");
    return;
  }

  const formattedDate = new Date(data).toLocaleDateString("ca-ES", {
    year: "numeric",
    month: "long",
    day: "numeric"
  });

  missatge.innerText = `Perfecte! La teva carta s'enviarà el ${formattedDate}. En un següent pas, connectarem amb el servei d'enviament per fer-la arribar al teu email.`;

  console.log({
    email,
    data,
    assumpte,
    text
  });

  form.reset();
});
