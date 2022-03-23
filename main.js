let crossoff = document.querySelectorAll(".list-1 li");

let disappear = document.querySelectorAll(".list-2 li");
// let disappear = document.querySelector(".list-2");

let goAway = document.querySelectorAll("#row img");
// let goAway = document.querySelector("#row");

let destroyEverything = document.querySelector("#destroy-all");

crossOut();
makeDisappear();
dinoDeathRow();

//if I want to add function to an addEventListener (instead of an empty function) -> make sure there are no brackets after the function:
//  so -> eg. -> goAway.addEventListener("click", makeDisappear);

//but, this would only work if the document is not selected by querySelectorAll


// disappear.addEventListener("click", makeDisappear);
//=====================================================================

function crossOut(){
    for (let i = 0; i < crossoff.length; i++){
        let crossed = crossoff[i];

        crossed.addEventListener("click", function(){
            crossed.style.textDecoration = "line-through";
        })
    }  

}




function makeDisappear(){
    for (let i = 0; i < disappear.length; i++){
        let disappeared = disappear[i];

        disappeared.addEventListener("click", function(){
            disappeared.style.opacity = 0;
        })
    } 
    
}

//bubbling:
// let disappear = document.querySelector(".list-2");

// disappear.addEventListener("click", function(event){
//     event.target.style.opacity = 0;
// })

function dinoDeathRow(){
    for (let i = 0; i < goAway.length; i++){
        let gone = goAway[i];

        gone.addEventListener("click", function(){
            gone.style.width = "0";
        })
    // loop adds event listener to each img
    }

    // disappear.addEventListener("click", function(event){
    //    event.target.style.opacity = 0;
    // })
}

// function dino(){
//     //function to make img disappear
//     goAway.style.width = "0"; 
// }

// function meteorAll(){
//     makeDisappear()
// }

// destroyEverything.addEventListener("click", meteorAll);

destroyEverything.addEventListener("click", function(){

    // crossOut();
    // makeDisappear();
    // dino();

    for (let i = 0; i < crossoff.length; i++){
        let crossed = crossoff[i];
        crossed.style.textDecoration = "line-through";
    }

    for (let i = 0; i < disappear.length; i++){
        let disappeared = disappear[i];
        disappeared.style.opacity = 0;
    }

    for (let i = 0; i < goAway.length; i++){
        let gone = goAway[i];
        gone.style.width = "0";
    }
})