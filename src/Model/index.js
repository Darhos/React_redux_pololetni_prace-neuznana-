import { rules } from "./rules";

const pocet_kostek = 6;
const min_hodnota = 1;
const max_hodnota = 6;

// Hod kostkou - Generování náhodných čísel
export function throwDice() {
  let numbers = [];
  for (let i = 0; i < pocet_kostek; i++) {
    numbers.push(Math.floor(Math.random() * max_hodnota) + min_hodnota);
  }
  return numbers;
}

// Další hod - Zjištění prohry, přičtení bodů podle pravidel
export function nextRound(nums, body) {
  let status = false;
  let result = body;
  rules.map(pravidlo => {
    if (JSON.stringify(pravidlo.soucet) === JSON.stringify(nums)) {
      result += pravidlo.body;
      status = true;
    }
  });
  if (status === false) {
    alert("Prohrál jste!");
    setTimeout(window.location.reload(false), 3000);
    document.cookie = 0;
    return 0;
  }
  document.cookie = result;
  return result;
}

// Konec hry - Zjištění výhry, vynulování bodů
export function endGame() {
  if (parseInt(document.cookie) >= 2000) {
    document.cookie = 0;
    alert("Vyhrál jste!");
  }
  window.location.reload(false);
}
