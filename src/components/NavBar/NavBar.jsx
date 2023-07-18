import React from 'react';
import logo from "../../assets/image/logo.png"
const NavBar = () => {
    const Menus=<>
    
    <li> <a href="" className='text-white text-lg'> Home</a></li>
    <li> <a href="" className='text-white text-lg'> About</a></li>
    <li> <a href="" className='text-white text-lg'> Contact</a></li>
    <li> <a href="" className='text-white text-lg'> Team</a></li>
    <li> <a href="" className='text-white text-lg'> Product</a></li>
    
    
    </>
    return (
        <div className=' bg-green-600 flex justify-between items-center py-3 gap-10 px-5 rounded-md'>
            <div className='w-2/12'>
                <img className='w-full h-10' src={logo} alt="" />
            </div>
            <div className='w-8/12'>
              <ul className='flex gap-5'>
                {Menus}
              </ul>
            </div>
            <div className='w-2/12'>
                search
            </div>

        </div>
    );
};

export default NavBar;