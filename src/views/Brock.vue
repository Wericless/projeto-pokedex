<template>
	<div v-if="pokemon" id="app">
		<img :src="pokemon.imageUrl" :alt="pokemon.name" class="pokemon_gif" />
		<img class="pokedex" src="../Img/pokedex.png" alt="pokedex" />
		<h1 class="pokemon_data">
			<span class="pokemon_name">{{ pokemon.name }}</span>
		</h1>
		<button @click="getPreviousPokemon" class="button1">Anterior</button>
		<button @click="getNextPokemon">Próximo</button>
	</div>
</template>

<script>
export default {
	data() {
		return {
			pokemonList: [95, 74, 42, 185, 37, 453], // Lista dos IDs dos Pokémon de sua escolha
			pokemon: null,
			currentPokemonIndex: 0,
		};
	},
	computed: {
		// Gere a URL da imagem do Pokémon com base no ID atual
		imageUrl() {
			return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/${
				this.pokemonList[this.currentPokemonIndex]
			}.gif`;
		},
	},
	mounted() {
		this.getPokemon(this.pokemonList[this.currentPokemonIndex]);
	},
	methods: {
		async getPokemon(id) {
			// Faça uma chamada à API para obter os dados do Pokémon com o ID fornecido
			const response = await fetch(
				`https://pokeapi.co/api/v2/pokemon/${id}`
			);
			const data = await response.json();
			this.pokemon = {
				name: data.name,
				imageUrl: this.imageUrl,
			};
		},
		getNextPokemon() {
			// Obtém o próximo Pokémon da lista
			if (this.currentPokemonIndex < this.pokemonList.length - 1) {
				this.currentPokemonIndex++;
				this.getPokemon(this.pokemonList[this.currentPokemonIndex]);
			}
		},
		getPreviousPokemon() {
			// Obtém o Pokémon anterior da lista
			if (this.currentPokemonIndex > 0) {
				this.currentPokemonIndex--;
				this.getPokemon(this.pokemonList[this.currentPokemonIndex]);
			}
		},
	},
};
</script>
<style scoped></style>
