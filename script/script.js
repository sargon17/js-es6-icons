import { data } from "./data.js";
const cardsSection = document.querySelector("#cardsSection");
const filterOptions = document.querySelector("#filterOptions");

console.log(data);

data.forEach(({ name, prefix, type, family, color }) => {
  let card = createCard(name, prefix, type, family, color);
  cardsSection.appendChild(card);
});

function createCard(elementName, prefix, type, family, color) {
  let card = document.createElement("div");
  card.className = "col-2";
  card.innerHTML = `<div class="card">
    <div>
    <i class="${family} ${prefix}${elementName}" style="color:${color}"></i>
    <p>${elementName}</p>
    </div>
    </div>`;
  return card;
}

let categories = [];
data.forEach(({ type }) => {
  if (!categories.includes(type)) {
    categories.push(type);
    let option = document.createElement("option");
    option.value = type;
    option.innerHTML = type;
    filterOptions.appendChild(option);
  }
});

filterOptions.addEventListener("click", () => {
  displayFiltered();
});
