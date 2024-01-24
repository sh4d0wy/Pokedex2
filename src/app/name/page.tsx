"use client"
import React from "react";
import { useState } from "react";
import { PokedexTable } from "../_components/PokedexTable";
import { Autocomplete, Box, Button, Chip, Stack, TextField } from "@mui/material";
import {red} from "@mui/material/colors"
import SearchIcon from '@mui/icons-material/Search';
import { api } from "~/trpc/react";
// import { getPokemon } from "../utils/getPokemon";
import { PokemonRow } from "../_components/PokemonRow";
import { useMutation, useQuery } from "react-query";
   
const page = () => {
  const [value, setValue] = useState<string[]>(["Bulbasaur"]);
  const [query, setQuery] = useState([""]);
  const handleClick = ()=>{
    setQuery(value);
  }
  let pokemon;
  if(query[0]!=undefined && query.length===1){
        console.log("object hu naukar nhi")
      pokemon =  api.pokemon.getPokemon.useQuery({name:query[0]});
  }else{
    pokemon =  api.pokemon.getPokemons.useQuery(query);

  }
  const data1 = pokemon.data;
  console.log(value);
  return (
    <>
      <Stack spacing={2} direction="row" mt={3}>
        <Autocomplete
          multiple
          id="fixed-tags-demo"
          value={value}
          onChange={(event, newValue) => {
            setValue([...newValue]);
          }}
          options={data}
          getOptionLabel={(option) => (option ? option : "")}
          renderTags={(tagValue, getTagProps) =>
            tagValue.map((option, index) => (
              <Chip
                label={option}
                {...getTagProps({ index })}
              />
            ))
          }
          sx={{
            width: {
              md: 400,
              sx: 200,
            },
            mt: 3,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search By Name"
              placeholder="Type Names"
              sx={{
                fieldset: {
                  borderRadius: 10,
                //   bgcolor:"white",
                  border: "none",
                  boxShadow: "2px 2px 10px #0000003c",
                  color: "red",
                },
                label: {
                  fontWeight: "700",
                  fontSize: "1rem",
                },
              }}
            />
          )}
        />
        <Button
            variant="contained"
            onClick={handleClick}
            sx={{
                borderRadius:10,
                bgcolor:red[200],
                boxShadow:`2px 5px 10px ${red[300]}`,
                "&:hover":{
                    bgcolor:red[400],
                },
                maxHeight:50
            }} 
        >
            <SearchIcon/>
        </Button>
      </Stack>
      <Box 
        component="div"
        my={10}
        >
            {data1&&(
              !Array.isArray(data1)?(
                <PokemonRow {...data1}/>
              ):<PokedexTable pokemons={data1}/>
            )
            }
        </Box>
    </>
  );
};
export default page;

const data = [
    "Bulbasaur",
    "Charmander",
    "Squirtle",
    "Pikachu",
    "Growlithe",
    "Psyduck",
    "Geodude",
    "Magikarp",
    "Venusaur",
    "Charmeleon",
    "Wartortle",
    "Raichu",
    "Arcanine",
    "Golduck",
    "Golem"
  ];
  
  console.log(data);
  