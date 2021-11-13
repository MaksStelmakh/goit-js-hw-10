import './css/styles.css';
import { fetchCountries } from "./fetchCountries"
import { template } from "./template"
import { smallTemaplate } from "./smallTemplate"
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
    console.log(arr)
    if (arr.length > 10) {
    return Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');
    }
    if (arr.length >= 2) {    
    return countryInfo.innerHTML = smallTemaplate(arr)
    }
    return countryInfo.innerHTML = template(arr)
}

