import React from 'react'
import image from '../imgs/hello.svg'

const Header = ()=>(
    <header className="bg-blue-400">
        <div className="container mx-auto p-12 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1 ">
                    <h1 className="font-bold text-blue-900 text-6xl">Hola! Soy Diego</h1>
                    <p className="text-xl font-light py-5">Creo aplicaciones web</p>
                </div>
                <img src={image} alt="hombre saludando sentado en un escritorio" className="h-48" />
            </div>
            <div className="text-center pt-8 mt-5">
                <button className=" btn shadow rounded border p-2">
                    <a href="https://portafolio-diego-oviedo.netlify.app/#contact" target="black">Contactame</a>
                </button>
            </div>
        </div>
    </header>
)

export default Header;


