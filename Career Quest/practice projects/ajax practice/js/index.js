console.log("Hello from the JavaScript console!");

document.addEventListener("DOMContentLoaded", () => {
    const weatherDiv = document.getElementById('weather-div');
    // Your AJAX request here
    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=new%20york,US&appid=bcb83c4b54aee8418983c2aff3073b3b'
    }).then(res => {
        const temp = document.createElement('div');
        temp.innerText = res.main.temp;
        weatherDiv.appendChild(temp);
    });
})



// Add another console log here, outside your AJAX request
console.log("outside ajax")