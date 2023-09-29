import { defineStore } from "pinia";
import { Pokemon } from "~/types/pokemon/pokemon";

export const useStore = defineStore("pokemon", {
  state: () => {
    return {
      pokemon: [] as Array<Pokemon>,
      currentIndex: null as Number | null,
    };
  },
});
