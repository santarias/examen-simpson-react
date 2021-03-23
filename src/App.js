import Formulario from "./components/Formulario";
import ListadoPersonajes from "./components/ListadoPersonajes";
import personajes from "./personajes.json";
import GeneralContext from "./contexts/GeneralContext";

function App() {
  return (
    <>
      <GeneralContext.Provider value={personajes}>
        <div className="container">
          <header className="cabecera row">
            <h1 className="col">Personajes de Los Simpsons</h1>
          </header>
          <Formulario />
          <ListadoPersonajes />
        </div>
      </GeneralContext.Provider>
    </>
  );
}

export default App;
