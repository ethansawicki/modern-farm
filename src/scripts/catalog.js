

export const createCatalog = (catalog) => {
    let div = ""
    for (const food of catalog) {
        div += `<section class="plant">${food.type}</section>`
    }
    div += catalog.join("")
    document.querySelector(".container").innerHTML = div
}

