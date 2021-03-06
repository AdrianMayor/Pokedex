"use strict";

import { searchPokedex, initialArrayPoke } from "./allPokedex.js";

import { printCards, contentCards } from "./createCards.js";

import { createPokeFileView } from "./vewPokeFile.js";

import { clearList } from "./helpers.js";

/* const pokeArray = await allPokedex();
//console.log(pokeArray);
printCards(pokeArray); */

console.log("initial array", initialArrayPoke);
printCards(await searchPokedex(initialArrayPoke));

const forms = document.forms.inputPoke;
const inputText = document.querySelector(".nav__searcher--inputBar");
/* const pokeCard = document.querySelector(".card"); */

//console.log(pokeCard);

forms.addEventListener("submit", handleSubmitForm);
inputText.addEventListener("input", handleFilterInputText);
/* pokeCard.addEventListener("click", handleClickOnCard); // */
/* pokeCard.forEach((poke) => {
  poke.addEventListener("click", handleClickOnCard);
}); */

async function handleFilterInputText() {
  let inputPokeSearch = [];
  const input = inputText.value;

  inputPokeSearch = initialArrayPoke.filter((key) => {
    return key.name.includes(input);
  });

  if (inputPokeSearch.length > 0) {
    clearList(contentCards);
    printCards(await searchPokedex(inputPokeSearch));
  }
  if (input === inputPokeSearch[0].name) {
    const prueba = await searchPokedex(inputPokeSearch);

    createPokeFileView(prueba);
  }
}

function handleSubmitForm(e) {
  e.preventDefault();
}

/* function handleClickOnCard(event) {
  console.log("entro");
  console.log(event);
} */

/* function createPokeFileView(poke) {
  //console.log(poke[0]);
  const sectionMainPokeFile = document.querySelector(".mainPokeFiles");

  const viewFrag = document.createDocumentFragment();

  const sectionMainPokeFileH2 = document.createElement("h2");
  sectionMainPokeFileH2.classList.add("mainPokeFiles__name");
  sectionMainPokeFileH2.innerHTML = poke.main.name;
  viewFrag.append(sectionMainPokeFileH2);

  const sectionMainPokeFileImg = document.createElement("img");
  sectionMainPokeFileImg.setAttribute("src", poke.sprites.mainFilePic);
  sectionMainPokeFileImg.setAttribute("alt", "Imagen principal pokemon");
  viewFrag.append(sectionMainPokeFileImg);

  const mainPokeTypes = document.createElement("div");
  mainPokeTypes.classList.add("mainPokeFiles__types");
  const pType1 = document.createElement("p");
  pType1.innerHTML = poke.types[0];
  mainPokeTypes.append(pType1);
  const pType2 = document.createElement("p");
  pType2.innerHTML = poke.types[1];
  mainPokeTypes.append(pType2);
  viewFrag.append(mainPokeTypes);

  const mainPokeFileStats = document.createElement("div");
  mainPokeFileStats.classList.add("mainPokeFiles__stat");

  for (let i = 0; i <= 5; i++) {
    const p = document.createElement("p");
    const divBar = document.createElement("div");
    divBar.classList.add("stat");
    const pStat = document.createElement("p");
    const divStat = document.createElement("div");
    if (i === 0) {
      p.textContent = "PS";
      divBar.classList.add("hp");
      divBar.style.width = `${poke.stats.hpStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke.stats.hpStat;
    }
    if (i === 1) {
      p.textContent = "Att";
      divBar.classList.add("attack");
      divBar.style.width = `${poke.stats.attStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke.stats.attStat;
    }
    if (i === 2) {
      p.textContent = "Def";
      divBar.classList.add("defense");
      divBar.style.width = `${poke.stats.defStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke.stats.defStat;
    }
    if (i === 3) {
      p.textContent = "Vel";
      divBar.classList.add("speed");
      divBar.style.width = `${poke.stats.speedStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke.stats.speedStat;
    }
    if (i === 4) {
      p.textContent = "Att Esp";
      divBar.classList.add("specialAttack");
      divBar.style.width = `${poke.stats.speAttStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke.stats.speAttStat;
    }
    if (i === 5) {
      p.textContent = "Def Esp";
      divBar.classList.add("specialDefense");
      divBar.style.width = `${poke.stats.speDefStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke.stats.speDefStat;
    }

    divStat.classList.add("card__stat__container");
    divStat.append(divBar);
    mainPokeFileStats.append(divStat);
    mainPokeFileStats.append(pStat);
    viewFrag.append(mainPokeFileStats);
  }
  const mainPokeSprites = document.createElement("div");
  mainPokeSprites.classList.add("mainPokeFiles__sprites");

  const mainPokesSpritesContainer = document.createElement("div");
  const spritesContainerFrontP = document.createElement("p");
  spritesContainerFrontP.textContent = "Vista de cara";
  spritesContainerFrontP.setAttribute("id", "faceText");
  mainPokesSpritesContainer.append(spritesContainerFrontP);
  const spritesContainerFrontImg = document.createElement("img");
  spritesContainerFrontImg.setAttribute("id", "faceSprite");
  spritesContainerFrontImg.setAttribute("src", poke.sprites.frontCard);
  spritesContainerFrontImg.setAttribute("alt", "Imagen de Frente");
  mainPokesSpritesContainer.append(spritesContainerFrontImg);
  const spritesContainerBackP = document.createElement("p");
  spritesContainerBackP.textContent = "Vista de espalda";
  spritesContainerBackP.setAttribute("id", "backText");
  mainPokesSpritesContainer.append(spritesContainerBackP);
  const spritesContainerBackImg = document.createElement("img");
  spritesContainerBackImg.setAttribute("id", "backSprite");
  spritesContainerBackImg.setAttribute("src", poke.sprites.backPic);
  spritesContainerBackImg.setAttribute("alt", "Imagen de Espalda");
  mainPokesSpritesContainer.append(spritesContainerBackImg);
  
  mainPokeSprites.append(mainPokesSpritesContainer);
  viewFrag.append(mainPokeSprites);
  
  sectionMainPokeFile.append(viewFrag);
  
  console.log(sectionMainPokeFile);
} */
