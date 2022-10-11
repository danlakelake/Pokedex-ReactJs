import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import App from "../App";

const RoutesWindows = () => {
  function CreateRoutes() {
    if (!process.env.NODE_ENV || process.env.NODE_ENV === "development") {
      return (
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/info_pokemon" element={<p>Info pokemon</p>} />
          </Routes>
        </BrowserRouter>
      );
    } else {
      return (
        <HashRouter>
          <Routes>
            <Route path="/" element={<p>index</p>} />
            <Route path="/info_pokemon" element={<p>Info pokemon</p>} />
          </Routes>
        </HashRouter>
      );
    }
  }
  return CreateRoutes();
};

export default RoutesWindows;
