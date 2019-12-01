$(document).ready(function () {
    // document load ready
    console.log("ready!");

    var cities = [];

    function appendCityToArray(city) {
        cities.push(city);
    }

    function appendCityToResults(city, country) {
        var ulResults = $('#ulResults');
        var liCity = $("<li class='list-group-item list-group-item-action' id='city' data-city='" + city + "'>" + city + ", " + country + "</li>");
        liCity.attr('id', city);
        ulResults.append(liCity);
    }

    function saveCitiesToLocalStorage() {
        // load cities from local storage
        // fillout forecast
        // click today's forecast
        cities.forEach(element => {
            var city = $('#city' + i).val();
            localStorage.setItem('city' + i, city);
            //cities.push(city);
        });

    }

    function loadCitiesFromLocalStorage() {
        // load cities from local storage
        // fillout forecast
        // click today's forecast

        localStorage.forEach(element => {
            var city = localStorage.getItem("city" + i);
            $('#city' + i).val(city);
            cities.push(city);
        });
    }

    function sortCities() {
        // fillout forecast
        // click today's forecast
    }

    $("#btnSearch").click(function () {
        // call api
        callApiWeather();
        // validate response for duplicates
        // append response to array
        // render into results

        // fillout forecast
        // click today's weather 
    });

    function callApiWeather() {
        event.preventDefault();
        // api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=a82f7838d9bc5ddc11629dc07f5c394c
        var apiUrl = "https://api.openweathermap.org/data/2.5/weather"
        var searchCity = $('#searchCity').val();
        var appId = "a82f7838d9bc5ddc11629dc07f5c394c";
        var queryURL = apiUrl + "?q=" + searchCity + "&APPID=" + appId;
        $.ajax({
            url: queryURL
        })
            .then(function (data) {
                if (data.cod === 200) {
                    appendCityToArray(data.name);
                    appendCityToResults(data.name, data.sys.country);
                }
            });
    }
});
