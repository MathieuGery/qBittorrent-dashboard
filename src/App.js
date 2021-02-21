import './App.css';
import Header from "./partials/header";
import Stats from "./partials/stats";

function App() {
  return (
      <div className="flex flex-col min-h-screen overflow-hidden bg-gray-200">
        <Header/>
        <Stats account={"First account"}/>
        <Stats account={"Second account"}/>
        <Stats account={"Third account"}/>
    </div>
  );
}

export default App;
