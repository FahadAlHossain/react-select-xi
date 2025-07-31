import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Players from './Players/Players';

function App() {
  const [coin, setCoin] = useState(0);
  
  const handleCoin = () => {
    setCoin(coin + 5000);
  }
  // const handlePlayer = () => {
  //   if (coin >= 5000) {
  //     alert("player added");
  //   } else {
  //     alert("not enough coin");
  //   }
  // };


  return (
    <>
      <div className='w-2/3 mx-auto'>
        <Navbar coin={coin}></Navbar>
        <Banner handleCoin={handleCoin}></Banner>
        <Players coin={coin} setCoin={setCoin}></Players>
      </div>
    </>
  )
}

export default App
