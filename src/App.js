import './App.css';
import React, { useState } from 'react';
import Header from "./partials/header";
import AddModal from "./partials/addModal";

function App() {

    const [showModal, setShowModal] = useState(false)
    const [statsList, setStatsList] = useState([]);

  return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-200">
        <Header statsList={statsList} setStatsList={setStatsList} setShowModal={setShowModal}/>
          <div>
              {statsList}
          </div>
          {showModal ? <AddModal setShowModal={setShowModal}/>:null}
    </div>
  );
}

export default App;
