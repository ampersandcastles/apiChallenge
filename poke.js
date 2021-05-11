// Generate number between 1 & 151.
const random = (max = 151) => {
  return Math.floor(Math.random() * max);
};

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
  // let pokeName = pokemon.name;
  let pokeURL = pokemon.url;
  // // console.log(pokeURL);
  // // console.log(pokeName);

  fetch(pokeURL)
    .then((results) => {
      return results.json();
    })
    .then((sprites) => {
      // let spritePath = sprites.sprites.front_default;
      // console.log(spritePath);
      displayPokes(sprites);
    });
}

function displayPokes(sprites) {
  let spriteImg = sprites.sprites.front_default.split(",");
  let pokeSplit = sprites.name.split(","); //OHHHHHHHHHHHHH Now I get it....more than I did.
  // console.log(pokeSplit);
  // console.log(spriteImg);

  // pokeSplit.forEach((e) => {
  //   let pokeTable = document.createElement("td");
  //   let pokeName = pokeTable + e;
  //   console.log(pokeName);
  // });

  //! THE GOOD CODE STARTS HERE
  let tableBody = document.getElementById("table"),
    newRow,
    newCell,
    newImg;

  for (let i = 0; i < pokeSplit.length; i++) {
    newRow = document.createElement("tr");
    tableBody.appendChild(newRow);

    if (pokeSplit[i] instanceof Array) {
      for (let j = 0; j < pokeSplit[i].length; j++) {
        newCell = document.createElement("td");
        newCell.textContent = update[i][j];
        newRow.appendChild(newCell);
      }
    } else {
      newCell = document.createElement("td");
      newCell.textContent = pokeSplit[i];
      newRow.appendChild(newCell);
    }
  }

  for (let k = 0; k < spriteImg.length; k++) {
    //!! IDIOT, YOU'RE NOT DOING ANYTHING HERE, WHY WOULD YOU THINK ANYTHING BELOW IT WOULD HAPPEN?
    if (spriteImg[k] instanceof Array) {
      for (let l = 0; spriteImg[k].length; l++) {
        newCell = document.createElement("td");
        newImg = document.createElement("img");
        newImg.textContent = update[k][l];
        newImg.src = k;
        newRow.appendChild(newImg);
        console.log(k);
      }
    }
  }
}
