

export const createCatalog = (food) => {
    let div = ""
    for (const array of food) {
        div += `<section class="plant">${array.type}</section>`
    }
    document.querySelector(".container").innerHTML = div
}

