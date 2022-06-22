"use strict";

//const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=1126";
const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=4";

async function getData(url) {
  try {
    const response = await fetch(url);
    const data = await response.json();

    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function urlEachPokemon(array) {
  try {
    const newPokeArray = array.map((item) => {
      return item.url;
    });
    return newPokeArray;
  } catch (error) {
    console.error(error.message);
  }
}

async function dataEachPokemon(array) {
  try {
    let data = [];
    for (const key of array) {
      const dataCall = await getData(key);
      const dataCallTypes1 = await getData(dataCall.types[0].type.url);
      const dataCallTypes2 =
        dataCall.types.length > 1
          ? await getData(dataCall.types[1].type.url)
          : "none";

      data.push({
        name: dataCall.name,
        height: dataCall.height,
        weight: dataCall.weight,
        id: dataCall.id,
        frontCard:
          dataCall.sprites.versions["generation-v"]["black-white"].animated
            .front_default,
        backPic:
          dataCall.sprites.versions["generation-v"]["black-white"].animated
            .back_default,
        mainFilePic: dataCall.sprites.other["official-artwork"].front_default,
        hpStat: dataCall.stats[0].base_stat,
        attStat: dataCall.stats[1].base_stat,
        defStat: dataCall.stats[2].base_stat,
        speedStat: dataCall.stats[5].base_stat,
        speAttStat: dataCall.stats[3].base_stat,
        speDefStat: dataCall.stats[4].base_stat,
        type1: dataCallTypes1.names[5].name,
        type2:
          dataCallTypes2 === "none" ? "none" : dataCallTypes2.names[5].name,
      });
      //console.log(data);
    }
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function allPoke(url) {
  const initialArray = await getData(url);
  console.log(initialArray);

  const initialArrayResults = initialArray.results;
  console.log(initialArrayResults);

  const justUrl = await urlEachPokemon(initialArrayResults);
  console.log(justUrl);

  const getEachData = await dataEachPokemon(justUrl);
  console.log(getEachData);
}

allPoke(allPokemonUrl);
