<template>
  <div class="pokemon-card">
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
          Abilities:&nbsp
        </h3>
        <div v-for="(ability, j) in pokemon.abilities" :key="j">

          <p>
            {{ ability.ability.name }}<span v-if="j < pokemon.abilities.length - 1">,&nbsp</span>
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

  </div>
</template>

<script setup lang="ts">
import { Pokemon } from '~/types/pokemon/pokemon';
defineProps<{
  pokemon: Pokemon
}>()
const route = useRoute()
const singlePokemonRoute = route.params.name ?? false
</script>

<style>
.title:first-letter {
  text-transform: uppercase;
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

.abilitiesSection {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>