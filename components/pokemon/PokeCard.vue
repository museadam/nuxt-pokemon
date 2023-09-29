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
      <button  @click="$router.push(`/${pokemon.name}`)>
        View
      </button>
    </div> -->
  </div>
</template>

<script setup lang="ts">
import { useStore } from '~/stores/index'
import { Pokemon } from '~/types/pokemon/pokemon';
defineProps<{
  pokemon: Pokemon,
  index?: Number
}>()
// const poke = ref(pokemon)
const store = useStore()
const route = useRoute()
const singlePokemonRoute = route.params.name ?? false

// function handleClick(i, poke) {
//   store.$state.currentIndex = i
//   route.push(`/${poke.name}`)
// }
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



.abilitiesSection {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
</style>