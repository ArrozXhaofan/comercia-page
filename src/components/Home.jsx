import React from 'react'
import {Link} from 'react-router-dom'

export default function Home() {
  return (
    <div className="bg-black min-h-screen p-2 flex flex-col justify-around">

      <div className="flex justify-center mb-10 lg:mb-0">
        <img className="lg:h-96" src="logo.png" alt="logo" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 lg:px-4 gap-4 md:gap-6 font-bebas text-3xl">

        <div className="h-16 flex lg:h-20 justify-center">
          <Link to={'/banners-lona'} className="text-white bg-comercia-one w-[95%] rounded-lg flex justify-center items-center">
            BANNER - LONA
          </Link>
        </div>

        <div className="h-16 flex lg:h-20 justify-center">
          <Link to={'/viniles-laminados'} className="text-white bg-comercia-two w-[95%] rounded-lg flex justify-center items-center">
            VINILES Y LAMINADOS
          </Link>
        </div>

        <div className="h-16 flex lg:h-20 justify-center">
          <Link to={'/acrilicos'} className="text-white bg-comercia-three w-[95%] rounded-lg flex justify-center items-center">
            ACRÍLICOS - PVC -  FOAM - LEDS
          </Link>
        </div>

        <div className="h-16 flex lg:h-20 justify-center">
          <Link to={'/displays'} className="text-white bg-comercia-four w-[95%] rounded-lg flex justify-center items-center">
            DISPLAYS
          </Link>
        </div>

        <div className="h-16 flex lg:h-20 justify-center">
          <Link to={'/sublimacion'} className="text-white bg-comercia-five w-[95%] rounded-lg flex justify-center items-center">
            SUBLIMACIÓN
          </Link>
        </div>

        <div className="h-16 flex lg:h-20 justify-center">
          <Link to={'/dtf'} className="text-black bg-comercia-six w-[95%] rounded-lg flex justify-center items-center">
            DTF
          </Link>
        </div>
  
      </div>
      
    </div>
  )
}

