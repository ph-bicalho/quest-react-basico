function setColor() {
  const input = document.getElementById("color-picker");
  const textoMutavel = document.getElementById("texto-mutavel");

  textoMutavel.style.color = input.value;
}
function setAlert() {
  const btn = document.getElementById("btn");

  window.alert(`Nesse Botão está escrito '${btn.ariaLabel}'.`);
}

export { setColor, setAlert };
