import React from 'react'
import style from './Gamer.module.css'
const Gamer = ({ gamers }) => {
    return (
        <>
            {gamers.map((gamer, index) => {
                return <p key={index}>NAME: {gamer.name}    EMAIL: {gamer.email} </p>
            })}

        </>
    );
}
export default Gamer