import React, { useState } from "react";
import { Menu, X } from "lucide-react";


export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return(
    <>
      <div>
        <nav className="bg-gray-200 shadow-md px-4 py-3">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="text-xl font-bold text-pink-600">🐈 ColCat</div>
            <div className="hidden md:flex items-center space-x-6">
              <a href="#" className="hover:text-pink-600 font-medium">Inicio</a>
              <a href="#" className="hover:text-pink-600 font-medium">Razas</a>
              <a href="#" className="hover:text-pink-600 font-medium">Beneficios</a>
              <a href="#" className="hover:text-pink-600 font-medium">Datos Curiosos</a>
              <input
                type="text"
                placeholder="Buscar..."
                className="ml-4 px-3 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
            <div className="md:hidden">
              <button onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {menuOpen && (
            <div className="md:hidden mt-2 space-y-2">
              <a href="#" className="block px-2 py-1 hover:bg-pink-100 rounded">Inicio</a>
              <a href="#" className="block px-2 py-1 hover:bg-pink-100 rounded">Razas</a>
              <a href="#" className="block px-2 py-1 hover:bg-pink-100 rounded">Beneficios</a>
              <a href="#" className="block px-2 py-1 hover:bg-pink-100 rounded">Datos Curiosos</a>
              <input
                type="text"
                placeholder="Buscar..."
                className="w-full mt-1 px-3 py-1 border rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-pink-300"
              />
            </div>
          )}
        </nav>
      </div>
      <div className="bg-gray-200">
        <div className="">
          <h1 className="text-4xl font-bold text-pink-500 text-center">Bienvenido a ColCat</h1>
          <p className="text-2xl font-medium text-pink-500 text-center">En esta página aprenderás todo sobre los gatos ya sea porque quieras adoptar uno o simplemente para pasar el aburrimiento</p>
        </div>
        <div className="flex items-center justify-center ">
            <img src="images/slyder.jpg" alt="" className=""/>
        </div>
      </div>
    </>
  )
}