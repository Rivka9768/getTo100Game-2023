import React from "react";
import style from './TopGamers.module.css'
const TopGamers = ({allPlayers}) => {
    return (
        <>
            <div className={style.TopGamersDiv}>
                <table>
                    <tr>
                        <th>NAME</th>
                        <th>EMAIL</th>
                        <th>AVERAGE SCORE</th>
                    </tr>
                    {(((allPlayers).sort((p1, p2) => {
                        return p1.avg - p2.avg;
                    })).filter((topPlayer) => topPlayer.avg > 0)).slice(0, 3).map((topPlayer, index) => {
                        return <tr key={index}>
                            <td>{topPlayer.name}</td>  <td>{topPlayer.email}</td>  <td>{topPlayer.avg.toFixed(1)}</td>
                        </tr>
                    })}
                </table>
            </div>

        </>
    );
}
export default TopGamers;