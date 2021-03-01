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

const selectDog = document.querySelector(".drop-down-dog-nav")
const dogUL = document.querySelector(".drop-down-dog-list")

function handleEnter() {
  selectDog.addEventListener("mouseenter", function (e) {
    console.log('in')
    
    Array.from(dogUL.children).forEach((dog) => {
      dog.classList.remove("dog-link-hidden");
    })
  })
}




function handleLeave() {
  selectDog.addEventListener("mouseleave", function (e) {
    console.log('leaving')
    Array.from(dogUL.children).forEach((dog) => {
      dog.classList.add("dog-link-hidden");
    })
  })
}



attachDogLinks(dogs);
handleEnter();
handleLeave();
