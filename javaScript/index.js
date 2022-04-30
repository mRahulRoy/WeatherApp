
let Am_Pm = "Am";
let dayAndTime = document.getElementById("dayAndTime");
let getWeatherBtn = document.getElementById("getWeatherBtn");
let cityInput = document.getElementById("cityInput");
let cityNCont = document.getElementById("cityNCont");
let normalTemp = document.getElementById("normalTemp");
let min_Max_Temp = document.getElementById("minmaxtemp");
let climateIcon = document.getElementById("icon");
let getWeekDays = new Array(7);
getWeekDays[0] = "Sun";
getWeekDays[1] = "Mon";
getWeekDays[2] = "Tue";
getWeekDays[3] = "Wed";
getWeekDays[4] = "Thur";
getWeekDays[5] = "Fri";
getWeekDays[6] = "Sat";

let getMonth = new Array(12);
getMonth[0] = "Jan";
getMonth[1] = "Feb";
getMonth[2] = "Mar";
getMonth[3] = "Apr";
getMonth[4] = "May";
getMonth[5] = "Jun";
getMonth[6] = "Jul";
getMonth[7] = "Aug";
getMonth[8] = "Sept";
getMonth[9] = "Oct";
getMonth[10] = "Nov";
getMonth[11] = "Dec";

let getTime = new Date();
let hour = getTime.getHours();
fullHour = `${hour}:${getTime.getMinutes()}`;
if (hour > 12) {
    hour -= 12;
    Am_Pm = "PM";
    fullHour = `${hour}:${getTime.getMinutes()}`;
}
console.log(fullHour);

dayAndTime.innerHTML = `${getWeekDays[getTime.getDay()]} | ${getMonth[getTime.getMonth()]} ${getTime.getDate()} | ${fullHour} ${Am_Pm}`;


getWeatherBtn.addEventListener("click", () => {
    let callApi = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput.value}&units=metric&appid=1228e58201cfee82dbab2054c3e0281d`;
    console.log(callApi);
    cityInput.value = "";
    fetch(callApi).then((res) => {
        return res.json();
    }).then((data) => {
        if (data.cod != "404") {
        
            cityNCont.innerHTML = `<h3 class="cityCountry">${data.name}-${data.sys.country}</h3>`;
            normalTemp.innerHTML = `<p class="temp main-temp" id="normalTemp">${data.main.temp}&deg;c</p>`
            min_Max_Temp.innerHTML = `<p class="minmaxtemp" id="minmaxtemp">Min Temp ${data.main.temp_min}&deg;c <br> Max Temp ${data.main.temp_max}&deg;c</p>`;
        } else {
        
            cityNCont.innerHTML = `<h3 class="cityCountry">${data.message}</h3>`;
            normalTemp.innerHTML = `<p class="temp main-temp" id="normalTemp"></p>`
            min_Max_Temp.innerHTML = `<p class="minmaxtemp" id="minmaxtemp"></p>`;
        }

        console.log(data);
    }).catch((err) => {
        console.log(err);
    })

});
