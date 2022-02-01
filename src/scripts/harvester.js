export const harvestPlants = (harvest) => {
    const fullHarvest = []
    for (const plant of harvest) {
        if(plant.output === 2) {
            fullHarvest.push(plant)
            fullHarvest.push(plant)
        } else if (plant.output === 3) {
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
        } else if (plant.output === 4) {
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
        } else if (plant.type === "Corn"){
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
        }
        else if (plant.output === 6) {
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
            fullHarvest.push(plant)
        }
    } return fullHarvest
} 