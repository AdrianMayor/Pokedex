"use strict";

import { clearList } from "./helpers.js";

import { contentCards } from "./createCards.js";

function createPokeFileView(poke) {
  clearList(contentCards);
  console.log("log de poke al entrar en crear vista", poke);
  const sectionMainPokeFile = document.querySelector(".mainPokeFiles");

  const viewFrag = document.createDocumentFragment();

  const sectionMainPokeFileH2 = document.createElement("h2");
  sectionMainPokeFileH2.classList.add("mainPokeFiles__name");

  console.log("check name", poke[0].main.name);

  sectionMainPokeFileH2.innerHTML = poke[0].main.name;
  viewFrag.append(sectionMainPokeFileH2);

  const sectionMainPokeFileImg = document.createElement("img");
  sectionMainPokeFileImg.setAttribute("src", poke[0].sprites.mainFilePic);
  sectionMainPokeFileImg.setAttribute("alt", "Imagen principal pokemon");
  viewFrag.append(sectionMainPokeFileImg);

  const mainPokeTypes = document.createElement("div");
  mainPokeTypes.classList.add("mainPokeFiles__types");
  const pType1 = document.createElement("p");
  pType1.innerHTML = poke[0].types[0];
  mainPokeTypes.append(pType1);
  const pType2 = document.createElement("p");
  pType2.innerHTML = poke[0].types[1];
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
      divBar.style.width = `${poke[0].stats.hpStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke[0].stats.hpStat;
    }
    if (i === 1) {
      p.textContent = "Att";
      divBar.classList.add("attack");
      divBar.style.width = `${poke[0].stats.attStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke[0].stats.attStat;
    }
    if (i === 2) {
      p.textContent = "Def";
      divBar.classList.add("defense");
      divBar.style.width = `${poke[0].stats.defStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke[0].stats.defStat;
    }
    if (i === 3) {
      p.textContent = "Vel";
      divBar.classList.add("speed");
      divBar.style.width = `${poke[0].stats.speedStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke[0].stats.speedStat;
    }
    if (i === 4) {
      p.textContent = "Att Esp";
      divBar.classList.add("specialAttack");
      divBar.style.width = `${poke[0].stats.speAttStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke[0].stats.speAttStat;
    }
    if (i === 5) {
      p.textContent = "Def Esp";
      divBar.classList.add("specialDefense");
      divBar.style.width = `${poke[0].stats.speDefStat / 1.4}%`;
      mainPokeFileStats.append(p);
      pStat.innerHTML = poke[0].stats.speDefStat;
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
  spritesContainerFrontImg.setAttribute("src", poke[0].sprites.frontCard);
  spritesContainerFrontImg.setAttribute("alt", "Imagen de Frente");
  mainPokesSpritesContainer.append(spritesContainerFrontImg);
  const spritesContainerBackP = document.createElement("p");
  spritesContainerBackP.textContent = "Vista de espalda";
  spritesContainerBackP.setAttribute("id", "backText");
  mainPokesSpritesContainer.append(spritesContainerBackP);
  const spritesContainerBackImg = document.createElement("img");
  spritesContainerBackImg.setAttribute("id", "backSprite");
  spritesContainerBackImg.setAttribute("src", poke[0].sprites.backPic);
  spritesContainerBackImg.setAttribute("alt", "Imagen de Espalda");
  mainPokesSpritesContainer.append(spritesContainerBackImg);

  mainPokeSprites.append(mainPokesSpritesContainer);
  viewFrag.append(mainPokeSprites);

  sectionMainPokeFile.append(viewFrag);

  console.log(sectionMainPokeFile);
}

export { createPokeFileView };
