const fieldArray = []

export const addPlant = seedObj => {
    fieldArray.push(seedObj)
}

export const usePlants = () => {
    return fieldArray
}