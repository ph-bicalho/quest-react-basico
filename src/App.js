import "./App.css";
import ButtonFrustrante from "./components/button/button";
import ColorSelector from "./components/color-selector/color-selector";

function App() {
  return (
    <>
      <div className="App">
        <h1 id="texto-mutavel"> Mude a cor desse texto!!</h1>
        <ColorSelector />

        <ButtonFrustrante />
      </div>
    </>
  );
}

window.setTimeout(() => {
  const textoMutavel = document.getElementById("texto-mutavel");

  textoMutavel.innerText = textoMutavel.innerText.toUpperCase();
}, 1);

export default App;
