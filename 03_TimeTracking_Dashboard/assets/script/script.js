"use strict";


/* 
* toute la logique de ce script repose sur fetch.
todo Voir comment faire fonctionner fetch.
Demande d'effacer l'entrée main et de garder les div, p vide. Il faudra alors totalement
manipuler le DOM.

*/
const 
items = document.querySelectorAll('.item-container'),
daily = document.querySelector('.slctDaily'),
weekly = document.querySelector('.slctWeekly'),
montlhy = document.querySelector('.slctMonthly'),
now = document.querySelectorAll('.now'),
previous = document.querySelectorAll('.now');

fetch("assets/data/data.json").then(response =>{
    if(response.ok)
    {
        response.json()
        .then(traitement)
        .catch(error => console.log(error))
    }
});

function traitement(data)
{
    console.log(data.length)

    // La boucle for permet d'avancer dans les données JSON
    for(let i=0; i<data.length; i++){
        console.log(data[i].title)
        console.log(`${data[i].title}
        now = ${data[i].timeframes.daily.current}hrs
        previous = ${data[i].timeframes.daily.previous} hrs`
        )

        /* 
        Permet d'afficher les éléments récupérés du JSON et les stocker dans l'HTML.
        todo affichage daily/weekly/monthly à gérer
        */
        items[i].innerHTML =
        `<h3 class="item-title">${data[i].title}</h3>
        <p class="now">${data[i].timeframes.daily.current} hr(s)</p>
        <p class="previous"> Last day : ${data[i].timeframes.daily.previous} hr(s)</p>`
        
        
    } // end loop for
}
