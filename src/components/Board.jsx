import React, { useState } from 'react'
import PlayersInGame from './PlayersInGame';
const Board = (props) => {

  const arithmeticOperations = (action, num) => {
    let i = 0;
    props.setGamers(prevState => {
      const newState = prevState.map((obj, index) => {
        if (obj.isActive === true) {
          i = index
          switch (action) {
            case '+':
              {
                if ((Number(obj.number) + num === 100))
                  props.setGot100(true)
                return { ...obj, isActive: (props.gamers.length === 1) ? true : false, number: (Number(obj.number) + num), numSteps: obj.numSteps + 1 };
              }
            case '*':
              {
                if ((Number(obj.number) * num === 100))
                  props.setGot100(true)
                return { ...obj, isActive: (props.gamers.length === 1) ? true : false, number: Math.floor((Number(obj.number) * num)), numSteps: obj.numSteps + 1 };
              }
          }
        }
        if (i === props.gamers.length - 1) {
          i = -1
          index = 0;
        }
        if (index === i + 1 ) {
          return { ...obj, isActive: true };
        }
        return obj;
      });
      return newState;
    });
  };





  return (
    <>
      <div>
        <button disabled={props.got100} onClick={() => arithmeticOperations('+', 1)}>+1</button>
        <button disabled={props.got100} onClick={() => arithmeticOperations('+', -1)}>-1</button>
        <button disabled={props.got100} onClick={() => arithmeticOperations('*', 2)}>*2</button>
        <button disabled={props.got100} onClick={() => arithmeticOperations('*', 1 / 2)}>/2</button>
      </div>
      <PlayersInGame setTopPlayers={props.setTopPlayers}setAllPlayers={props.setAllPlayers} allPlayers={props.allPlayers} setGot100={props.setGot100} setGamers={props.setGamers} gamers={props.gamers}/>
    </>
  );
}
export default Board;