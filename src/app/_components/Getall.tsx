"use client"
import React from 'react'
import { api } from '~/trpc/react'
import { PokedexTable } from './PokedexTable';

const Getall = () => {
    const pokemons = api.pokemon.getAllPokemons.useQuery();
    const data = pokemons.data;
  return (
    <>
    {data && (
        <PokedexTable pokemons={data}/>
    )
    }
    </>
  )
}

export default Getall