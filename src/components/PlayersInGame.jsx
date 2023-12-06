import React from "react"
import styles from './PlayersInGame.module.css'
const PlayersInGame = (props) => {
    const updatePlayer = (i) => {
        props.setAllPlayers(players => players.map((player) => {
            if (player.email === props.gamers[i].email) {
                let sum = 0;
                player.score.map(i => {
                    sum += i
                })
                return { ...player, score: [...props.gamers[i].score, props.gamers[i].numSteps], avg: (sum + props.gamers[i].numSteps) / (player.score.length + 1) }
            }
            return player
        }))
    }
    const newGame = (i) => {
        updatePlayer(i)
        props.setGot100(false)
        props.setGamers(props.gamers.map((item, index) => {
            if (index === i) {
                let score_ = item.numSteps
                return { ...item, isActive: (props.gamers.length === 1) ? true : false, numSteps: 0, number: Math.floor(Math.random() * 100), score: [...item.score, score_] };
            }
            return item;
        }))

    }


    const quit = (i) => {
        updatePlayer(i)
        props.setGot100(false)
        const newGamers = [
            ...props.gamers.slice(0, i),
            ...props.gamers.slice(i + 1)
        ];
        props.setGamers(newGamers);

    }
    return (
        <>
            <div className={styles.flexContainer}>
                {props.gamers.map((gamer, index) => {
                    return <div key={index} className={(gamer.isActive)?styles.flexItemActive:styles.flexItem}>
                        NAME:  {gamer.name}<br/>
                        EMAIL:   {gamer.email}<br/>
                        SCORE:   {gamer.score.map(e => e + ',')} <br/>
                       
                         NUMBER: {gamer.number} <br/>
                        STEPS:{gamer.numSteps}<br/>
                        {(gamer.isActive) ? '✅' : '❌'}<br/>
                        <div >{(gamer.number === 100) ? <div>   <button style={{backgroundColor:'green' ,color:'white'}}onClick={() => newGame(index)}>NEW GAME</button> <button style={{backgroundColor:'red' ,color:'white'}}onClick={() => quit(index)}>QUIT</button></div> : null}</div>

                    </div>

                })}
            </div>
        </>
    );

}
export default PlayersInGame;
