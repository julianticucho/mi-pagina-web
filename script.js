// Seleccionar todos los recuadros
const boxes = document.querySelectorAll('.box');
// Seleccionar todas las informaciones
const infos = document.querySelectorAll('.info');
// Crear un overlay para el fondo oscuro
const overlay = document.createElement('div');
overlay.classList.add('overlay');
document.body.appendChild(overlay);

// Función para mostrar la información
function showInfo(target) {
  // Ocultar todas las informaciones primero
  infos.forEach(info => info.style.display = 'none');
  // Mostrar la información correspondiente
  const info = document.getElementById(target);
  info.style.display = 'block';
  // Mostrar el overlay
  overlay.style.display = 'block';
}

// Función para cerrar la información
function closeInfo() {
  infos.forEach(info => info.style.display = 'none');
  overlay.style.display = 'none';
}

// Agregar evento de clic a los recuadros
boxes.forEach(box => {
  box.addEventListener('click', () => {
    const target = box.getAttribute('data-target');
    showInfo(target);
  });
});

// Agregar evento de clic a los botones de cerrar
document.querySelectorAll('.close-btn').forEach(button => {
  button.addEventListener('click', closeInfo);
});

// Cerrar la información al hacer clic fuera de ella
overlay.addEventListener('click', closeInfo);