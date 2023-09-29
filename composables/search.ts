import { Pokemon } from "~/types/pokemon/pokemon";

export const searchByName = (query: Ref<string>, pokemon: Array<Pokemon>) => {
  if (query.value === "") {
    return pokemon;
  }
  return pokemon.filter((item) => item.name.includes(query.value));
};
