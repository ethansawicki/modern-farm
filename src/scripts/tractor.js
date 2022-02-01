import {createPlan} from "./plan.js"
import { createAsparagus } from "./seeds/asparagus.js"
import { createCorn } from "./seeds/corn.js"
import { createPotato } from "./seeds/potato.js"
import { createSoybean } from "./seeds/soybean.js"
import { createWheat } from "./seeds/wheat.js"
import { addPlant, usePlants } from "./field.js"
import { createSunflower } from "./seeds/sunflower.js"

export const plantSeeds = (seedPlan) => {
   for (const getSeed of seedPlan) {
       for (const plant of getSeed) {
           if(plant === "Asparagus") {
                addPlant(createAsparagus())
            } else if (plant === "Soybean") {
                addPlant(createSoybean())
            } else if (plant === "Potato") {
                addPlant(createPotato())
            } else if (plant === "Wheat") {
                addPlant(createWheat())
            } else if (plant === "Corn") {
                createCorn().forEach(addPlant)
            } else if (plant === "Sunflower")
                addPlant(createSunflower())
       }
   }
}

