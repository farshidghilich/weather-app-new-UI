var searchInp = document.querySelector('.weather__search');
var city = document.querySelector('.weather__city');
var click=document.querySelector('.click')
var day = document.querySelector('.weather__day');
var humidity = document.querySelector('.weather__indicator--humidity>.value');
var wind = document.querySelector('.weather__indicator--wind>.value');
var pressure = document.querySelector('.weather__indicator--pressure>.value');
var image = document.querySelector('.weather__image');
var temperature = document.querySelector('.weather__temperature>.value');
var forecastBlock = document.querySelector('.weather__forecast');
// var a='https://api.openweathermap.org/data/2.5/forecast?&units=metric&appid=6300111c7a6205a6742fa040693a6fab'
// var url=`https://api.openweathermap.org/data/2.5/forecast?&appid=6300111c7a6205a6742fa040693a6fab`
var  weatherImages = [
    {
        url: 'images/clear-sky.png',
        ids: [800]
    },
    {
        url: 'images/broken-clouds.png',
        ids: [803, 804]
    },
    {
        url: 'images/few-clouds.png',
        ids: [801]
    },
    {
        url: 'images/mist.png',
        ids: [701, 711, 721, 731, 741, 751, 761, 762, 771, 781]
    },
    {
        url: 'images/rain.png',
        ids: [500, 501, 502, 503, 504]
    },
    {
        url: 'images/scattered-clouds.png',
        ids: [802]
    },
    {
        url: 'images/shower-rain.png',
        ids: [520, 521, 522, 531, 300, 301, 302, 310, 311, 312, 313, 314, 321]
    },
    {
        url: 'images/snow.png',
        ids: [511, 600, 601, 602, 611, 612, 613, 615, 616, 620, 621, 622]
    },
    {
        url: 'images/thnderstorm.png',
        ids: [200, 201, 202, 210, 211, 212, 221, 230, 231, 232]
    }
]

function getdata(){
    var cityname=searchInp.value
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname}&units=metric&appid=6300111c7a6205a6742fa040693a6fab`
    )
    .then(function(res){
        return res.json()
    })
    .then(function(data){
        city.innerHTML=data.name +' , '+ data.sys.country;
        day.textContent=dayOfWeek();
        pressure.innerHTML=data.main.pressure;
        wind.textContent=data.wind.speed;
        humidity.textContent=data.main.humidity;
        temperature.textContent=data.main.temp > 0 ? '+' + Math.round( data.main.temp):
        Math.round( data.main.temp);
        let imgID = data.weather[0].id;
        weatherImages.forEach(function(obj){
            if(obj.ids.includes(imgID)) {
                image.src = obj.url;
            }
         })
    
                                                            
    })
    .catch(() => {
       alert('please refresh and search for valid city')
    })


}
function dayOfWeek(){
  return new Date().toLocaleDateString("en-En" ,{'weekday':'long'});
}