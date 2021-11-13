export function smallTemaplate(arr) {
  return arr.map(({flags, name}) => {
        return `<p class="name-country">
    <img src="${flags.svg}" alt="" width="20px" height="20px">
      ${name.official}
      </p>`
    }).join("")
}