export function template(arr) {
  return arr.map(({ flags, name, capital, population, languages }) => {
        return `<h1 class="name-country">
    <img src="${flags.svg}" alt="" width="20px" height="20px">
      ${name.official}
      </h1>
      <ul class="list">
      ${capital ? `<li class="country-info">
          <span>Capital:</span> ${capital}
        </li>` : ``}
              ${population ? `<li class="country-info">
          <span>Population:</span> ${population}
        </li>` : ``}
              ${Object.values(languages) ? `<li class="country-info">
          <span>Languages:</span> ${Object.values(languages)}
        </li>` : ``}
      </ul>`
    }).join("")
}