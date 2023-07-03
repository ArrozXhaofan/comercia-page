import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function Producto({ productos,setPrecio }) {

    useEffect(() => {
        capturarPrecios()
    }, [])

    const [precios, setPrecios] = useState([])

    const enviarPrecio = (item) => {
        setPrecio(item.precio)
        console.log(item.precio)
    }

    const capturarPrecios = () => {

        let indice = { id: productos.id }

        let url = 'https://comercializadora.apexmaicol.online/items/precios.php'
        const peticion =
        {
            method: 'POST',
            body: JSON.stringify(indice)
        }

        fetch(url, peticion)
            .then((res) => res.json())
            .then(res => {

                setPrecios(res)
                //console.log(productos)
            })
    }

    return (
        <div className='bg-comercia-one min-h-screen lg:grid lg:grid-cols-10 2xl:max-h-screen'>

            <header className=' lg:col-span-3 lg:p-6'>
                <div className='flex justify-center lg:flex-col lg:items-center bg-black lg:h-full lg:m-1 '>
                    <img className='w-32 md:w-56 lg:w-96 p-4' src="logo.png" alt="" />

                    <div className='invisible absolute lg:flex lg:justify-center lg:items-center w-11/12 lg:relative lg:visible'>
                        <span className=' text-comercia-six text-[6vw] pt-20 lg:pt-10 xl:pt-14 2xl:pt-24 absolute font-monse font-bold'><i>5%</i> </span>
                        <img className='2xl:w-3/4' src="oferta.png" alt="oferta" />
                    </div>

                </div>
            </header>

            <div className='my-4 text-center lg:col-span-3 lg:flex lg:flex-col lg:justify-around'>
                <h1 className='text-white font-monse font-black text-2xl md:text-4xl lg:text-4xl xl:text-5xl lg:text-start 2xl:text-7xl 2xl:text-left'>{productos.nombre}</h1>
                {/* Prices */}
                <div className='flex flex-col font-black  my-10 items-center gap-4 md:grid md:grid-cols-2 lg:grid-cols-1'>
                    
                    {
                        precios.map(item => (
                            <div className='flex justify-center text-xs font-monse 2xl:justify-start' key={item.id}>
                                <Link onClick={()=>{enviarPrecio(item)}} to={'/pago'} className='text-black bg-comercia-six grid grid-cols-10 w-[90%] lg:w-full 2xl:w-[80%] p-1  rounded-full'>
                                    <div className='col-span-7'>
                                        <p className='font-bold'>{item.categoria}  {item.fize}</p>
                                        <span className='text-4xl font-monse text-comercia-one'>$ {Number(item.precio).toFixed(2)}</span>
                                    </div>
 
                                    <div className='flex justify-start items-center col-span-2'>
                                        <img className='w-16' src="car.png" alt="" />
                                    </div>
                                </Link>
                            </div>
                        ))
                    }



                </div>

                <div className='grid grid-cols-2 2xl:grid-cols-4'>
                    <div className='p-3 flex justify-center'>
                        <button className='bg-black rounded-2xl flex flex-col items-center justify-around p-3 gap-3 h-40'>
                            <img className='h-14' src="btn1.png" alt="" />
                            <p className='font-bold text-sm text-white'> <i>TARJETA DE CREDITO O EFECTIVO</i></p>
                        </button>
                    </div>

                    <div className='p-3  flex justify-center'>
                        <button className='bg-black rounded-2xl flex flex-col items-center justify-around p-3 gap-3 h-40'>
                            <img className='h-14' src="camion.png" alt="" />
                            <p className='font-bold text-sm text-white'> <i>SERVICIO DE TRANSPORTE</i></p>
                        </button>
                    </div>
                </div>


            </div>

            <div className='p-2 col-span-4 2xl:col-span-3 flex justify-center 2xl:justify-start items-center mt-3'>
                <img className='h-56 md:h-96' src={"https://admincomercial.apexmaicol.online/imagenes/" + productos.imagen} alt="" />
            </div>

        </div>

    )
}
