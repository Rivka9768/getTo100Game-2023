import React from 'react'
const Gamer = ({ gamers }) => {
    return (
        <>
            {gamers.map((gamer, index) => {
                return <p key={index}>NAME: {gamer.name} EMAIL: {gamer.email} </p>
            })}

        </>
    );
}
export default Gamer