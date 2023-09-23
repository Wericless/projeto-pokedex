<template>
	<router-link to="/ash">Ash</router-link> |
	<router-link to="/misty">Misty</router-link> |
	<router-link to="/brock">Brock</router-link>
	<router-view />
</template>

<script>
export default {};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Oxanium:wght@200&display=swap");

.router {
	position: relative;
	text-align: center;
	width: 100%;
	transform: translate(-63%, 20%);
}

* {
	margin: 0;
	padding: 0;
	box-sizing: border-box;
	font-family: "Oxanium", cursive;
}

body {
	text-align: center;
	background: #2980b9;
	background: -webkit-linear-gradient(to right, #ffffff, #6dd5fa, #2980b9);
	background: linear-gradient(to right, #ffffff, #6dd5fa, #2980b9);
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
.pokemon_data {
	position: absolute;
	font-weight: 600;
	color: #aaa;
	top: 54.5%;
	left: 45%;
	font-size: clamp(7px, 5vw, 25px);
}

.pokemon_name {
	color: #3a444d;
	text-transform: capitalize;
}
button {
	position: absolute;
	color: white;
	background-color: #3a444d;
	bottom: 20%;
	left: 65%;
	transform: translate(-63%, 20%);
	border-radius: 4px;
	height: 7%;
	width: 30%;
	font-size: clamp(3px, 3vw, 18px);
	font-weight: 600;
	box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
}
.button1 {
	position: absolute;
	color: white;
	background-color: #3a444d;
	bottom: 20%;
	left: 32.8%;
	transform: translate(-63%, 20%);
	border-radius: 4px;
	height: 7%;
	width: 30%;
	font-size: clamp(3px, 3vw, 18px);
	font-weight: 600;
	box-shadow: -2px 3px 0 #222, -4px 6px 0 #000;
}

button:active {
	box-shadow: inset -4px 4px 0 #222;
	font-size: 0.9rem;
}

.personagem {
	position: absolute;
	text-align: center;
	left: 50%;
	bottom: 100%;
	transform: translate(-63%, 20%);
}
</style>
