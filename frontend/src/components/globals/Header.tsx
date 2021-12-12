import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
 
    <nav className="bg-white shadow-lg mb-5">

          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between">
                <div className="flex space-x-7">
                    <div>
                        
                        <Link to="/" className="flex items-center py-4 px-2">
                            <img src="https://awesomemotive.com/wp-content/themes/amthemenew/assets/images/am-logo-dark.svg" alt="Logo" className="h-8 w-8 mr-2"/>
                            <span className="font-semibold text-gray-500 text-lg"></span>
                        </Link>
                    </div>
                    <div className="hidden md:flex items-center space-x-1">
                        <Link to="/" className="py-4 px-2 text-green-500 border-b-4 border-green-500 font-semibold ">Home</Link>
                        <Link to="/about" className="py-4 px-2 text-gray-500 font-semibold hover:text-green-500 transition duration-300">About</Link>
                    </div>
                </div>
                <div className="hidden md:flex items-center space-x-3 ">
                    <Link to="/auth/login" className="py-2 px-2 font-medium text-gray-500 rounded hover:bg-green-500 hover:text-white transition duration-300">Log In</Link>
                    <Link to="/auth/signup" className="py-2 px-2 font-medium text-white bg-green-500 rounded hover:bg-green-400 transition duration-300">Sign Up</Link>
                </div>

            </div>
        </div>

		</nav>

    
  );
}

export default Header;
