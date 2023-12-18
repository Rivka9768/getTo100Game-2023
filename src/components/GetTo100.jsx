import { useState } from 'react'
import { useEffect } from 'react';
import Registration from './Registration'
import MainGameBoard from './MainGameBoard'
import TopGamers from './TopGamers/TopGamers'
import Gamer from './Gamer'

function GetTo100() {
  const [startGame, setStartGame] = useState(false);
  const [gamers, setGamers] = useState([])
  const [got100, setGot100] = useState(false)
  const [allPlayers, setAllPlayers] = useState((localStorage.getItem("allPlayers")) ? JSON.parse(localStorage.getItem("allPlayers")) : [])
  useEffect(() => {
    localStorage.setItem('allPlayers', JSON.stringify(allPlayers));
  }, [allPlayers]);

  return (
    <>

      {startGame && <TopGamers allPlayers={allPlayers} />}
      <h1>GET TO 💯<span style={{ fontSize: '12px' }}>© Tzivia & Rivka</span></h1>
      <Registration startGame={startGame} setStartGame={setStartGame} gamers={gamers} setGamers={setGamers} allPlayers={allPlayers} setAllPlayers={setAllPlayers} />
      {!startGame && <Gamer gamers={gamers} />}
      {startGame &&  <MainGameBoard gamers={gamers} setGamers={setGamers} setGot100={setGot100} got100={got100} setAllPlayers={setAllPlayers} setStartGame={setStartGame} />}

    </>
  )
}

export default GetTo100