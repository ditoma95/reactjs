import { Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import Home from "./components/pages/Home";
import TechnoAdd from "./components/pages/TechnoAdd";
import TechnoList from "./components/pages/TechnoList";
import { useState } from "react";

export default function App() {
  //creation d'une liste pour ajouter les objets
  const [technos, setTecnos] = useState([]);


  //comportements 
  function handleAddTechno(techno) {
    setTecnos([...technos, techno]);
  }

  return (
      <>
        <Menu/>
        <Routes>
          < Route path="/" element={<Home/>} />
          < Route path="/add" element={<TechnoAdd handleAddTechno={handleAddTechno} />} />
          < Route path="/list" element={<TechnoList technos={technos} />} />
        </Routes>
      </>
  )
} 