import React, { useEffect, useState } from 'react'

export default function Pago({ productos,precio }) {

    useEffect(() => {
        setSub(Number(precioU * cantidad).toFixed(2))
        setDsc(Number((precioU * cantidad) * 0.05).toFixed(2))
        setTotal(Number(sub - dsc).toFixed(2))
    }
    )

    const nombre = productos.nombre

    const precioU = precio

    const [cantidad, setCantidad] = useState(1)

    const [dsc, setDsc] = useState(0)
    const [sub, setSub] = useState(0)
    const [total, setTotal] = useState(0)

    const capCantidad = ({ target }) => {

        setCantidad(target.value)

        setSub(Number(precioU * cantidad).toFixed(2))
        setDsc(Number((precioU * cantidad) * 0.05).toFixed(2))
        setTotal(Number(sub - dsc).toFixed(2))
    }


    return (

        <div className='bg-comercia-one min-h-screen lg:max-h-screen lg:grid lg:grid-cols-10'>

            <header className=' lg:col-span-3 lg:p-6 lg:h-screen'>
                <div className='flex justify-center lg:flex-col lg:items-center bg-black lg:h-full lg:m-1 '>
                    <img className='w-32 md:w-56 lg:w-96 p-4' src="logo.png" alt="" />

                    <div className='invisible absolute lg:flex lg:justify-center lg:items-center w-11/12 lg:relative lg:visible'>
                        <span className=' text-comercia-six text-[6vw] pt-20 lg:pt-10 xl:pt-14 2xl:pt-24 absolute font-monse font-bold'><i>5%</i> </span>
                        <img className='2xl:w-3/4' src="oferta.png" alt="oferta" />
                    </div>

                </div>
            </header>

            <div className='my-4 text-center lg:col-span-3 lg:flex lg:flex-col lg:justify-around'>
                <h1 className='text-white font-monse font-black text-2xl md:text-4xl lg:text-2xl xl:5xl 2xl:text-6xl 2xl:text-start'>{productos.nombre}</h1>
                {/* Inputs */}
                <form className='mt-5 p-4 text-white'>

                    <div className=' flex relative p-1 font-monse'>
                        <span className=' absolute top-2 lg:top-1 left-2'>Cantidad</span>
                        <input className='bg-gray-500 font-bold focus:text-xl focus:bg-slate-500 xl:pt-8  pl-4 pt-8 lg:pt-4 pb-1 w-full rounded-xl outline-0' type='number' name='txtCantidad' value={cantidad} onChange={capCantidad}  />
                    </div>

                    <div className=' flex relative p-1'>
                        <span className='lg:top-1 font-monse absolute top-2 left-2'>Precio(U)</span>
                        <input className='lg:pt-4 bg-gray-700  pl-4 pt-8 pb-1 w-full rounded-xl xl:pt-8 outline-0' value={precio} disabled type="text" />
                    </div>

                    <div className=' flex relative p-1'>
                        <span className='lg:top-1 font-monse absolute top-2 left-2'>Subtotal</span>
                        <input value={sub} className='lg:pt-4 bg-gray-700   pl-4 pt-8 pb-1 w-full rounded-xl xl:pt-8 outline-0' disabled type="text" />
                    </div>

                    <div className=' flex relative p-1'>
                        <span className='lg:top-1 font-monse absolute top-2 left-2'>Descuento</span>
                        <input value={dsc} className='lg:pt-4 bg-gray-700   pl-4 pt-8 pb-1 w-full rounded-xl xl:pt-8 outline-0' disabled type="text" />
                    </div>

                    <div className=' flex relative p-1 font-monse'>
                        <span className='lg:top-1  absolute top-2 left-2'>Nombres</span>
                        <input className='focus:text-xl lg:pt-4 bg-gray-500 focus:bg-slate-500  pl-4 pt-8 pb-1 xl:pt-8 w-full rounded-xl outline-0' type="text" />
                    </div>

                    <div className=' flex relative p-1 font-monse'>
                        <span className='lg:top-1  absolute top-2 left-2'>Correo</span>
                        <input className='focus:text-xl lg:pt-4 bg-gray-500 focus:bg-slate-500  pl-4 pt-8 pb-1 xl:pt-8 w-full rounded-xl outline-0' type="text" />
                    </div>

                    <div className=' flex relative p-1 font-monse'>
                        <span className='lg:top-1  absolute top-2 left-2'>Telefono</span>
                        <input className=' focus:text-xl lg:pt-4 bg-gray-500 focus:bg-slate-500  pl-4 pt-8 xl:pt-8 pb-1 w-full rounded-xl outline-0' type="text" />
                    </div>

                    <div className=' flex relative p-1 font-monse'>
                        <span className='lg:top-1  absolute top-2 left-2'>Despacho</span>
                        <input className='lg:pt-4   focus:text-xl bg-gray-500 focus:bg-slate-500  pl-4 pt-8 xl:pt-8 pb-1 w-full rounded-xl outline-0' type="text" />
                    </div>

                    <div className='lg:top-1  flex relative p-1 font-monse'>
                        <span className=' absolute top-2 left-2'>Direccion</span>
                        <input className='lg:pt-4 focus:text-xl bg-gray-500 focus:bg-slate-500  pl-4 pt-8 xl:pt-8 pb-1 w-full rounded-xl outline-0' type="text" />
                    </div>


                </form>


            </div>

            <div className='p-2 col-span-4 flex flex-col items-center mt-3'>
                <h1 className='text-3xl font-monse font-bold text-white'>Metodos de pago</h1>

                {/* Cuentas de banco */}
                <div className='flex flex-col justify-around h-full'>
                    <div className='p-2 rounded-xl grid grid-cols-12 grid-rows-3 w-full text-white bg-gray-600 mt-10 font-monse text-center lg:mt-2 lg:p-1 lg:text-sm'>
                        <div className='col-span-2 p-2 lg:p-0 xl:p-2'>CTA.CTE</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>DOLARES</div>
                        <div className='col-span-5 p-2 lg:p-0'>SOLES</div>

                        <div className='col-span-2 p-2 lg:p-0 xl:p-2'>BBVA</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>0011-0136-0200395441</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>0011-0136-0200395433
                        </div>

                        <div className='col-span-2 p-2 lg:p-0 xl:p-2'>BCP</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>191-2101081-1-50	</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>191-2103704-0-34
                        </div>
                    </div>

                    <div className='p-2 rounded-xl grid grid-cols-12 grid-rows-3 w-full text-white bg-gray-600 mt-10 font-monse text-center lg:mt-2 lg:p-1 lg:text-sm'>
                        <div className='col-span-2 p-2 lg:p-0 xl:p-2'>C.C.I</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>DOLARES</div>
                        <div className='col-span-5 p-2 lg:p-0 xl:p-2'>SOLES</div>

                        <div className='col-span-2 p-2 lg:p-0'>BBVA</div>
                        <div className='col-span-5 p-2 text-sm lg:p-0 xl:p-2'>011-136-000200395411-95</div>
                        <div className='col-span-5 p-2 text-sm lg:p-0 xl:p-2'>0011-136-000200395433-92

                        </div>

                        <div className='col-span-2 p-2 lg:p-0'>BCP</div>
                        <div className='col-span-5 p-2 text-sm lg:p-0 xl:p-2'>002-191-002101081150-59</div>
                        <div className='col-span-5 p-2 text-sm lg:p-0 xl:p-2'>002-191-002103704034-58
                        </div>
                    </div>

                    <div className='mt-10 text-4xl font-monse font-black flex flex-col items-center lg:mt-5'>
                        <span className='text-3xl 2xl:text-5xl text-gray-300'>TOTAL</span>
                        <span className='text-comercia-six my-2 2xl:text-6xl'>USD {total}</span>

                    </div>

                    <div className='my-4 text-center'>
                        <p className='text-lg text-white font-monse font-bold 2xl:text-xl px-2.5 lg:text-sm'>
                            Para mayor informacion llamar <span className='text-comercia-six'>987 765 123</span> ,o acercarse al
                            <span className='text-comercia-six'> pasaje Boulevar 192 2° piso - C.C.Centro Lima -Lima</span>
                        </p>
                    </div>
                </div>


            </div>

        </div>
    )
}
