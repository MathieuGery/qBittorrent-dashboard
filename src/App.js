import './App.css';
import React, { useState } from 'react';
import Header from "./partials/header";
import AddModal from "./partials/addModal";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

function App() {

    const [showModal, setShowModal] = useState(false)
    const [statsList, setStatsList] = useState([]);

  return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-200">
      <ToastContainer/>
        <Header statsList={statsList} setStatsList={setStatsList} setShowModal={setShowModal}/>
          <div>
              {statsList}
          </div>
          {showModal ? <AddModal setShowModal={setShowModal}/>:null}
    </div>
  );
}

export default App;
