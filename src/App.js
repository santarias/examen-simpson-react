import Formulario from "./components/Formulario";
import ListadoPersonajes from "./components/ListadoPersonajes";

function App() {
  return (
    <>
      <div className="container">
        <header className="cabecera row">
          <h1 className="col">Personajes de Los Simpsons</h1>
        </header>
        <Formulario />
        <ListadoPersonajes />
      </div>
    </>
  );
}

export default App;
