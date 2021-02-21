import './App.css';
import Header from "./partials/header";
import Stats from "./partials/stats";

function App() {
  return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-200">
        <Header/>
        <Stats/>
        <Stats/>
        <Stats/>
    </div>
  );
}

export default App;
