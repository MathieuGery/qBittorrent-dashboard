import './App.css';
import React, { useState } from 'react';
import Header from "./partials/header";

function App() {

    const [statsList, setStatsList] = useState([]);

  return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-200">
        <Header statsList={statsList} setStatsList={setStatsList} modal={setShowModal}/>
          <div>
              {statsList}
          </div>
          <button type="button"
                  onClick={(e) => {e.preventDefault();}}
                  className="ml-3 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-500 hover:bg-indigo-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-indigo-500">
              Add
          </button>
    </div>
  );
}

export default App;
