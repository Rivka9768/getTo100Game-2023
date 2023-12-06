import React from "react";
const Continue_QuitGame = (props) => {
    return (
        <>
            <button onClick={() => props.newGame(props.index)}>NEW GAME</button>
            <button onClick={() => props.quit(props.index)}>QUIT</button>
        </>
    );
}
export default Continue_QuitGame;