import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [name, setName] = useState("")
  const [hp, setHP] = useState(0)
  const [furl, setFurl] = useState("")
  const [burl, setBurl] = useState("")

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={() => {
          const newPokemon = {
            name: name,
            hp: hp,
            sprites: {
              front: furl,
              back: burl 
            }
          }
          addPokemon(newPokemon)
        }}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={(e)=>setName(e.target.value)}/>
          <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={(e)=> setHP(e.target.value)}/>
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={furl}
            onChange={(e)=>setFurl(e.target.value)}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={burl}
            onChange={(e)=>setBurl(e.target.value)}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
