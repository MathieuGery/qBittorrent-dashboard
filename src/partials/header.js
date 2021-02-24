import React, { useState, useEffect } from 'react';
import Stats from "./stats";

function Header(props) {

    const [top, setTop] = useState(true);

    // detect whether user has scrolled the page down by 10px
    useEffect(() => {
        const scrollHandler = () => {
            window.pageYOffset > 10 ? setTop(false) : setTop(true)
        };
        window.addEventListener('scroll', scrollHandler);
        return () => window.removeEventListener('scroll', scrollHandler);
    }, [top]);

    const addStatsComponent = event => {
        //props.setStatsList(props.statsList.concat(<Stats/>));
    };

    return (
        <header
            className={`relative z-30 md:bg-opacity-90 transition mt-2 mx-20 bg-black duration-300 ease-in-out rounded-xl ${!top && 'bg-white blur shadow-lg'}`}>
            <div className="md:flex md:items-center md:justify-between h-4/5 md:h-20">
                <div className="flex-1 min-w-0 ml-10 mt-4 md:mt-0">
                    <h2 className={`text-2xl font-bold leading-7 text-white sm:text-3xl sm:truncate ${!top && 'text-black'}`}>
                        qBittorrent dashboard
                    </h2>
                </div>
                <div className="mt-4 mb-4 md:mb-0 ml-4 flex md:mt-0 md:ml-4 mr-9">
                    <button type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-gray-600 hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500"
                            onClick={() => {window.location.href = 'https://www4.yggtorrent.li/'}}>
                        Ygg website
                    </button>
                    <button type="button"
                            onClick={(e) => {e.preventDefault(); addStatsComponent(); props.setShowModal(true)}}
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        Add
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
