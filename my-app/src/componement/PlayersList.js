import React from "react";
import Player from "./Player"; 


 
 function PlayersList  ({players})   {
    return (
        <div style={{display:'flex', justifyContent:'space-around', flexWrap:'wrap', marginTop:'3%'}} className="mb-2">
              {players.map((el) => <Player key={el.id} player={el} />)}
        </div>
    )
 }
 export default PlayersList;