//components/Header.js
// import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Header = () => {
  return (
    <div className="flex items-center justify-center py-6">
       <Link to="/" className="flex items-center flex-shrink-0 cursor-pointer">
        <img className="h-10 w-10 mr-2 hover:scale-110 " src={logo} alt="logo" />
        <span className="text-xl tracking-tight hover:scale-110">VirtualR</span>
      </Link> 
     
        
        
      
    </div>
  );
};

export default Header;

