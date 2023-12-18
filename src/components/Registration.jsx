import React, { useState } from 'react'
import { GoPersonAdd } from "react-icons/go";
import { FcStart } from "react-icons/fc";
const Registration = ({startGame, setStartGame, gamers, setGamers, allPlayers, setAllPlayers}) => {
    const [addGamer, setAddGamer] = useState(false);
    const addToPlayers = (event) => {
        event.preventDefault();
        let startScore = [];
        const [name, email] = event.target
        if (localStorage.getItem('allPlayers')) {
            const previousPlayers = JSON.parse(localStorage.getItem('allPlayers'));
            const player = previousPlayers.find((player) => player.email === event.target[1].value)
            if (player) {
                if (player.name !== event.target[0].value) {
                    alert("inncorrect detailes")
                    return
                }
                else
                    startScore = player.score
            }
            else
                setAllPlayers([...allPlayers, { name: name.value, email: email.value, score: [], avg: 0 }])
        }
        else
            setAllPlayers([...allPlayers, { name: name.value, email: email.value, score: [], avg: 0 }])
        localStorage.setItem('allPlayers', JSON.stringify(allPlayers));
        setGamers(prevGamers => [...prevGamers, { name: name.value, email: email.value, score: startScore, number: Math.floor(Math.random() * 100), isActive: false, numSteps: 0 }])
        setAddGamer(!addGamer)
    }

    const start = () => {
        setStartGame(!startGame)
        if (!gamers.length) {
            setStartGame(startGame)
            alert("can not start game with no participants")
            return
        }
        setGamers(prevGamers => [
            { ...prevGamers[0], isActive: true },
            ...prevGamers.slice(1)
        ]);

    }
    return (
        <>
            {!startGame && <button onClick={() => setAddGamer(!addGamer)}><GoPersonAdd />  ADD GAMER </button>}
            {!startGame && <button onClick={start}> <FcStart />   START GAME </button>}
            {!startGame && addGamer && <form onSubmit={addToPlayers}>
                <input required type="text" placeholder='NAME' />
                <input required type="email" name="" id="" placeholder='EMAIL ADDRESS' />
                <button type="submit">REGISTER</button>
            </form>}


        </>
    );
}

export default Registration;
