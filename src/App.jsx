import { useState } from "react";
import Navbar from "./Navbar/Navbar";
import Banner from "./Banner/Banner";
import Players from "./Players/Players";
import Subscribe from "./Subscribe/Subscribe";
import Footer from "./Footer/Footer";

function App() {
  const [coin, setCoin] = useState(0);

  const handleCoin = () => {
    setCoin(coin + 5000);
  };

  return (
    <>
      <div className="w-2/3 mx-auto">
        <Navbar coin={coin}></Navbar>
        <Banner handleCoin={handleCoin}></Banner>
        <Players coin={coin} setCoin={setCoin}></Players>
      </div>
      <Footer />
    </>
  );
}

export default App;
