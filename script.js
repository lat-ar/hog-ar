document.querySelectorAll('.start-button').forEach(button => {
    button.addEventListener('touchstart', () => {
        button.classList.add('active');
    });
    button.addEventListener('touchend', () => {
        button.classList.remove('active');
    });
});

document.querySelector('.start-button').addEventListener('click', () => {
    window.location.href = 'instrucciones.html'; // Redirige a la página ins.html al hacer clic
});

const isInstagramWebView = navigator.userAgent.includes("Instagram");
  if (isInstagramWebView) {
    const message = "Para disfrutar de la experiencia de Realidad Aumentada completa, abre esta página en tu navegador Web.";
    alert(message);
  }