import React, { useEffect, useState } from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon, search }) {

  const filteredPkmn = pokemon.filter((poki) => {
    return poki.name.toLowerCase().includes(search.toLowerCase())
  })

  const pkmnCards = filteredPkmn.map((poki) => {
    return <PokemonCard poki={poki} key={poki.id} />
  })

  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pkmnCards}
    </Card.Group>
  );
}

export default PokemonCollection;
