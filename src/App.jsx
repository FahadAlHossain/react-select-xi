import { useState } from 'react'
import Navbar from './Navbar/Navbar'
import Banner from './Banner/Banner'
import Players from './Players/Players';
import Subscribe from './Subscribe/Subscribe';

function App() {
  const [coin, setCoin] = useState(0);
  
  const handleCoin = () => {
    setCoin(coin + 5000);
  }


  return (
    <>
      <div className='w-2/3 mx-auto'>
        <Navbar coin={coin}></Navbar>
        <Banner handleCoin={handleCoin}></Banner>
        <Players coin={coin} setCoin={setCoin}></Players>
        <Subscribe></Subscribe>
      </div>
    </>
  )
}

export default App
