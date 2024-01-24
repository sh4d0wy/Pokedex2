"use client";
import React from "react";
import { useState } from "react";
import { PokedexTable } from "../_components/PokedexTable";
import {
  Autocomplete,
  Box,
  Button,
  Chip,
  CircularProgress,
  Stack,
  TextField,
} from "@mui/material";
import { red } from "@mui/material/colors";
import SearchIcon from "@mui/icons-material/Search";
import { api } from "~/trpc/react";
import { PokemonRow } from "../_components/PokemonRow";
import { BounceLoader } from "react-spinners";

const Namepage = () => {
  let pokemon;
  const [value, setValue] = useState<string[]>(["Bulbasaur"]);
  const [query, setQuery] = useState([""]);

  const handleClick = () => {
    setQuery(value);
  };
  
  if (query[0] != undefined && query.length === 1) {
    pokemon = api.pokemon.getPokemon.useQuery({ name: query[0] });
  } else {
    pokemon = api.pokemon.getPokemons.useQuery(query);
  }
  const data1 = pokemon.data;

  console.log(value);
  return (
    <>
      <Stack
        spacing={2}
        direction={{ md: "row", xs: "column" }}
        alignItems="center"
        mt={3}
      >
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
                key={index}
                sx={{
                  bgcolor: "light-grey",
                  color: "black",
                  fontSize: {
                    xs: 15,
                  },
                  height: {
                    xs: 30,
                  },
                  width: {
                    xs: 90,
                    md: 120,
                  },
                }}
              />
            ))
          }
          sx={{
            width: {
              md: 400,
              sx: 600,
              xs: 230,
            },
            mt: 3,
            p: 0,
          }}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Search By Name"
              sx={{
                p: 0,
                fieldset: {
                  borderRadius: 10,
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
            borderRadius: 10,
            bgcolor: red[200],
            boxShadow: `2px 5px 10px ${red[500]}`,
            "&:hover": {
              bgcolor: red[400],
            },
            maxHeight: 50,
          }}
        >
          Search
          <SearchIcon />
        </Button>
      </Stack>

      <Box component="div" my={10}>
        {data1 &&
          (!Array.isArray(data1) ? (
            <PokemonRow {...data1} />
          ) : (
            <PokedexTable pokemons={data1} />
          ))}
      </Box>
    </>
  );
};
export default Namepage;

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
  "Golem",
];

