import React from 'react'

const Navbar = () => {
    return (
        <header className="text-gray-600 body-font bg-slate-900">
            <div className="container mx-auto flex flex-wrap p-3 flex-col md:flex-row items-center">

            <span className="ml-3 text-xl font-bold text-gray-100">&lt;SecurePass /&gt;</span>
                <nav className="md:ml-auto flex flex-wrap  items-center text-base justify-center">
                    <a href='/' className="hover:cursor-pointer mr-5 text-gray-200 hover:text-gray-400">Home</a>
                    <a href='/' className="hover:cursor-pointer mr-5 text-gray-200 hover:text-gray-400">About</a>
                    <a href='/' className="hover:cursor-pointer mr-5 text-gray-200 hover:text-gray-400">Contact</a>
                    <a href='/' className="hover:cursor-pointer mr-5 text-gray-200 hover:text-gray-400">Services</a>
                </nav>

            </div>
        </header>
    )
}

export default Navbar
