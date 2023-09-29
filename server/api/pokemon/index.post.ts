import { defineEventHandler } from "h3";
import type {
  NamedAPIResourceList,
  NamedAPIResource,
} from "~/types/pokemon/poke-api";
import type { Pokemon } from "~/types/pokemon/pokemon";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { url } = body;

  const getPokemon: NamedAPIResourceList | NamedAPIResource = await $fetch(url);
  const getDetails = getPokemon.results ?? false;
  const pokemon: Array<Pokemon> = [];
  if (getDetails) {
    for (let i = 0; i < getDetails.length; i++) {
      const singlePoke: Pokemon = await $fetch(getDetails[i].url);
      pokemon.push(singlePoke);
    }
  } else {
    pokemon.push(getPokemon);
  }
  return {
    pokemon: pokemon,
  };
});
