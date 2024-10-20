/* eslint-disable no-unused-vars */
import React from 'react';

const Navber = () => {
    return (
        <div>
            <nav className='flex justify-between w-11/12 mx-auto shadow-md p-10 items-center'>
                <div>
                    <h1 className='text-4xl text-gray-700 font-bold'>All Country</h1>
                </div>
                <div>
                    <ul className='flex text-md text-gray-700 font-semibold'>
                        <li className='px-2'>Home</li>
                        <li className='px-2'>About</li>
                        <li className='px-2'>blog</li>
                        <li className='px-2'>Support</li>
                    </ul>
                </div>
                <div className='flex text-xl text-gray-700 font-semibold'>
                    <button className='mx-2 px-5 py-2 border-2 rounded-lg'>Log In</button>
                    <button className='mx-2 px-5 py-2 border-2 rounded-lg'>Sing Up</button>
                </div>
            </nav>
        </div>
    );
};

export default Navber;