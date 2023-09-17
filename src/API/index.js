import axios from "axios";

export const httpPokemon = axios.create({
	baseURL: "https://pokeapi.co/api/v2/",
	headers: {
		"Content-Type": "application/json",
	},
});

export default {
	getPokemonGif() {
		return httpPokemon.get(
			"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-v/black-white/animated/132.gif"
		);
	},
};
