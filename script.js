const heartsContainer = document.querySelector("#hearts-container");
const controlsContainer = document.querySelector("#controls-container");
const hitButton = controlsContainer.querySelector("#hit-button");
const hitDamageInput = controlsContainer.querySelector("#hit-damage-input");
const healButton = controlsContainer.querySelector("#heal-button");
const healInput = controlsContainer.querySelector("#heal-amount-input");
const addHeart = controlsContainer.querySelector("#add-heart-container-button");
const overHealButton = controlsContainer.querySelector("#overheal-button");
const overHealInput = controlsContainer.querySelector("#overheal-amount-input");
let health = 35;
let maxHealth = 44;
let overHealAmount = 0

function randint(lo, hi) {
  return Math.floor(Math.random() * (hi - lo) + lo);
}
function updateHeartsDisplay() {
  let quartersToFill = health;
  for (const heart of heartsContainer.querySelectorAll(".heart")) {
    if (quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = 0;
    }
  }
  quartersToFill = overHealAmount;
  for (const heart of heartsContainer.querySelectorAll(".heart.extra")) {
    if(quartersToFill) {
      let quarters = Math.min(quartersToFill, 4);
      heart.dataset.quarters = quarters;
      quartersToFill -= quarters;
    } else {
      heart.dataset.quarters = 0
    }
  }
  heartsContainer.innerHTML = heartsContainer.innerHTML.replaceAll(
`<div class="heart extra" data-quarters="0">
  <div class="top-left"></div>
  <div class="top-right"></div>
  <div class="bottom-left"></div>
  <div class="bottom-right"></div>
</div>`, "")
}
function heal() {
  health = Math.min(maxHealth, health + Number(healInput.value) * 4)
  updateHeartsDisplay();
}
function addHeartContainer() {
  heartsContainer.children[(maxHealth / 4) - 1].insertAdjacentHTML('afterend', 
`<div class="heart" data-quarters="0">
  <div class="top-left"></div>
  <div class="top-right"></div>
  <div class="bottom-left"></div>
  <div class="bottom-right"></div>
</div>`);
  maxHealth += 4
  health = maxHealth
  updateHeartsDisplay();
}
function overHeal() {
  if (overHealInput.value > overHealAmount / 4) {
    for (let i = overHealInput.value - (overHealAmount / 4); i != 0; i--) {
      heartsContainer.innerHTML = heartsContainer.innerHTML + 
`<div class="heart extra" data-quarters="4">
  <div class="top-left"></div>
  <div class="top-right"></div>
  <div class="bottom-left"></div>
  <div class="bottom-right"></div>
</div>`;
      overHealAmount += 4
      health = maxHealth + overHealAmount
    }
  }
  updateHeartsDisplay();
}
overHealButton.addEventListener("click", overHeal)
addHeart.addEventListener("click", addHeartContainer)
healButton.addEventListener("click", heal)
hitButton.addEventListener("click", function () {
  let damage = Number(hitDamageInput.value);
  if (overHealAmount > 0 ) {
    overHealAmount -= damage
    if (overHealAmount < 0 ) {
      health = Math.max(0, health + overHealAmount)
      overHealAmount = 0
    }
  } else {
    health = Math.max(0, health - damage);
  }
  updateHeartsDisplay();
});``