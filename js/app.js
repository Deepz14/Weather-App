const form = document.querySelector('.form-sub')
const input = document.querySelector('.form-inp')
const cityName = document.querySelector('.city-name')
const icon = document.querySelector('.weather-icon')
const celcius = document.querySelector('.celcius')
const type = document.querySelector('.type')
const humidity = document.querySelector('.humidity')
const displayResult = document.querySelector('.card-col')

form.addEventListener('submit', (e) => {
    e.preventDefault()
    
    gettingData(input.value);
})

const gettingData = async(city) => {

    await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=bcee23c4399e604109a331780a93ca2b`) 
    .then(res => {
        if (!res.ok) { throw res }
        return res.json()
    })
    .then(data => {

        const temp = data.main.temp;

        const tempCelcius = Math.floor(temp - 273.15)

        icon.src = `./icons/${data.weather[0].icon}.png`

        cityName.textContent = data.name

        celcius.innerHTML = `${tempCelcius} &ordmc`

        type.textContent = data.weather[0].main

        humidity.textContent = `Humidity : ${data.main.humidity} %`

        input.value = ''
    })
    .catch(err => {
        displayResult.innerHTML = `<h2>City Not Found!!</h2>`
    })
    
}