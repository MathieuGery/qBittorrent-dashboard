import React, { useState, useEffect } from 'react';

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

    const addStatsComponent = () => {
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
                            onClick={() => {window.location.href = 'https://github.com/MathieuGery/qBittorrent-dashboard'}}>
                        <svg className="fill-current text-white" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/></svg>
                    </button>
                    <button type="button"
                            onClick={(e) => {e.preventDefault(); addStatsComponent(); props.setShowModal(true)}}
                            className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
                        Add Host
                    </button>
                </div>
            </div>
        </header>
    );
}
export default Header;
