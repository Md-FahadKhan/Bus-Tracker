import "./index.css";
import Navbar from "./Components/Navbar.jsx";
import Home from "./Components/Home";
import Expert from "./Components/Expert";
import Newsletter from "./Components/Newsletter";
import Card from "./Components/Card";

function App() {
  return (
    <>
      <div>
        <Navbar />
        <Home />
        <Expert />
        <Newsletter />
        <Card />
      </div>
    </>
  );
}

export default App;
