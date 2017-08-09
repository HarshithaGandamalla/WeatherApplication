var w = document.getElementById("weather");
var btn=document.getElementById("btn_id");
var temp=document.getElementById("temp");
var tempunit=document.getElementById("tempunit");
var currentCelsius;
tempunit.addEventListener('click',toggleScale);


function currentWeather(){

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        w.innerText="Geolocation is not supported by this browser.";
    }

}


function showPosition(position) {
    console.log("Latitude: " + position.coords.latitude + 
    "<br>Longitude: " + position.coords.longitude); 
    
     $.ajax({
           url:'https://fcc-weather-api.glitch.me/api/current?lat='+position.coords.latitude+'&lon='+position.coords.longitude,
        }).done(function(loc){
         
             
             var txt = document.createTextNode("Celsius");

             w.innerText=loc.name+", "+loc.sys.country+" \n"+loc.weather[0].main;
             currentCelsius=loc.main.temp;
            
             tempunit.textContent="Celsius";

             temp.textContent=loc.main.temp+" "+String.fromCharCode(176)+" ";
        });
    
}

function toggleScale(){
    var content = tempunit.textContent; //c or F
    var value = temp.textContent;
    var updatedtemp;

    if(content=="Celsius")
    {
        updated="Farenheit";
        updatedtemp=parseInt(value)*1.8+32;
    }
    else
    {
        updated="Celsius";
        updatedtemp=currentCelsius;

    }

        temp.textContent=updatedtemp+" "+String.fromCharCode(176);
        tempunit.textContent=updated;

    

}



