// Generate number between 1 & 151.
const random = (max = 151) => {
  return Math.floor(Math.random() * max);
};

const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

function getPokes() {
  fetch(apiURL)
    .then((results) => {
      return results.json();
    })
    .then((allPokemon) => {
      allPokemon.results.forEach((pokemon) => {
        getPokemonData(pokemon);
        // console.log(pokemon.name);
      });
    })
    .catch((err) => console.log(err));
}

getPokes();

// This code works and returns names properly. Don't fucking break it.

function getPokemonData(pokemon) {
  // let pokeName = pokemon.name;
  let pokeURL = pokemon.url;
  // // console.log(pokeURL);
  // // console.log(pokeName);

  fetch(pokeURL)
    .then((results) => {
      return results.json();
    })
    .then((sprites) => {
      // let spritePath = sprites.sprites.front_default; //holy shit
      // console.log(spritePath);
      displayPokes(sprites);
    });
}

function displayPokes(sprites) {
  let spriteImg = sprites.sprites.front_default;
  let pokeName = sprites.name;
  console.log(pokeName);
  console.log(spriteImg);
}
