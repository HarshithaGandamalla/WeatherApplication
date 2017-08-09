var w = document.getElementById("weather");
var btn=document.getElementById("btn_id");
var temp=document.getElementById("temp");
btn.addEventListener('click',toggleScale);


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
         
             var img=document.createElement('img');
             
             img.src= loc.weather[0].icon;
             img.alt="Not available";
             img.width=304;
             img.height=236;
             w.innerText=loc.name+", "+loc.sys.country+" \n"+loc.weather[0].main;
             temp.innerText=loc.main.temp;
             console.log(loc.weather[0]);
         
        });
    
}

function toggleScale(){
    var content = btn.textContent;
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
        updatedtemp=(parseInt(value)-32)/1.8;

    }
    
    btn.textContent=updated;
    temp.textContent=updatedtemp;
    

}



