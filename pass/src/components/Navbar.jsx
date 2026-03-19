import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-slate-800 text-white '>
            <div className="mycontainer flex justify-between items-center px-4 py-5 h-14">

                <div className="logo font-bold text-white text-2xl">
                    <span className='text-blue-500'> &lt;</span>
                   
                    <span>Pass</span><span className='text-blue-500'>Safe/&gt;</span>
                  
                    
                    </div>
                <a href="https://github.com/hkaushik14/js" target="_blank" rel="noopener noreferrer">
                <button className='text-white bg-blue-500 my-5 mx-2 rounded-full flex  justify-between items-center ring-white ring-1 hover:border-l'> 
                    <img className='invert  w-10 p-1' src="/icons/github.svg" alt="github logo" />
                    <span className='font-bold px-2'>GitHub</span>
                    
                </button>
                </a>
            </div>
        </nav>
    )
}

export default Navbar