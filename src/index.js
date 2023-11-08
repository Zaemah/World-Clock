







function updateTime(){
    let harareElement= document.querySelector("#harare");
    if (harareElement){
    let harareDateElement= harareElement.querySelector(".date");
    let harareTimeElement= harareElement.querySelector(".time");
    let harareTime=moment().tz("Africa/Harare");
    
    harareDateElement.innerHTML=harareTime.format("MMMM Do, YYYY");
    harareTimeElement.innerHTML=harareTime.format("h.mm.ss[<small>]A[</small>]");
    }
    
    let dubaiElement= document.querySelector("#dubai");
    if (dubaiElement){
    let dubaiDateElement= dubaiElement.querySelector(".date");
    let dubaiTimeElement= dubaiElement.querySelector(".time");
    let dubaiTime=moment().tz("Asia/Dubai");
    
    dubaiDateElement.innerHTML=dubaiTime.format("MMMM Do, YYYY");
    dubaiTimeElement.innerHTML=dubaiTime.format("h.mm.ss[<small>]A[</small>]");
    }
    
    let dublinElement= document.querySelector("#dublin");
    if (dublinElement){
    let dublinDateElement= dublinElement.querySelector(".date");
    let dublinTimeElement= dublinElement.querySelector(".time");
    let dublinTime=moment().tz("Europe/Dublin");
    
    dublinDateElement.innerHTML=dublinTime.format("MMMM Do, YYYY");
    dublinTimeElement.innerHTML=dublinTime.format("h.mm.ss[<small>]A[</small>]");
    }
    
    let canberraElement= document.querySelector("#canberra");
    if(canberraElement){
    let canberraDateElement=canberraElement.querySelector(".date");
    let canberraTimeElement= canberraElement.querySelector(".time");
    let canberraTime=moment().tz("Australia/Canberra");
    
    canberraDateElement.innerHTML=canberraTime.format("MMMM Do, YYYY");
    canberraTimeElement.innerHTML=canberraTime.format("h.mm.ss[<small>]A[</small>]");
    }
    }
    updateTime();
    setInterval(updateTime, 1000);
    
