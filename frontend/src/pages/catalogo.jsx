import React from 'react';
import Navbar from '../components/layout/navbar';
import Card from '../components/card';



function Catalogo() {
  return (
    <>
      <Navbar />
      <button>
      <div className='bg-miColor ml-[12rem] mt-[15rem] w-[15rem] h-[2.9rem] border-4 border-colorSec items-center'>
        <h1 className='text-navbarletras text-left '>F I L T R O S</h1>
        <div className='  ml-[13rem] flex-grow'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          </div>
      </div>
      </button>
      <div className='ml-[12rem] mt-[5rem] '>
        <Card/>
      </div>
    </>
  )
}

export default Catalogo;