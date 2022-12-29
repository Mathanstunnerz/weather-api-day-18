var button_main = document.querySelector("#mainbutton")
var sumbit_button = document.querySelector("#mainbutton")
sumbit_button.addEventListener("click",()=>{
    var input_button = document.querySelector("#input_value")
      var final_out = input_button.value
      var lat = final_out 
      input_button.value = ""



var api = `https://api.openweathermap.org/data/2.5/weather?q=${lat}&appid=c5425e40bf3333e8c031caaebee2e09c`
async function getWeather(){
    try{
    var weather = await fetch(api)
    var weatherData =  weather.json()
    weatherData
    .then((res)=>{
    //    console.log(res);
       var name = res.name;
       var card_locationname = document.querySelector(".card-title")
    card_locationname.innerText = `City Name : ${name}`
       var country = res.sys.country;
       var temp= res.main.temp
       var pressure = res.main.pressure
       var sea_level = res.main.sea_level
       var temp_max= res.main.temp_max
       var temp_min= res.main.temp_min
       var card_tempname = document.querySelector(".tempcontent")
       card_tempname.innerHTML = `
       <span>Pressure : ${pressure}</span><br>
       <span>Temp : ${temp}</span><br>
       <span>temp_max : ${temp_max}</span><br>
       <span>temp_min : ${temp_min}</span><br>`
    //    console.log(name)
    //    console.log(country)
    //    console.log(temp)
    
var api2 ="https://restcountries.com/v2/all"
fetch(api2)
.then((res)=>{
    
    // console.log("successfully")
    return res.json();
})
.then((res)=>{
    var filter_lost = res.filter((ele)=>ele.alpha2Code===`${country}`)
    var name_value = filter_lost[0].name
    var card_countryname = document.querySelector(".list-group-item_1")
    card_countryname.innerText = `Country : ${name_value}`
    var capital_value = filter_lost[0].capital
    var card_capitalname = document.querySelector(".list-group-item_2")
    card_capitalname.innerText = `Capital : ${capital_value}`
    var region_value = filter_lost[0].region
    var card_regionname = document.querySelector(".list-group-item_3")
    card_regionname.innerText = `Region : ${region_value}`
    var flag_value = filter_lost[0].flags.png
    var card_img= document.querySelector(".card-img-top")
    card_img.setAttribute("src",flag_value)
    var card_body= document.querySelector(".card_body")
    card_body.style.display = "block"

    // console.log(name_value)
    // console.log(capital_value)
    // console.log(region_value)
    // console.log(flag_value)
    // console.log(filter_lost )

})
.catch((err)=>{
    // console.log(err)
    console.log("failed")
})
        // for(let i of res){
        // console.log(i);
        // console.log("successful")
        
    })
    }
    catch(rej){
        // console.log(rej);
        console.log("rejected")

    }

}
getWeather()



})
