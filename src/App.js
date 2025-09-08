import "./App.css";
import NavBar from "./Components/NavBar";
import Home from "./Components/Home";
import Nosotros from "./Components/Nosotros";
import Planes from "./Components/Planes";
import Productos from "./Components/Productos";
import Marcas from "./Components/Marcas";
import Formulario from "./Components/Formulario";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="App">
      <Home />
      <NavBar />
      <Nosotros />
      <Productos />
      <Planes />
      <Marcas />
      <Formulario />
      <Footer />
    </div>
  );
}

export default App;
