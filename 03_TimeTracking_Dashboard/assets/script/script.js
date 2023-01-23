"use strict";

const 
daily = document.querySelector('.slctDaily'),
weekly = document.querySelector('.slctWeekly'),
montlhy = document.querySelector('.slctMonthly'),
now = document.querySelectorAll('.now'),
previous = document.querySelectorAll('.previous');
let data;

async function handleFetch() {
    data = await fetch("./assets/data/data.json");
    if(data.ok === true){
        data = await data.json()
        daily.addEventListener("click", getData);
        weekly.addEventListener("click", getData);
        montlhy.addEventListener("click", getData);
    }
}
handleFetch();


function getData(e) {
    const time = e.target.textContent.toLowerCase() 
    switch (time) {
        case "daily":
            for(let i = 0; i < now.length; i++) {
                now[i].innerHTML = `Current : ${data[i].timeframes.daily.current}h`;
                previous[i].innerHTML =`Last day - ${data[i].timeframes.daily.previous}h`
            }
            break;
        case "weekly":
            for(let i = 0; i < now.length; i++) {
                now[i].innerHTML = `Current : ${data[i].timeframes.weekly.current}h`;
                previous[i].innerHTML =`Last week - ${data[i].timeframes.weekly.previous}h`
            }
                break;
        case "monthly":
            for(let i = 0; i < now.length; i++) {
            now[i].innerHTML = ` Current : ${data[i].timeframes.monthly.current}h`;
            previous[i].innerHTML =`Last month - ${data[i].timeframes.monthly.previous}h`
            }
            break;
                
        default:
            break;
    }
}