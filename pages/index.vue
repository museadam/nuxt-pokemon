<template>
  <div class="container">
    <div class="searchContainer">
      <input class="search" id="search" type="text" v-model="searchTerm" placeholder="Enter a pokemon name..."
        @input="searchPokemon" />
    </div>
    <div v-if="pokemon">
      <div class="cards ">
        <div v-for="(poke, i) in pokemon" :key="i">
          <PokemonPokeCard :pokemon="poke" />
        </div>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">

const url = `https://pokeapi.co/api/v2/pokemon?limit=60&offset=0`;
const pokemonStatic = await fetchPokemon(url)
let pokemon = reactive(pokemonStatic)
let searchTerm = ref('')

const searchPokemon = () => {
  pokemon = searchByName(searchTerm, pokemonStatic)
}

</script>

<style>
.cards {
  display: grid;
  grid-template-columns: repeat(6, minmax(0, 1fr));
  gap: 1rem;
}

.searchContainer {
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 2rem;
}

.search {
  grid-column-start: 2;
}
</style>
