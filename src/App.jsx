import { useState } from 'react'
import Home from './components/Home'
import {Routes, Route} from 'react-router-dom'
import Banners from './components/Banners'
import Producto from './components/Producto'
import Pago from './components/Pago'
import Viniles from './components/Viniles'
import Acrilicos from './components/Acrilicos'
import Displays from './components/Displays'
import Sublimacion from './components/Sublimacion'
import DTF from './components/DTF'

function App() {

  const [productos,setProducto] = useState([])
  const [indicePro,setIndicePro] = useState([])

  const[precio,setPrecio] = useState(500)

  //const precio = productos.precio 
    

  return (
    <Routes>

      <Route path='/' element= {<Home/>} />

      <Route path='/banners-lona' element= {<Banners setProducto={setProducto} setIndicePro={setIndicePro} productos={productos}  />} />

      <Route path='/viniles-laminados' element= {<Viniles setProducto={setProducto} setIndicePro={setIndicePro} productos={productos}/>} />

      <Route path='/acrilicos' element= {<Acrilicos setProducto={setProducto} setIndicePro={setIndicePro} productos={productos}/>} />

      <Route path='/displays' element= {<Displays setProducto={setProducto} setIndicePro={setIndicePro} productos={productos}/>} />

      <Route path='/sublimacion' element= {<Sublimacion setProducto={setProducto} setIndicePro={setIndicePro} productos={productos}/>} />

      <Route path='/dtf' element= {<DTF setProducto={setProducto} setIndicePro={setIndicePro} productos={productos}/>} />

      <Route path='/producto' element= {<Producto productos={productos} setPrecio={setPrecio}/>} />
      <Route path='/pago' element= {<Pago productos={productos} precio={precio} />} />

    </Routes>
  )
}

export default App
