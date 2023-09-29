import type { Pokemon } from "~/types/pokemon/pokemon";

export const fetchPokemon = async (url: string) => {
  const data = {
    url,
  };
  const { pokemon }: { pokemon: Array<Pokemon> } = await $fetch(
    "/api/pokemon",
    {
      headers: { content: "application/json" },
      method: "post",
      body: data,
    }
  );
  return pokemon;
};
