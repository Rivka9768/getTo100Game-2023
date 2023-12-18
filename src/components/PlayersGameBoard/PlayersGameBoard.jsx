import React from "react"
import styles from './PlayersGameBoard.module.css'
const PlayersGameBoard = ({setStartGame, setAllPlayers, setGot100, setGamers, gamers}) => {

    const updatePlayer = (i) => {
        setAllPlayers(players => players.map((player) => {
            if (player.email === gamers[i].email) {
                let sum = 0;
                player.score.map(i => {
                    sum += i
                })
                return { ...player, score: [...gamers[i].score, gamers[i].numSteps], avg: (sum + gamers[i].numSteps) / (player.score.length + 1) }
            }
            return player
        }))
    }

    const newGame = (i) => {
        updatePlayer(i)
        setGot100(false)
        setGamers(gamers.map((item, index) => {
            if (index === i) {
                let score_ = item.numSteps
                return { ...item, isActive: (gamers.length === 1) ? true : false, numSteps: 0, number: Math.floor(Math.random() * 100), score: [...item.score, score_] };
            }
            if (i === gamers.length - 1 && index === 0)
                return { ...item, isActive: true };
            if (index === i + 1) {
                return { ...item, isActive: true };
            }
            return item;
        }))

    }


    const quit = (i) => {
        updatePlayer(i)
        setGot100(false)
        const lengthGamers = gamers.length
        if (lengthGamers === 1) {
            setStartGame(false)
            setGamers([])
        } else {
            if (i === lengthGamers - 1) {
                const newGamers = [
                    { ...gamers[0], isActive: true },
                    ...gamers.slice(1, i),
                ];
                setGamers(newGamers);
            }
            else {
                const newGamers = [
                    ...gamers.slice(0, i),
                    { ...gamers[i + 1], isActive: true },
                    ...gamers.slice(i + 2)
                ];
                setGamers(newGamers);
            }
        }




    }
    return (
        <>
            <div className={styles.flexContainer}>
                {gamers.map((gamer, index) => {
                    return <div key={index} className={(gamer.isActive) ? styles.flexItemActive : styles.flexItem}>
                        NAME:  {gamer.name}<br />
                        EMAIL:   {gamer.email}<br />
                        SCORE:   {gamer.score.map(e => e + ',')} <br />
                        NUMBER: {gamer.number} <br />
                        STEPS:{gamer.numSteps}<br />
                        {(gamer.isActive) ? '✅' : '❌'}<br />
                        <div >{(gamer.number === 100) ? <div>   <button style={{ backgroundColor: 'green', color: 'white' }} onClick={() => newGame(index)}>NEW GAME</button> <button style={{ backgroundColor: 'red', color: 'white' }} onClick={() => quit(index)}>QUIT</button></div> : null}</div>

                    </div>

                })}
            </div>
        </>
    );

}
export default PlayersGameBoard;
