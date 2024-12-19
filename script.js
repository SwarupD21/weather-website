const loca=document.getElementById("name");
const butt=document.getElementById("clicking");

const cname=document.getElementById("CityName");
const ctime=document.getElementById("CityTime");
const ctemp=document.getElementById("Temp");

async function getData(cityValue){
    const promise=await fetch(`http://api.weatherapi.com/v1/current.json?key=dfab97e9d5d248eeb6d70914241812&q=${cityValue}&aqi=yes`);
    return await promise.json();
}


butt.addEventListener("click",async ()=>{
    const value=loca.value;
    const result=await getData(value);
    cname.innerText=`${result.location.name},${result.location.region} - ${result.location.country}`;
    ctime.innerText=`${result.location.localtime}`;
    ctemp.innerText=`In Celsius: ${result.current.temp_c}  ,  In Farenheit: ${result.current.temp_f}`;
});