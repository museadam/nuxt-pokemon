<template>
  <div class="container">
    <section>

      <div class=" cardContainer ">
        <div class="card">
          <PokemonPokeCard :pokemon="pokemon" />
        </div>
      </div>

    </section>
  </div>
</template>

<script setup lang="ts">
const route = useRoute()
const pokemonSpecies = route.params.name
// console.log(pokemonSpecies)

const url = `https://pokeapi.co/api/v2/pokemon/${pokemonSpecies}`;
const pkmon = await fetchPokemon(url)
const pokemon = pkmon[0]
// console.log(pokemon)
</script>

<style>
.cardContainer {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}

.card {
  grid-column-start: 2;
}

section {
  margin: 1rem;

}
</style>