import type { Pokemon } from "~/types/pokemon/pokemon";

export const fetchPokemon = async (url: string) => {
  /* Get the response from the server endpoint */
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
  // console.log(pokemon);

  return pokemon;
};
