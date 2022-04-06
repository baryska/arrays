const zelenina = [
  "rajče",
  "okurka",
  "paprika",
  "mrkev",
  "brambory",
  "celer",
  "zelí",
  "květák",
  "ředkvičky",
  "brokolice",
];

zelenina[5] = "česnek";

const pes = {
  barva: "hnědá",
  výška: "60 cm",
  srst: "středně dlouhá",
};

const user = {
  jmeno: "Jakub",
  prijmeni: "Novák",
  vek: "20",
  bydliste: "Praha",
  email: "jakub@email.cz",
};

user.bydliste = "Plzeň";

const ovoce = ["jablko", "hruška", "jahody", "třešně"];

const zdravejidlo = zelenina.concat(ovoce);

const cisla = [1, 5, 300, 3, 4];

// console.log(Math.floor(Math.random() * 6) + 1);

// const kostka = document.querySelector("h3");
// const tlacitko = document.querySelector("button");
// tlacitko.onclick = () => {
//   const nahodneCislo = Math.floor(Math.random() * 6);
//   kostka.textContent = vety[nahodneCislo];
// };

const vety = [
  "Zůstaň stát",
  "Přeskoč o dvě pole dopředu",
  "Dej se doprava",
  "Dej se doleva",
  "Jdi rovně",
  "Jedno kolo stojíš",
];

// let i = 0;
// while (i < zelenina.length) {
//   console.log(zelenina[i]);
//   i++;
// }

// let ovecka = 1;
// while (ovecka <= 50) {
//   if (ovecka === 1) {
//     console.log("1 ovečka");
//   } else if (ovecka === 2 || ovecka === 3 || ovecka === 4) {
//     console.log(ovecka + " ovečky");
//   } else {
//     console.log(ovecka + " oveček");
//   }
//   ovecka++;
// }

// index
// length
// push/unshift/pop/shift;
// indexOf
// join
// includes
// sort
// Math.random()

const vydaje = [
  { name: "Petr", product: "Prací prášek", price: 240 },
  { name: "Ondra", product: "Savo", price: 80 },
  { name: "Pavla", product: "Toaleťák", price: 65 },
  { name: "Zuzka", product: "Mýdlo", price: 50 },
  { name: "Pavla", product: "Závěs do koupelny", price: 350 },
  { name: "Libor", product: "Pivka na kolaudačku", price: 124 },
  { name: "Petr", product: "Pytle na odpadky", price: 75 },
  { name: "Míša", product: "Utěrky na nádobí", price: 130 },
  { name: "Ondra", product: "Toaleťák", price: 120 },
  { name: "Míša", product: "Pečící papír", price: 30 },
  { name: "Zuzka", product: "Savo", price: 80 },
  { name: "Petr", product: "Tapeta na záchod", price: 315 },
  { name: "Ondra", product: "Toaleťák", price: 6 },
];

fetch("https://nameday.abalin.net/api/V1/today").then((response) =>
  response.json().then((data) => {
    const svatek = data.nameday.cz;
    const svatekSpan = document.querySelector(".svatek");
    svatekSpan.textContent = svatek;
  })
);

fetch("https://api.imgflip.com/get_memes").then((response) =>
  response.json().then((info) => {
    const memes = info.data.memes;
    const obrazky = document.querySelector(".obrazek-kontejner");
    let i = 0;
    while (i < 20) {
      const jmeno = memes[i].name;
      const url = memes[i].url;
      const jmenoElement = document.createElement("h3");
      const obrazekElement = document.createElement("img");
      obrazekElement.setAttribute("src", url);
      jmenoElement.textContent = jmeno;
      obrazky.appendChild(jmenoElement);
      obrazky.appendChild(obrazekElement);
      i++;
    }
  })
);

// let i = 0;
// const petrovyVydaje = [];

// while (i < vydaje.length) {
//   if (vydaje[i].name === "Zuzka") {
//     petrovyVydaje.push(vydaje[i].product);
//   }
//   i++;
// }
