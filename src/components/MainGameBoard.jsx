import React, { useState } from 'react'
import PlayersGameBoard from './PlayersGameBoard/PlayersGameBoard';
const MainGameBoard = ({gamers, setGamers, setGot100, got100, setAllPlayers, setStartGame}) => {
  const arithmeticOperations = (action, num) => {
    let i = 0;
    let is100 = false;
    setGamers(prevState => {
      const newState = prevState.map((obj, index) => {
        if (obj.isActive === true) {
          i = index
          switch (action) {
            case '+':
              {
                if ((Number(obj.number) + num === 100)) {
                  setGot100(true)
                  is100 = true
                }
                return { ...obj, isActive: (gamers.length === 1 || is100 === true) ? true : false, number: (Number(obj.number) + num), numSteps: obj.numSteps + 1 };
              }
            case '*':
              {
                if ((Number(obj.number) * num === 100)) {
                  setGot100(true)
                  is100 = true
                }
                return { ...obj, isActive: (gamers.length === 1 || is100 === true) ? true : false, number: Math.floor((Number(obj.number) * num)), numSteps: obj.numSteps + 1 };
              }
          }
        }
        if (i === gamers.length - 1) {
          i = -1
          index = 0;
        }
        if (is100 === false && (index === i + 1)) {
          return { ...obj, isActive: true };
        }
        is100 = false
        return obj;
      });
      return newState;
    });

  };





  return (
    <>
      <div>
        <button disabled={got100} onClick={() => arithmeticOperations('+', 1)}>+1</button>
        <button disabled={got100} onClick={() => arithmeticOperations('+', -1)}>-1</button>
        <button disabled={got100} onClick={() => arithmeticOperations('*', 2)}>*2</button>
        <button disabled={got100} onClick={() => arithmeticOperations('*', 1 / 2)}>/2</button>
      </div>
      <PlayersGameBoard setStartGame={setStartGame} setAllPlayers={setAllPlayers}setGot100={setGot100} setGamers={setGamers} gamers={gamers} />
    </>
  );
}
export default MainGameBoard;