import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


export default function Banners({ setProducto, setIndicePro }) {

    const [datosBanner, setDatosBanner] = useState([])
    const [key, setKey] = useState(0)

    useEffect(() => {
        jalarBanner()
    }, [])

    const jalarBanner = () => {
        var url = 'https://comercializadora.apexmaicol.online/items/readBL.php'
        fetch(url)
            .then((res) => res.json())
            .then(res => {
                setDatosBanner(res)
            })
    }

    const jalarKey = (datosBanner) => {
        setKey(datosBanner.id)
        setProducto(datosBanner)
        setIndicePro(key)
    }


    return (

        <div className='bg-comercia-one h-full lg:h-screen lg:grid lg:grid-cols-7 text-center 2xl:grid-rows-2'>

            <header className='text-center lg:w-3/12 py-4 flex flex-col md:grid md:grid-cols-5 lg:flex lg:fixed h-full lg:pl-2 lg:justify-between'>

                <div className='md:col-span-5 lg:flex lg:text-start md:pb-8 p-2 2xl:justify-center'>
                    <h1 className='font-monse text-4xl lg:text-4xl  2xl:text-6xl xl:text-5xl lg:text-center text-white font-black'><i>BANNERS Y LONAS </i></h1>
                </div>

                <div className='flex justify-center md:col-span-2 '>
                    <img className='w-36 md:w-3/4 m-2 md:object-scale-down ' src="logo-ver.png" alt="logo" />
                </div>

                <div className='bg-comercia-six m-3 mx-2  rounded-lg md:col-span-3 p-1'>
                    <p className=' font-monse md:text-xl lg:text-sm font-black 2xl:text-2xl'>Contacte con nuestros vendedores</p>
                    <div className='font-bebas'>
                        <div className='bg-black text-white mx-4 my-2 rounded-lg py-1 text-3xl lg:text-2xl 2xl:text-4xl  flex justify-around'>
                            <span>ANA</span><span>981 088 648</span>
                        </div>
                        <div className='bg-black text-white mx-4 my-2 rounded-lg py-1 text-3xl lg:text-2xl 2xl:text-4xl  flex justify-around'>
                            <span>IRMA</span><span>946 538 947</span>
                        </div>
                        <div className='bg-black text-white mx-4 my-2 rounded-lg py-1 text-3xl lg:text-2xl 2xl:text-4xl flex justify-around'>
                            <span>ERICK</span><span>994 228 531</span>
                        </div>
                        <div className='bg-black text-white mx-4 my-2 rounded-lg py-1 text-3xl lg:text-2xl 2xl:text-4xl flex justify-around'>
                            <span>LUIS</span><span>941 559 140</span>
                        </div>
                    </div>

                </div>
            </header>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:col-span-5 lg:col-start-3 xl:grid-cols-3 2xl:grid-cols-4 lg:overflow-y-scroll 2xl:h-screen'>

                {
                    datosBanner.map(i => (
                        <Link to={'/producto'} key={i.id} onClick={() => { jalarKey(i) }} className='m-4 pb-1 bg-white flex flex-col items-center'>
                            <img src={"https://admincomercial.apexmaicol.online/imagenes/" + i.imagen} alt="" />
                            <div className='mt-1'>
                                <h1 className='font-monse font-bold text-2xl md:text-[1.7rem] xl:text-lg 2xl:text-2xl'>{i.nombre}</h1>
                                <span className='font-monse font-bold text-6xl md:text-6xl xl:text-5xl text-comercia-one'>$ {i.precio}</span>
                                <span className='block font-monse  text-comercia-one text-xs md:text-md xl:text-sm'>{i.size}</span>
                            </div>
                        </Link>
                    ))
                }

            </div>
        </div>
    )
}
