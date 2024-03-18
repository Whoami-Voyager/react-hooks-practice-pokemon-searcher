import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({ poki }) {
  const [front, setFront] = useState(true)
  return (
    <Card>
      <div>
        <div className="image">
          <img alt="oh no!" src={front ? poki.sprites.front : poki.sprites.back} onClick={()=> setFront(!front)}/>
        </div>
        <div className="content">
          <div className="header">{poki.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {poki.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
