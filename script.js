const API_KEY = `4d10368cdec44e16930151614241303`;
const form=document.querySelector("form");
const search=document.querySelector("#search")
const weather=document.querySelector("#weather");


// const API =`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metrics`;
// const IMG_URL="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"

const getWeather= async(city)=>{
    Weather.innerHTML=`<h2>Loading...</h2>`
const url = `http://api.weatherapi.com/v1/current.json?key=${API_KEY}&q=${city}&aqi=${API_KEY}&units=metric`;

    const response= await fetch(url)
    // console.log(response)
    const data=await response.json();

    console.log(data);


     return showWeather(data);
}

 const showWeather=(data)=>{
    Weather.innerHTML=`
   <div>
 <img src="https://openweathermap.org/img/wn/${data.current.condition.icon}@2x.png"  alt="">

   </div>
    <div><h2>${data.current.temp_c}℃</h2>                
    <h2>${data.current.condition.text}</h2>
    </div>

`

}


form.addEventListener("submit",function(event){
    getWeather(search.value);
event.preventDefault();
})