import React, { useState, useEffect } from 'react';

function Header() {

    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    return (
        <header
            className={`fixed w-full z-30 md:bg-opacity-90 transition bg-black duration-300 ease-in-out ${!top && 'bg-white blur shadow-lg'}`}>
            <div className="max-w-6xl mx-auto px-5 sm:px-6">
                <div className="flex items-center justify-between h-16 md:h-20">

                    {/* Site branding */}
                    <div className="flex-shrink-0 mr-4">
                        {/* Logo */}
                        <div className="block" aria-label="Cruip">
                            <h2 className="text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate">
                               Ygg dashboard
                            </h2>
                        </div>
                    </div>
                    <div class="md:flex md:items-center md:justify-between">
                        <div class="flex-1 min-w-0">
                        </div>
                        <div class="mt-4 flex md:mt-0 md:ml-4">
                            <button type="button"
                                    class="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                                    onClick={(e) => {window.location.href = 'https://www4.yggtorrent.li/'}}>
                                Ygg website
                            </button>
                            <button type="button"
                                    class="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                                Add
                            </button>
                        </div>
                    </div>


                    {/* Site navigation - Not Login*/}


                </div>
            </div>
        </header>
    );
}
export default Header;
