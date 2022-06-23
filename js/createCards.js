"use strict";

import { createPokeFileView } from "./vewPokeFile.js";

import { searchPokedex } from "./allPokedex.js";

const contentCards = document.querySelector(".mainContent");
function printCards(pokeArray) {
  const cardsFrag = document.createDocumentFragment();
  for (const key of pokeArray) {
    const cards = createSpanishCard(key);

    //console.log(cards);
    cardsFrag.append(cards);
  }
  contentCards.append(cardsFrag);
}

function createSpanishCard(poke) {
  const cardArticle = document.createElement("article");
  cardArticle.setAttribute("id", poke.main.id);
  cardArticle.classList.add("card", "spanish", poke.types[0]);

  //   cardArticle.addEventListener("click", handleClickOnCard);
  cardArticle.addEventListener("click", async (event) => {
    console.log(event.target.offsetParent.id);
    if (event.target.offsetParent.id) {
      const arr = [
        {
          name: "",
          url:
            "https://pokeapi.co/api/v2/pokemon/" + event.target.offsetParent.id,
        },
      ];
      console.log(arr);
      const prueba = await searchPokedex(arr);
      return createPokeFileView(prueba);
    }
    if (event.target.id) {
      const arr = [
        {
          name: "",
          url: "https://pokeapi.co/api/v2/pokemon/" + event.target.id,
        },
      ];
      console.log(arr);
      const prueba = await searchPokedex(arr);
      return createPokeFileView(prueba);
    }
  });

  //console.log(cardArticle);

  const cardArticleHeader = document.createElement("header");
  cardArticleHeader.classList.add("card__header");
  const cardArticleHeaderH1 = document.createElement("h1");
  cardArticleHeaderH1.innerHTML = `#${poke.main.id}`;
  cardArticleHeader.append(cardArticleHeaderH1);

  const cardArticleHeaderH3 = document.createElement("h3");
  cardArticleHeaderH3.innerHTML = poke.main.name;
  cardArticleHeader.append(cardArticleHeaderH3);

  const cardArticleHeaderDiv = document.createElement("div");
  const cardArticleHeaderDivImg = document.createElement("img");
  cardArticleHeaderDivImg.setAttribute("src", poke.sprites.frontCard);
  cardArticleHeaderDivImg.setAttribute("alt", "Imagen Pokemon");
  cardArticleHeaderDiv.append(cardArticleHeaderDivImg);

  const cardArticleHeaderDivTypes = document.createElement("div");
  const cardArticleHeaderDivType1 = document.createElement("p");
  cardArticleHeaderDivType1.classList.add(poke.types[0]);
  cardArticleHeaderDivType1.innerHTML = `${poke.types[0]}`;
  cardArticleHeaderDivTypes.append(cardArticleHeaderDivType1);

  const cardArticleHeaderDivType2 = document.createElement("p");
  cardArticleHeaderDivType2.classList.add(poke.types[1]);
  cardArticleHeaderDivType2.innerHTML = `${
    !poke.types[1] ? "" : poke.types[1]
  }`;
  cardArticleHeaderDivTypes.append(cardArticleHeaderDivType2);
  cardArticleHeaderDiv.append(cardArticleHeaderDivTypes);
  cardArticleHeader.append(cardArticleHeaderDiv);

  cardArticle.append(cardArticleHeader);

  const cardArticleStats = document.createElement("div");
  cardArticleStats.classList.add("card__stat");

  for (let i = 0; i <= 5; i++) {
    const p = document.createElement("p");
    const divBar = document.createElement("div");
    divBar.classList.add("stat");
    /* const pStat = document.createElement("p"); */
    const divStat = document.createElement("div");
    if (i === 0) {
      p.textContent = "PS";
      divBar.classList.add("hp");
      divBar.style.width = `${poke.stats.hpStat / 1.4}%`;
      cardArticleStats.append(p);
      /* pStat.innerHTML = poke.stats.hpStat; */
    }
    if (i === 1) {
      p.textContent = "Att";
      divBar.classList.add("attack");
      divBar.style.width = `${poke.stats.attStat / 1.4}%`;
      cardArticleStats.append(p);
      /* pStat.innerHTML = poke.stats.attStat; */
    }
    if (i === 2) {
      p.textContent = "Def";
      divBar.classList.add("defense");
      divBar.style.width = `${poke.stats.defStat / 1.4}%`;
      cardArticleStats.append(p);
      /*  pStat.innerHTML = poke.stats.defStat; */
    }
    if (i === 3) {
      p.textContent = "Vel";
      divBar.classList.add("speed");
      divBar.style.width = `${poke.stats.speedStat / 1.4}%`;
      cardArticleStats.append(p);
      /*  pStat.innerHTML = poke.stats.speedStat; */
    }
    if (i === 4) {
      p.textContent = "Att Esp";
      divBar.classList.add("specialAttack");
      divBar.style.width = `${poke.stats.speAttStat / 1.4}%`;
      cardArticleStats.append(p);
      /* pStat.innerHTML = poke.stats.speAttStat; */
    }
    if (i === 5) {
      p.textContent = "Def Esp";
      divBar.classList.add("specialDefense");
      divBar.style.width = `${poke.stats.speDefStat / 1.4}%`;
      cardArticleStats.append(p);
      /*   pStat.innerHTML = poke.stats.speDefStat; */
    }

    divStat.classList.add("card__stat__container");
    divStat.append(divBar);
    cardArticleStats.append(divStat);
    /* cardArticleStats.append(pStat); */
    cardArticle.append(cardArticleStats);
  }

  return cardArticle;
  //const cardArticuleHeader=
}

function handleClickOnCard(event) {
  console.log("entro");
  console.log(event);
}

export { printCards, contentCards };
