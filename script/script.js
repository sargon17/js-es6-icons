import { data } from "./data.js";
const cardsSection = document.querySelector("#cardsSection");
const filterOptions = document.querySelector("#filterOptions");

console.log(data);

function filterToDisplay(database) {
  database.forEach(({ name, prefix, type, family, color }) => {
    let card = createCard(name, prefix, type, family, color);
    cardsSection.appendChild(card);
  });
}

function createCard(elementName, prefix, type, family, color) {
  let card = document.createElement("div");
  card.className = "col-2";
  card.innerHTML = `<div class="card">
    <div>
    <i class="${family} ${prefix}${elementName} ${type}" style="color:${color}"></i>
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
appendGeneratedColors();
filterToDisplay(data);

function displayFiltered(filter) {
  cardsSection.innerHTML = "";
  if (filter !== "all") {
    let filteredData = data.filter(({ type }) => type === filter);
    filterToDisplay(filteredData);
  } else {
    filterToDisplay(data);
  }
}

let filterOpt = "";
filterOptions.addEventListener("click", () => {
  if (filterOptions.value !== filterOpt) {
    // console.log(filterOptions.value);
    filterOpt = filterOptions.value;
    displayFiltered(filterOpt);
  }
});

function randomColorGenerator() {
  let color = "#";
  for (let index = 0; index < 6; index++) {
    let randomBit = Math.floor(Math.random() * 16);
    color += randomBit.toString(16);
  }
  return color;
}

function appendGeneratedColors() {
  categories.forEach((categorie) => {
    let categorieColor = randomColorGenerator();
    let array = data.filter((element) => element.type === categorie);
    array.map((element) => (element.color = categorieColor));
    console.log(array);
  });
}
