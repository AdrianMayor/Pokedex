"use strict";

//const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=1126";
 const allPokemonUrl = "https://pokeapi.co/api/v2/pokemon?limit=151";

let initialArrayPoke = await allPokedex();

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
    console.log(newPokeArray);
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
      /*  const dataCallTypes1 = await getData(dataCall.types[0].type.url);
      const dataCallTypes2 =
        dataCall.types.length > 1
          ? await getData(dataCall.types[1].type.url)
          : "none"; */

      data.push({
        main: {
          id: dataCall.id,
          name: dataCall.name,
          height: dataCall.height,
          weight: dataCall.weight,
          url: key,
          evolutionUrl: dataCall.species.url,
        },
        sprites: {
          frontCard:
            dataCall.sprites.versions["generation-v"]["black-white"].animated
              .front_default,
          backPic:
            dataCall.sprites.versions["generation-v"]["black-white"].animated
              .back_default,
          mainFilePic: dataCall.sprites.other["official-artwork"].front_default,
        },
        stats: {
          hpStat: dataCall.stats[0].base_stat,
          attStat: dataCall.stats[1].base_stat,
          defStat: dataCall.stats[2].base_stat,
          speedStat: dataCall.stats[5].base_stat,
          speAttStat: dataCall.stats[3].base_stat,
          speDefStat: dataCall.stats[4].base_stat,
        },
        /*  type1: dataCallTypes1.names[5].name,
        type2:
          dataCallTypes2 === "none" ? "none" : dataCallTypes2.names[5].name, */
        types: await Promise.all(await getPokeTypeSpanisType(dataCall.types)),
      });
    }
    return data;
  } catch (error) {
    console.error(error.message);
  }
}

async function getPokeTypeSpanisType(types) {
  const typesUrls = types.map((type) => type.type.url);

  const typesResult = typesUrls.map(getPokeTypeSpanishUrl);
  return typesResult;
}

async function getPokeTypeSpanishUrl(url) {
  const typeObject = await getData(url);
  const type = typeObject.names.find(
    (typeName) => typeName.language.name === "es"
  );
  return type.name;
}

async function allPokedex() {
  const initialArray = await getData(allPokemonUrl);
  //console.log(initialArray);

  const initialArrayResults = initialArray.results;
  console.log(initialArrayResults);

  /* const justUrl = await urlEachPokemon(initialArrayResults);
  //console.log(justUrl);

  const getEachData = await dataEachPokemon(justUrl);
  //console.log(getEachData); */

  return initialArrayResults;
}

async function searchPokedex(array) {
  const justUrl = await urlEachPokemon(array);
  console.log(justUrl);

  const getEachData = await dataEachPokemon(justUrl);
  console.log(getEachData);
  return getEachData;
}

/* async function allPokedex(url) {
  const initialArray = await getData(url);
  console.log(initialArray);

  const initialArrayResults = initialArray.results;
  console.log(initialArrayResults);

  const justUrl = await urlEachPokemon(initialArrayResults);
  console.log(justUrl);

  const getEachData = await dataEachPokemon(justUrl);
  console.log(getEachData);
} */
/* console.log(initialArrayPoke);
console.log(await searchPokedex(initialArrayPoke)); */

export { searchPokedex, allPokedex, initialArrayPoke };
