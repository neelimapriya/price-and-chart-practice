import "./App.css";
import LineChart from "./Components/LineChart/LineChart";
import Navbar from "./Components/Navbar/Navbar";
import PriceOption from "./Components/priceOptions/PriceOptions";

// import NavbarDaisy from "./Components/NavbarDaisy/NavbarDaisy";

function App() {
  return (
    <>
    <Navbar></Navbar>
    {/* <NavbarDaisy></NavbarDaisy> */}
      <h1 className="text-7xl bg-red-700">Vite + React</h1>
      <PriceOption></PriceOption>
      <LineChart></LineChart>

    
    </>
  );
}

export default App;
