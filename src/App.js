import './App.css';
import React, { useState } from 'react';
import Header from "./partials/header";
import Stats from "./partials/stats";

function App() {

    const [statsList, setStatsList] = useState([]);

  return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-200">
        <Header statsList={statsList} setStatsList={setStatsList}/>
          <div>
              {statsList}
          </div>
    </div>
  );
}

export default App;
