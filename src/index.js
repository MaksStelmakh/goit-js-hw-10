import './css/styles.css';
import { fetchCountries } from "./fetchCountries"
import debounce from "lodash.debounce"
import Notiflix from 'notiflix';

const DEBOUNCE_DELAY = 300;

const searchForm = document.querySelector(`input#search-box`)
const countryInfo = document.querySelector(`.country-info`)


searchForm.addEventListener(`input`, debounce(() => {
    const name = searchForm.value.trim();
    if (name === ``) {
    return countryInfo.innerHTML = ``
    }
    fetchCountries(name).then(showCountry).catch(wrongCountry)
    
}, DEBOUNCE_DELAY));


function wrongCountry(error) {
    console.log(error)
    return countryInfo.innerHTML = ``
}

function showCountry(arr) {
    if (arr.length > 10) {
    return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
    if (arr.length >= 2) {
        let smallTemaplate = arr.map(({flags, name}) => {
        return `<p class="name-country">
    <img src="${flags.svg}" alt="" width="20px" height="20px">
      ${name.official}
      </p>`
    }).join("")
    return countryInfo.innerHTML = smallTemaplate
    }
    let template = arr.map(({flags, name, capital, population, languages}) => {
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
    return countryInfo.innerHTML = template
}
