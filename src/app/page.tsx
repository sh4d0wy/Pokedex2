import { api } from "~/trpc/server";
import { PokedexTable } from "./_components/PokedexTable";

export default async function Home() {
  let data1 = await api.pokemon.getAllPokemons.query();
  return ( 
    <>
    {data1 &&
      <PokedexTable pokemons={data1}/>
    }
    </>
  );
}

