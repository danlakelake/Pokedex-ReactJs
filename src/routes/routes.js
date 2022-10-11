import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "../App";
import PokemonInfo from "../components/PokemonPopUp";

const RoutesWindows = () => {
  function CreateRoutes() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/info_pokemon" element={<PokemonInfo />} />
          </Routes>
        </BrowserRouter>
      );
    } else {
      return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/info_pokemon" element={<PokemonInfo />} />
          </Routes>
        </HashRouter>
      );
    }
  }
  return CreateRoutes();
};

export default RoutesWindows;
