



function updateTime(){
let harareElement= document.querySelector("#harare");
if (harareElement){
let harareDateElement= document.querySelector(".date");
let harareTimeElement= document.querySelector(".time");
let harareTime=moment().tz("Africa/Harare");

harareDateElement.innerHTML=harareTime.format("MMMM Do, YYYY");
harareTimeElement.innerHTML=harareTime.format("h.mm.ss[<small>]A[</small>]");
}

let dubaiElement= document.querySelector("#dubai");
if (dubaiElement){
let dubaiDateElement= document.querySelector(".date");
let dubaiTimeElement= document.querySelector(".time");
let dubaiTime=moment().tz("Asia/Dubai");

dubaiDateElement.innerHTML=dubaiTime.format("MMMM Do, YYYY");
dubaiTimeElement.innerHTML=dubaiTime.format("h.mm.ss[<small>]A[</small>]");
}

let johannesburgElement= document.querySelector("#johannesburg");
if (johannesburgElement){
let johannesburgDateElement= document.querySelector(".date");
let johannesburgTimeElement= document.querySelector(".time");
let johannesburgTime=moment().tz("Africa/Johannesburg");

johannesburgDateElement.innerHTML=johannesburgTime.format("MMMM Do, YYYY");
johannesburgTimeElement.innerHTML=johannesburgTime.format("h.mm.ss[<small>]A[</small>]");
}

let canberraElement= document.querySelector("#canberra");
if(canberraElement){
let canberraDateElement= document.querySelector(".date");
let canberraTimeElement= document.querySelector(".time");
let canberraTime=moment().tz("Australia/Canberra");

canberraDateElement.innerHTML=canberraTime.format("MMMM Do, YYYY");
canberraTimeElement.innerHTML=canberraTime.format("h.mm.ss[<small>]A[</small>]");
}
}
updateTime();
setInterval(updateTime, 1000);
