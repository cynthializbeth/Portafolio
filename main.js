let welcome = document.getElementById('bienvenida');

let bienvenida = new Typewriter(welcome, {
  loop: true,
  delay: 75,
});

bienvenida
  .pauseFor(200)
  .typeString('<span class="bienvenida-texto">¡Bienvenido a mi portafolio !</span> 💖')
  .pauseFor(200)
  .deleteChars(20)
  .start();
