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
              <a href="#razas" className="hover:text-pink-600 font-medium">Razas</a>
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
              <a href="#razas" className="block px-2 py-1 hover:bg-pink-100 rounded">Razas</a>
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
        <div className="flex items-center justify-center shadow-2xl">
            <img src="./images/slyder.jpg" alt="" className=""/>
        </div>
      </div>
      <div className="m-20"></div>
      
      <div id="razas" className="flex flex-col md:flex-row md:flex-wrap">
          <div className="bg-pink-200 p-7 md:basis-3/5 lg:basis-1/2 xl:basis-1/2 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/persa.webp" alt="gato persa" />
            </div>
            <p className="text-2xl font-bold">Persa</p>
              <p>El gato Persa es una raza de tamaño mediano reconocida por su largo pelaje sedoso y su cara aplanada. Tiene un temperamento tranquilo y afectuoso, ideal para hogares serenos. Su peso oscila entre los 3.5 y 7 kilogramos, y su esperanza de vida está entre los 12 y 17 años. Requiere cuidados constantes de su pelaje, incluyendo cepillado diario.
              </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-2/5 lg:basis-1/2 xl:basis-1/2 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/siames.avif" alt="gato siames" />
            </div>
            <p className="text-2xl font-bold">Siamés</p>
              <p>El Siamés es un gato elegante y delgado, de pelaje claro con puntos oscuros en las extremidades y ojos azules muy expresivos. Es una raza sociable, vocal y muy cercana a sus dueños. Pesa entre 2.5 y 5.5 kilogramos y puede vivir entre 15 y 20 años. Es ideal para quienes buscan un gato activo y conversador.
              </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-2/5 lg:basis-1/3 xl:basis-1/3 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/maineCoon.jpg" alt="gato maine coon" />
            </div>
            <p className="text-2xl font-bold">Maine Coon</p>
              <p>El Maine Coon es una de las razas de gatos más grandes del mundo. Tiene un cuerpo musculoso, pelaje largo y espeso, y una personalidad amigable y juguetona. Los machos pueden pesar entre 6 y 8 kilogramos, mientras que las hembras rondan los 4.5 a 6 kilogramos. Su esperanza de vida es de 12 a 15 años y necesita espacio y cepillado regular.
              </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-3/5 lg:basis-1/3 xl:basis-1/3 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/bengali.webp" alt="gato bengalí" />
            </div>
            <p className="text-2xl font-bold">Bengalí</p>
              <p>El gato Bengalí se caracteriza por su pelaje exótico, similar al de un leopardo, y su alta energía. Es un felino curioso, inteligente y muy activo, que disfruta de juegos y desafíos. Su peso va de los 4.5 a los 7 kilogramos, y puede vivir entre 12 y 16 años. Requiere estimulación constante para mantenerse feliz.
              </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-3/5 lg:basis-1/3 xl:basis-1/3 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/esfinge.webp" alt="gato esfinge o sphynx" />
            </div>
            <p className="text-2xl font-bold">Sphynx o Esfinge</p>
              <p>El Sphynx, o gato Esfinge, es conocido por su apariencia única sin pelo, piel arrugada y cuerpo cálido al tacto. Es un gato extrovertido, sociable y muy cariñoso. Pesa entre 3.5 y 7 kilogramos y su esperanza de vida está entre los 6 y 8 años. Necesita baños frecuentes para mantener su piel limpia y saludable.
              </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-2/5 lg:basis-1/2 xl:basis-1/2 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/ragdoll.jpg" alt=" gato ragdoll" />
            </div>
            <p className="text-2xl font-bold">Ragdoll</p>           
              <p>El Ragdoll es un gato grande, de ojos azules intensos y pelaje semilargo. Se caracteriza por su docilidad y su tendencia a relajarse completamente cuando lo cargan. Los machos pueden pesar entre 6 y 9 kilogramos, y las hembras entre 4.5 y 7 kilogramos. Su esperanza de vida está entre los 10 y 15 años, y requiere cepillado regular.
              </p>            
          </div>
          <div className="bg-pink-200 p-7 md:basis-2/5 lg:basis-1/2 xl:basis-1/2 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/britanicoPCorto.jpg" alt="gato britanico de pelo corto" />
            </div>
            <p className="text-2xl font-bold">Britanico</p>
            <p>El Británico de Pelo Corto es un gato robusto y compacto, con pelaje denso y suave. Tiene un carácter calmado y reservado, pero es muy leal con su familia. Pesa entre 4 y 9 kilogramos y vive entre 12 y 17 años. Es propenso a ganar peso, por lo que necesita una dieta equilibrada y algo de ejercicio.
            </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-3/5 lg:basis-1/3 xl:basis-1/3 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/scottishFold.jpg" alt="gato scottish fold" />
            </div>
            <p className="text-2xl font-bold">Scottish Fold</p>
            <p>El Scottish Fold se distingue por sus orejas dobladas hacia adelante, que le dan una apariencia muy tierna. Es un gato de tamaño mediano, tranquilo y afectuoso. Su peso oscila entre 2.7 y 6 kilogramos y su esperanza de vida está entre los 9 y 12 años. Puede presentar problemas articulares, por lo que requiere revisiones veterinarias periódicas.
            </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-3/5 lg:basis-1/3 xl:basis-1/3 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/gatoAzulRuso.avif" alt="gato azul ruso" />
            </div>
            <p className="text-2xl font-bold">Azul Ruso</p>
            <p>El Azul Ruso es un gato elegante de pelaje corto gris plateado y ojos verdes. Es reservado con los desconocidos pero muy apegado a sus dueños. Pesa entre 3.5 y 5.5 kilogramos y vive entre 10 y 15 años. Es ideal para hogares tranquilos y se adapta bien a vivir en interiores.
            </p>
          </div>
          <div className="bg-pink-200 p-7 md:basis-2/5 lg:basis-1/3 xl:basis-1/3 rounded-sm">
            <div className="flex justify-center">
            <img className="rounded-xl" src="images/mestizo.jpg" alt="gato mestizo" />
            </div>
            <p className="text-2xl font-bold">Mestizo</p>
            <p>El gato mestizo, también conocido como gato común, es el más frecuente en Colombia y en muchos otros países. Presenta una gran variedad de colores, patrones y personalidades. Su peso va de los 3 a los 5.5 kilogramos y puede vivir entre 12 y 18 años. Gracias a su diversidad genética, suele ser muy saludable y adaptable a distintos tipos de hogar.
            </p>
          </div>
      </div>
    </>
  )
}