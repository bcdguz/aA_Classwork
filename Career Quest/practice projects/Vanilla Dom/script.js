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
  const addCity = () => {
    const newLi = document.createElement('li');
    newLi.innerText = cityInput.nodeValue;
    cityInput.value = "";
    sfPlaces.appendChild(newLi);
  }

  document.querySelector('.favorite-submit').addEventListener('click', addCity);
  

  // adding new photos

  // --- your code here!



});
