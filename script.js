// api reset countries
const country = document.querySelector(".country");
const image_search = document.querySelector(".image-search");
const Name = document.querySelector(".name");
const search = document.querySelector(".search");
const continent = document.querySelector(".continent");
const population = document.querySelector(".population");
const area = document.querySelector(".area");
const capital = document.querySelector(".capital");
const img = document.querySelector(".img");

const element = function (countries) {
  const request = new XMLHttpRequest();
  request.open("GET", `https://restcountries.com/v3.1/name/${countries}`);

  request.send();

  request.addEventListener("load", function () {
    const [data] = JSON.parse(this.responseText);
    console.log(data);

    img.src = data.flags.png;
    Name.textContent = data.name.common;
    continent.textContent = data.continents;
    population.textContent = `${(data.population / 1000000).toFixed(1)} people`;
    area.textContent = `${data.area} km2`;
    capital.textContent = data.capital;
  });
};

image_search.addEventListener("click", () => {
  country.classList.remove("hidden");
  let t = search.value;
  element(t);
});
