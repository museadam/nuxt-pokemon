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
const route = useRoute()
const pokemonName = route.params.name
const url = `https://pokeapi.co/api/v2/pokemon/${pokemonName}`;
const pkmon = await fetchPokemon(url)
const pokemon = pkmon[0]
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

@media (max-width: 620px) {
  .cardContainer {
    grid-template-columns: repeat(1, minmax(0, 1fr));

  }

  .card {
    grid-column-start: 1;
  }
}
</style>