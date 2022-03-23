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

const ovoce = ["jablko", "hruška", "jahody", "třešně"];

const zdravejidlo = zelenina.concat(ovoce);

const cisla = [1, 5, 300, 3, 4];

// console.log(Math.floor(Math.random() * 6) + 1);

const kostka = document.querySelector("h3");
const tlacitko = document.querySelector("button");
tlacitko.onclick = () => {
  const nahodneCislo = Math.floor(Math.random() * 6);
  kostka.textContent = vety[nahodneCislo];
};

const vety = [
  "Zůstaň stát",
  "Přeskoč o dvě pole dopředu",
  "Dej se doprava",
  "Dej se doleva",
  "Jdi rovně",
  "Jedno kolo stojíš",
];

console.log(vety[5]);

// index
// length
// push/unshift/pop/shift
// concat
// indexOf
// join
// includes
// sort
// Math.random()
