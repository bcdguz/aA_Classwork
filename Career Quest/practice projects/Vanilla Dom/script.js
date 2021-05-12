document.addEventListener("DOMContentLoaded", () => {
  // toggling restaurants

  const toggleLi = (e) => {
    const li = e.target;
    if (li.className === "visited") {
      li.className = "";
    } else {
      li.className = "visited";
    }
  };

  document.querySelectorAll("#restaurants li").forEach((li) => {
    li.addEventListener("click", toggleLi);
  });



  // adding SF places as list items
  const cityInput = document.getElementsByClassName('favorite-input')[0];
  const sfPlaces = document.getElementById('sf-places');
  // --- your code here!
  const addCity = (e) => {
    e.preventDefault();
    const newLi = document.createElement('li');
    newLi.innerText = cityInput.value;
    cityInput.value = "";
    sfPlaces.appendChild(newLi);
  }

  document.querySelector('.favorite-submit').addEventListener('click', addCity);
  

  // adding new photos

  // --- your code here!
  document.getElementsByClassName('photo-show-button')[0]
    .addEventListener('click', (e) => {
      e.preventDefault();
      const form = document.getElementsByClassName('photo-form-container')[0];
      if (form.classList.length === 2) {
        form.classList.remove('hidden');
      } else {
        form.classList.add('hidden')
      }
  })

  const addPhoto = (e) => {
    e.preventDefault();
    const input = document.getElementsByClassName('photo-url-input')
  }

});
