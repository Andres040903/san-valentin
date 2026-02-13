const heartsContainer = document.querySelector(".hearts");
const btnYes = document.getElementById("btnYes");
const btnNo = document.getElementById("btnNo");
const msg = document.getElementById("msg");

// 1) Corazones flotando
function spawnHeart(){
  const heart = document.createElement("div");
  heart.className = "heart";
  heart.textContent = Math.random() > 0.5 ? "💗" : "💖";

  const left = Math.random() * 100; // vw
  const size = 14 + Math.random() * 26; // px
  const duration = 4 + Math.random() * 4; // s
  const drift = (Math.random() * 120 - 60).toFixed(0) + "px";

  heart.style.left = left + "vw";
  heart.style.fontSize = size + "px";
  heart.style.animationDuration = duration + "s";
  heart.style.setProperty("--drift", drift);

  heartsContainer.appendChild(heart);

  setTimeout(() => heart.remove(), duration * 1000);
}
setInterval(spawnHeart, 220);

// 2) Botón Sí
btnYes.addEventListener("click", () => {
  msg.textContent = "💘 Te amo muchísimo 🥺✨";
  for(let i=0;i<18;i++) setTimeout(spawnHeart, i*40);
});

// 3) Función para mover el botón No
function moveNo(e){
  e.preventDefault(); // evita que lo alcancen en móvil

  const dx = (Math.random() * 260 - 130);
  const dy = (Math.random() * 160 - 80);

  btnNo.style.transform = `translate(${dx}px, ${dy}px)`;
}

// PC (hover)
btnNo.addEventListener("mouseenter", moveNo);

// Celular (tap)
btnNo.addEventListener("touchstart", moveNo);

// Si logran hacer click igual
btnNo.addEventListener("click", (e) => {
  e.preventDefault();
  moveNo(e);
  msg.textContent = "Como que no tssssss :c 😠";
});
