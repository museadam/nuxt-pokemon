<template>
  <div class="container">
    <section>
      <button @click="$router.push('/')">
        Back
      </button>
      <div class=" cardContainer ">

        <div class="card">
          <PokemonPokeCard :pokemon="pokemon" />
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/index'
const store = useStore()

const route = useRoute()
const pokemonName = route.params.name
// console.log(pokemonSpecies)
// let pkmon
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
const pkmon = await fetchPokemon(url)

// if (!store.currentIndex) {
//   pkmon = await fetchPokemon(url)
// } else {
//   if (store.pokemon[store.currentIndex].name !== pokemonName) {
//     pkmon = await fetchPokemon(url)
//   } else {
//     pkmon = store.pokemon[store.currentIndex]
//   }
// }
const pokemon = pkmon[0]
// console.log(pokemon)
</script>

<style>
.cardContainer {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
}

.card {
  grid-column-start: 2;
}

section {
  margin: 1rem;

}
</style>