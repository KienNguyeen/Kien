const apiKey = 'b9445f3894c2b629c50bbf75248029fd ';
const DEFAULT_VALUE = '--';
const searchInput = document.getElementById("search-input");
const cityName = document.getElementById
searchInput.addEventListener (
    "change",(req) => {
        fetch(`https://api.openweathermap.org/data/2.5/weather?q=${req.target.value}&appid=${apiKey}`)
        .then(response => response.json())
        .then((data) => {
            cityName.innerHTML = data.name || DEFAULT_VALUE
        })
    }
)