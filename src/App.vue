<template>
	<div id="app">
		<img
			src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"
			alt="pokemon_gif"
			class="pokemon_gif"
		/>
		<img class="pokedex" src="./Img/pokedex.png" alt="pokedex" />
	</div>
</template>

<script>
export default {
	mounted() {
		this.ObterPokemonsGif;
	},
	methods: {
		ObterPokemonsGif(url) {
			API.getPokemonGif(url)
				.then((res) => {
					this.open = true;
					this.pokemonSelecionado = res.data;
				})
				.catch((erro) => {});
		},
	},
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxanium:wght@200&display=swap");

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Oxanium", cursive;
}

body {
	text-align: center;
	background: #2980b9; /* fallback for old browsers */
	background: -webkit-linear-gradient(
		to right,
		#ffffff,
		#6dd5fa,
		#2980b9
	); /* Chrome 10-25, Safari 5.1-6 */
	background: linear-gradient(
		to right,
		#ffffff,
		#6dd5fa,
		#2980b9
	); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

#app {
	display: inline-block;
	margin-top: 2%;
	padding: 15px;
	position: relative;
}

.pokedex {
	width: 100%;
	max-width: 425px;
}

.pokemon_gif {
	position: absolute;
	bottom: 55%;
	left: 50%;
	transform: translate(-63%, 20%);
	height: 15%;
}
</style>
