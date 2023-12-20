import React from "react";
import style from './TopGamers.module.css'
const TopGamers = ({ allPlayers }) => {
    return (
        <> <h3>OUR THREE TOP PLAYERS:</h3>
            <div className={style.TopGamersDiv}>

                <table>
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>EMAIL</th>
                            <th>AVERAGE SCORE</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(((allPlayers).sort((p1, p2) => {
                            return p1.avg - p2.avg;
                        })).filter((topPlayer) => topPlayer.avg > 0)).slice(0, 3).map((topPlayer, index) => {
                            return <tr key={index}>
                                <td>{topPlayer.name}</td><td>{topPlayer.email}</td><td>{topPlayer.avg.toFixed(1)}</td>
                            </tr>
                        })}
                    </tbody>
                </table>
            </div>

        </>
    );
}
export default TopGamers;
