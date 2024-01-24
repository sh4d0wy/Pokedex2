import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const pokemonRouter = createTRPCRouter({
  getPokemon: publicProcedure
    .input(z.object({ name: z.string() }))
    .query(async ({ input }) => {
      const pokemon = await prisma.pokemon.findUnique({
        where: { name: input.name },
      });
      return pokemon;
    }),

  getPokemons: publicProcedure
    .input(z.array(z.string()))
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: { name: { in: input } },
      });
      return pokemons;
    }),

  getPokemonsByType: publicProcedure
    .input(z.string())
    .query(async ({ input }) => {
      const pokemons = await prisma.pokemon.findMany({
        where: { types: { has: input } },
      });
      return pokemons;
    }),
    getAllPokemons:publicProcedure
    .query(async()=>{
      const pokemons = await prisma.pokemon.findMany({});
      return pokemons;
    })

});

