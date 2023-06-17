import React from 'react';
import { Link } from 'react-router-dom';


const Navigator = () => {
    return (

        <nav className='fixed top-0 left-0 bg-white w-full shadow'>
            <div className='container m-auto flex justify-between items-center text-gray-700'>
                <h1 className='pl-8 py-4 text-xl font-bold'>
                    Smart Aviation
                </h1>
                <ul className='hidden md:flex items-center pr-10 text-base font-semibold cursor-pointer'>
                    <li className='hover:bg-gray-200 py-4 px-6'><Link to="/">Home</Link></li>
                    <li className='hover:bg-gray-200 py-4 px-6'><Link to="/services">Services</Link></li>
                    <li className='hover:bg-gray-200 py-4 px-6'><Link to="/about">About</Link></li>
                </ul>
                <button className='block sm:hidden py-3 px-4 mx-2 rounded focus:outline-none hover:bg-gray-200 group'>
                    <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                    <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                    <div className='w-5 h-1 bg-gray-600 mb-1'></div>
                    <div className='absolute top-0 -right-full h-screen w-8/12 bg-white border opacity-0 group-focus:right-0 group-focus:opacity-100 transition-all duration-300'>
                        <ul className='flex flex-col items-center w-full text-base cursor-pointer pt-10'>
                        <li className='hover:bg-gray-200 py-4 px-6 w-full'><Link to="/about">About</Link></li>
                        <li className='hover:bg-gray-200 py-4 px-6 w-full'><Link to="/services">services</Link></li>
                         <li className='hover:bg-gray-200 py-4 px-6 w-full'>Services</li>
                        </ul>
                    </div>

                </button>

            </div>
        </nav>
 
    );
};

export default Navigator;