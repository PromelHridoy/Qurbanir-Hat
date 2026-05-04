import Link from 'next/link';
import React from 'react';

const NotFound = () => {
    return (
        <div className="h-[80vh] flex flex-col justify-center items-center space-y-6 px-4 text-center"> 
          
            <h1 className="text-9xl font-extrabold text-green-600 opacity-20">404</h1>
            
            <div className="space-y-2">
                <h2 className='text-green-900 text-3xl md:text-4xl font-bold'>Oops! Page Not Found</h2>
                <p className='text-gray-500 max-w-sm mx-auto'>
                    The page you are looking for might have been removed or is temporarily unavailable.
                </p>
            </div>

            <Link href="/">
                <button className="btn btn-success text-white px-8 shadow-lg hover:scale-105 transition-transform">
                    Back to Home
                </button>
            </Link>
        </div>
    );
};

export default NotFound;