<template>
  <div class="pokemon-card" @click="$router.push(`/${pokemon.name}`)">
    <div>
      <h2 class="title">
        {{ pokemon.name }}
      </h2>
    </div>
    <div>
      <img :src="pokemon.sprites.front_default ?? ''" />
    </div>
    <div v-if="singlePokemonRoute" class="details">
      <div class="abilitiesSection">

        <h3>
          Abilities:
        </h3>
        <div v-for="(ability, j) in pokemon.abilities" :key="j">

          <p class="abilityName">
            {{ ability.ability.name }}<span v-if="j < pokemon.abilities.length - 1">, </span>
          </p>
        </div>
      </div>
      <div>

        <h3>
          Height: {{ pokemon.height }}
        </h3>


        <h3>
          Weight: {{ pokemon.weight }}
        </h3>
      </div>
    </div>
    <!-- <div v-if="!singlePokemonRoute">
      <button >
        View
      </button>
    </div> -->

  </div>
</template>

<script setup lang="ts">
import { Pokemon } from "~/types/pokemon/pokemon"
const route = useRoute()
const singlePokemonRoute = route.params.name ?? false
console.log(singlePokemonRoute)
defineProps<{
  pokemon: Pokemon,
}>()

</script>

<style>
.title:first-letter {
  text-transform: uppercase;
}

.abilityName {
  padding: 3px;

}



.abilityName:first-letter {
  text-transform: uppercase;
}

.details {
  margin: 0.5rem;
  padding: 0.5rem;
}

img {
  width: 100%
}

button {
  margin: 0.5rem;
  padding: 0.5rem;
  padding-left: 1rem;
  padding-right: 1rem;
  border-radius: 0.4rem;
}

.abilitiesSection {
  display: flex;
  align-items: center;
}
</style>