const apiURL = "https://pokeapi.co/api/v2/pokemon?limit=151";

const section = document.querySelector("section");

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

// This code works and returns names properly. Don't break it.

function getPokemonData(pokemon) {
  let pokeURL = pokemon.url;

  fetch(pokeURL)
    .then((results) => {
      return results.json();
    })
    .then((sprites) => {
      displayPokes(sprites);
    });
}

function displayPokes(sprites) {
  let spriteImg = sprites.sprites.front_default;
  let pokeSplit = sprites.name.split(","); //OHHHHHHHHHHHHH Now I get it....more than I

  let tableBody = document.getElementById("table"),
    newRow,
    newCell,
    newImg;

  for (let i = 0; i < pokeSplit.length; i++) {
    newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    //? I don't think this all of this code is needed. Everything seems to be running from the else, but I don't understand well enough to know why.

    if (pokeSplit[i] instanceof Array) {
      for (let j = 0; j < pokeSplit[i].length; j++) {
        newCell = document.createElement("td");
        newCell.textContent = update[i][j]; // I don't understand this line at all.
        newRow.appendChild(newCell);
      }
    } else {
      newCell = document.createElement("td");
      newPee = document.createElement("p");
      newImg = document.createElement("img");
      newImg.src = spriteImg;
      newPee.textContent = pokeSplit[i];
      newRow.appendChild(newCell);
      newCell.appendChild(newPee);
      newCell.appendChild(newImg);
    }
  }
}
