import { Fish } from "./Fish.js";
import { getMostHolyFish, getSoldierFish, getUnworthy, useUnworthy } from "./FishData.js";

// export const FishList = () => {

//     //1. Get the array of fish
//     // const holyFish = getMostHolyFish();
//     // const soldierFish = getSoldierFish();
//     // const unWorthyFish = getUnworthy();
//     // // const allfish = holyFish.concat(soldierFish, unWorthyFish);
//     // const allfish = [...holyFish,...soldierFish, ...unWorthyFish];
//     const allfish = [...getMostHolyFish(),...getSoldierFish(),...getUnworthy()]
//     //2. Get a reference to the location on the DOM where you want to display the list of fish
//     const DOMLocation = document.querySelector("#fishList");
//     // console.log('fishlist reference', DOMLocation);

//     //3. Declare a variable to hold on to fish HTML representations
//     let fishHTMLRepresentations = "";

//     //4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
//     for (const onefish of allfish) {
//         fishHTMLRepresentations += Fish(onefish);
//     }

//     // console.log("fishHTMLRepresentations", fishHTMLRepresentations);
//     DOMLocation.innerHTML += fishHTMLRepresentations;
        
// };
export const FishList = () => {
    getUnworthy()
    .then(()=> {
        useUnworthy();
        // console.log(test)
    })
    addFishToDOM(getMostHolyFish(),"Holy Fish");
    addFishToDOM(getSoldierFish(), "Soldier Fish");
    addFishToDOM(getUnworthy(), "Unworthy Fish");
    console.log(unfish)
}

const addFishToDOM =(fishArray, heading) => {
    console.log(fishArray)
const DOMLocation = document.querySelector("#fishList");
// console.log('fishlist reference', DOMLocation);

//3. Declare a variable to hold on to fish HTML representations
let fishHTMLRepresentations = "";

//4. Loop over the array of fish and for each one, invoke the Fish component which returns HTML representation
for (const onefish of fishArray) {
    console.log(onefish)
    fishHTMLRepresentations += Fish(onefish);
}

// console.log("fishHTMLRepresentations", fishHTMLRepresentations);
DOMLocation.innerHTML += `<h2 class="fish-heading">${heading}</h2>
                            <div class="fishSection">${fishHTMLRepresentations}</div>`
}