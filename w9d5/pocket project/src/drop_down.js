import { htmlGenerator } from "./warmup";

const dogs = {
  "Corgi": "https://www.akc.org/dog-breeds/cardigan-welsh-corgi/",
  "Australian Shepherd": "https://www.akc.org/dog-breeds/australian-shepherd/",
  "Affenpinscher": "https://www.akc.org/dog-breeds/affenpinscher/",
  "American Staffordshire Terrier": "https://www.akc.org/dog-breeds/american-staffordshire-terrier/",
  "Tosa": "https://www.akc.org/dog-breeds/tosa/",
  "Labrador Retriever": "https://www.akc.org/dog-breeds/labrador-retriever/",
  "French Bulldog": "https://www.akc.org/dog-breeds/french-bulldog/" 
};

export const dogLinkCreator = (dogs) => {
  let completedDogs = [];
  for (const [key,value] of Object.entries(dogs)) {
    let aTag = document.createElement('a');
    aTag.innerHTML = key;
    aTag.href = value;
    let liTag = document.createElement("li");
    liTag.classList.add("dog-link");
    liTag.classList.add("dog-link-hidden");
    liTag.append(aTag);
    completedDogs.push(liTag);
  }
  return completedDogs;
} 

export const attachDogLinks = (dogs) => {
  let dogLinks = dogLinkCreator(dogs);
  let uL = document.querySelector(".drop-down-dog-list");
  console.log(uL);
  dogLinks.forEach((link) => {
    uL.append(link);
  })
}

// const selectDog = document.querySelector(".dog-link");


function handleEnter() {
  const selectDog = document.querySelector(".drop-down-dog-list");
  selectDog.addEventListener("mouseenter", function (e) {
    e.target.classList.remove("dog-link-hidden");
  })
}

function handleLeave() {
  const selectDog = document.querySelector(".drop-down-dog-list");
  console.log(selectDog);
  selectDog.addEventListener("mouseleave", function (e) {
    e.target.classList.add("dog-link-hidden");
  })
}

attachDogLinks(dogs);
handleLeave();
handleEnter();