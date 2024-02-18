import { icp_final_backend } from "../../declarations/icp_final_backend";
const date = new Date();

let hours = date.getHours();
let minutes = date.getMinutes();
let day = date.getDate();
let month = date.getMonth() + 1;
let year = date.getFullYear();
document.getElementById("datetime").innerText = `${hours}:${minutes} , ${day}-${month}-${year}`;

let get_weather_form = document.getElementById("get_weather_form")

get_weather_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  const button = e.target.querySelector("button");
  const name = document.getElementById("name").value.toString();

  button.setAttribute("disabled", true);
  get_weather_data(name);
  button.removeAttribute("disabled");

  return false;
});

let mint_form = document.getElementById("mint_form");
mint_form.addEventListener("submit", async (e) => {
  e.preventDefault();
  document.getElementById("alert").className="alert_hidden";

  const button = e.target.querySelector("button");
  const principal = document.getElementById("principal").value.toString();
  const city = document.getElementById("city").value.toString();
  const input_weather_condition = document.getElementById("input_weather_condition").value.toString();

  button.setAttribute("disabled", true);
  mint(principal,city,input_weather_condition);
  button.removeAttribute("disabled");

  get_weather_data(city);
  return false;
});



async function mint(principal,city,input_weather_condition){
  const mint_result = await icp_final_backend.mintDip721(principal,city,input_weather_condition);
  console.log(mint_result);
  let success = mint_result["Ok"];
  if (success == undefined) {
    let fail = mint_result["Err"];
    document.getElementById("alert").className="alert_show";
    document.getElementById("alert").setAttribute('style', 'background-color:' + 'red'  + ';');
    document.getElementById("alert").innerText=`FAILURE!!! REASON: ${Object.keys(fail)[0]}`;
  }

  else{

    document.getElementById("alert").className="alert_show";
    document.getElementById("alert").setAttribute('style', 'background-color:' + 'green'  + ';');
    document.getElementById("alert").innerText=`MINT IS SUCCESSFUL`;
  }

  console.log(success);


}

async function get_weather_data(name){
  const api_data = await icp_final_backend.get_weather_by_city_name(name);
  document.getElementById("city_name").innerText = name

  // let obj = JSON.parse(JSON.stringify(api_data));
  // let error = api_data["Err"];
  let data = api_data["Ok"];
  if (data == undefined) {
    document.getElementById("temprature").innerText = "-"
    document.getElementById("weather_condition").innerText = "-"
    document.getElementById("humidity").innerText = "-"
    document.getElementById("wind").innerText = "-"
    document.getElementById("wind_direction").innerText = "-"

  }
  else {
    console.log(data);
    document.getElementById("temprature").innerText = `${data["main"].temp}\xB0C `
    document.getElementById("weather_condition").innerText = data["weather"][0]["main"]
    document.getElementById("humidity").innerText = data["main"].humidity;
    document.getElementById("wind").innerText = `${data["wind"].speed} km/h`;
    document.getElementById("wind_direction").innerHTML = `${data["wind"].deg}&deg;`

    var weather_icon_id = data["weather"][0]["id"];
    var weather_icon_result = Math.trunc(weather_icon_id/100);
    if(weather_icon_id !=800 && weather_icon_result==8){
      weather_icon_result="8x"
    }
    console.log(weather_icon_result);
    document.getElementById("weather_icon").src = `${weather_icon_result}.png`
  }

  const date = new Date();

  let hours = date.getHours();
  let minutes = date.getMinutes();
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  document.getElementById("datetime").innerText = `${hours}:${minutes} , ${day}-${month}-${year}`;

}


document.getElementById("london").onclick = function(){
  get_weather_data("London")
}
document.getElementById("istanbul").onclick = function(){
  get_weather_data("Istanbul")
}
document.getElementById("california").onclick = function(){
  get_weather_data("California")
}
document.getElementById("sydney").onclick = function(){
  get_weather_data("Sydney")
}
