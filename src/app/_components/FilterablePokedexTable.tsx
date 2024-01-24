"use client"
import React, { useState } from 'react'
import PokemonTypeSelection from './PokemonTypeSelection'
import { api } from '~/trpc/react'
import { PokedexTable } from './PokedexTable'

const FilterablePokedexTable = () => {
    const [selectedType,setSelectType] = useState<string|undefined>("")
    const {data,refetch} = api.pokemon.getPokemonsByType.useQuery(selectedType? selectedType:"");

    if(selectedType && selectedType.length>0){
        refetch().catch((e:React.ErrorInfo)=>{
          console.log("Some error occured ",e);
        });
    }
  return (
    <>
        <PokemonTypeSelection selectedType={selectedType} selectType={setSelectType}/>
        {data &&
            <PokedexTable pokemons = {data}/>
        }

    </>
  )
}

export default FilterablePokedexTable