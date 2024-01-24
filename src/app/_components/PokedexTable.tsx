import { Box, Stack } from "@mui/material";
import React from "react";
import { PokemonRow } from "./PokemonRow";
// import { api } from "~/trpc/server";

type Pokemon = {
    id: number;
    name: string;
    types: string[];
    sprite:string
  }
  type PokemonList = {
    pokemons:Pokemon[];
  };

export const PokedexTable:React.FC<PokemonList> = ({pokemons}) => {
  
  // const pokemon = api.pokemon.getPokemon.query({name:"Bulbasaur"})
  // const pokemons = api.pokemon.getPokemons.query(["Bulbasaur","Charmander"]);

  return (
    <>
      <Box sx={{
        display:"flex",
        alignItems:"center",
        justifyContent:"center",
        gap:4,
        flexWrap:"wrap",
        maxHeight:"100vh",
        maxWidth:"90vw",
        py:5
      }}>
        {pokemons.map((pokemon,index) => {
          return (
            <>
              <PokemonRow key={index} {...pokemon}/>
            </>
          );
        })}
    </Box>
    </>
  );
};
