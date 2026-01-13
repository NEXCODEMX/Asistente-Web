let fotos = [];
let currentSlide = 1;
const slide1 = document.getElementById("slide1");
const slide2 = document.getElementById("slide2");
const powerButton = document.getElementById("powerButton");
fetch("fotos.json")
  .then(res => res.json())
  .then(data => {
    fotos = data;
    iniciarSlideshow();
  });
function elegirFoto() {
  const randomIndex = Math.floor(Math.random() * fotos.length);
  return `FotosMarie/${fotos[randomIndex]}`;
}
function precargarImagen(src, callback) {
  const img = new Image();
  img.src = src;
  img.onload = () => callback(src);
}
function iniciarSlideshow() {
  precargarImagen(elegirFoto(), (src) => {
    slide1.style.backgroundImage = `url('${src}')`;
    slide1.classList.add("active");
  });
  setInterval(() => {
    const nuevaFoto = elegirFoto();
    precargarImagen(nuevaFoto, (src) => {
      if (currentSlide === 1) {
        slide2.style.backgroundImage = `url('${src}')`;
        slide2.classList.add("active");
        slide1.classList.remove("active");
        currentSlide = 2;
      } else {
        slide1.style.backgroundImage = `url('${src}')`;
        slide1.classList.add("active");
        slide2.classList.remove("active");
        currentSlide = 1;
      }
    });
  }, 3000);
}
let botonVisible = false;
document.body.addEventListener("click", () => {
  botonVisible = !botonVisible;
  powerButton.style.display = botonVisible ? "block" : "none";
});
