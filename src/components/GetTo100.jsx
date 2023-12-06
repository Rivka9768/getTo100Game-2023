import { useState } from 'react'
import { useEffect } from 'react';
import Registration from './Registration'
import Board from './Board'
import TopGamers from './TopGamers'
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
      {startGame && <Board gamers={gamers} setGamers={setGamers} allPlayers={allPlayers} setGot100={setGot100} got100={got100} setAllPlayers={setAllPlayers} />}

    </>
  )
}

export default GetTo100