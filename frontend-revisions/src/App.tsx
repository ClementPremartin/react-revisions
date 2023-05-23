import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/NavBar/Navbar";
import Countries from "./pages/Countries/Countries";
import Country from "./pages/Country/Country";
import Continents from "./pages/Continents/Continents";
import { CONTINENTS, COUNTRIES, COUNTRY } from "./path";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path={COUNTRIES} element={<Countries />} />
        <Route path={COUNTRY} element={<Country />} />
        <Route path={CONTINENTS} element={<Continents />} />
      </Routes>
    </>
  );
}

export default App;

