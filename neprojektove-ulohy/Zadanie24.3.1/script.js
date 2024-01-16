const articles = [
  {
    title: "Úvod do HTML a CSS",

    content:
      "HTML a CSS sú základnými stavebnými kameňmi pre tvorbu webových stránok. HTML sa používa na definovanie štruktúry obsahu, zatiaľ čo CSS sa stará o vizuálny štýl a formátovanie.",
  },

  {
    title: "Základy JavaScriptu",

    content:
      "JavaScript je programovací jazyk používaný na interaktivitu na webových stránkach. S jeho pomocou môžete vykonávať akcie, ako je validácia formulárov, animácie a komunikácia so serverom.",
  },

  {
    title: "Responzívny dizajn",

    content:
      "Responsívny dizajn znamená vytvárať webové stránky, ktoré sa automaticky prispôsobujú rôznym veľkostiam obrazovky, ako sú mobilné telefóny, tablety a počítače.",
  },

  {
    title: "Frameworky a knižnice",

    content:
      "Frontendové frameworky a knižnice, ako je React, Angular a Vue.js, uľahčujú vývoj webových aplikácií tým, že poskytujú hotové komponenty a nástroje na efektívnu prácu.",
  },

  {
    title: "Optimalizácia pre rýchlosť",

    content:
      "Optimalizácia pre rýchlosť je dôležitým faktorom pri vývoji webových stránok. Vylepšenie rýchlosti načítavania stránok môže zlepšiť užívateľský zážitok a SEO výsledky.",
  },

  {
    title: "UX/UI návrh",

    content:
      "UX (užívateľská skúsenosť) a UI (užívateľské rozhranie) návrh sú dôležité pre vytváranie stránok, ktoré sú nielen funkčné, ale aj príjemné na používanie a vizuálne atraktívne.",
  },

  {
    title: "Bezpečnosť na webe",

    content:
      "Zabezpečenie webových stránok je kľúčové, aby sa zabránilo neoprávnenému prístupu, útokom a krádeži údajov. Používanie bezpečných postupov a aktualizácií je nevyhnutné.",
  },

  {
    title: "SEO optimalizácia",

    content:
      "SEO (optimalizácia pre vyhľadávače) zlepšuje viditeľnosť webových stránok vo vyhľadávačoch. Správne použitie kľúčových slov, meta údajov a kvalitné odkazy môže pomôcť zvýšiť návštevnosť stránok.",
  },

  {
    title: "Moderné trendy vo frontend vývoji",

    content:
      "Svet frontend vývoja sa neustále mení a zdokonaľuje. Sledovanie moderných trendov, ako je dark mode, microinterakcie a rýchle načítavanie, môže pomôcť udržať webové stránky aktuálne a atraktívne.",
  },

  {
    title: "Praktické tipy pre lepší frontend",

    content:
      "Niekoľko praktických tipov pre frontend vývojárov: udržujte kód čistý, používajte vhodné nástroje, testujte na rôznych zariadeniach a dbajte na užívateľskú skúsenosť.",
  },

  {
    title: "Optimalizácia obrázkov pre web",

    content:
      "Správne spracovanie a komprimácia obrázkov je dôležité pre rýchle načítavanie webových stránok. Používanie správnych formátov a nástrojov na optimalizáciu môže pomôcť zlepšiť výkon stránok.",
  },

  {
    title: "Používanie CSS pre animácie",

    content:
      "CSS umožňuje vytvárať pôsobivé animácie priamo vo webových stránkach, bez nutnosti používania externých knižníc. Používanie keyframes a transformácií môže vytvoriť plynulé a atraktívne animácie.",
  },

  {
    title: "Práca s API a AJAX",

    content:
      "Komunikácia so serverom pomocou API a AJAX umožňuje načítavať a odosielať dáta bez nutnosti obnovenia celej stránky. Toto je dôležité pre interaktívne webové aplikácie.",
  },

  {
    title: "Vývoj responzívnych emailov",

    content:
      "Vývoj responzívnych emailov je výzvou, pretože rôzne emailové klienty majú rôznu podporu pre CSS a HTML. Správne použitie medii dotazov a flexibilných kontajnerov môže zabezpečiť, že emaily budú dobre vyzerať na rôznych zariadeniach.",
  },

  {
    title: "Zabezpečenie frontend aplikácií",

    content:
      "Zabezpečenie frontend aplikácií je rovnako dôležité ako zabezpečenie backendu. Ochrana pred útokmi ako CSRF, XSS a Clickjacking môže zabezpečiť, že aplikácia zostane bezpečná pre používateľov.",
  },

  {
    title: "Efektívne použitie flexboxu a gridu",

    content:
      "Návod na efektívne využívanie CSS flexboxu a gridu pre vytváranie responzívnych rozložení webových stránok.",
  },

  {
    title: "Výber medzi modernými UI frameworkmi",

    content:
      "Porovnanie Reactu, Angularu a Vue.js, aby ste mohli zvoliť vhodný frontendový framework pre svoj projekt.",
  },

  {
    title: "Vytváranie nezávislých komponentov s Web Components",

    content:
      "Zavedenie konceptu Web Components pre vytváranie opakovane použiteľných webových komponentov.",
  },

  {
    title: "PWA (Progressive Web Apps) a ich výhody",

    content:
      "Vysvetlenie konceptu progresívnych webových aplikácií a ich prínosy pre používateľov.",
  },

  {
    title: "Moderné metódy práce s CSS: BEM, SMACSS, CSS-in-JS",

    content:
      "Prehľad rôznych prístupov k organizácii a štruktúrovaniu CSS kódu vo vašom projekte.",
  },
];

let loadedArticles = 0;
const articlesToLoad = 5;
let isLoading = false;

function loadArticles() {
  if (loadedArticles >= articles.length) return;

  const output = document.getElementById("output");
  for (
    let i = loadedArticles;
    i < loadedArticles + articlesToLoad && i < articles.length;
    i++
  ) {
    const articleDiv = document.createElement("div");
    articleDiv.innerHTML = `<h2>${articles[i].title}</h2><p>${articles[i].content}</p>`;
    output.appendChild(articleDiv);
  }
  loadedArticles += articlesToLoad;
}

function loadMoreArticles() {
  // chatGPT
  if (isLoading || loadedArticles >= articles.length) return;
  isLoading = true;
  //
  const loader = document.getElementById("loader");
  loader.style.visibility = "visible";

  setTimeout(() => {
    loadArticles();
    loader.style.visibility = "hidden";
    isLoading = false;
  }, 2000);
}

window.onload = () => {
  loadArticles();
  document.getElementById("currentYear").textContent = new Date().getFullYear();
};
// chatGPT
window.addEventListener("scroll", () => {
  loadMoreArticles();
});
