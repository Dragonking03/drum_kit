var numberOfDrums= document.querySelectorAll(".drum").length;

for(var i = 0; i<numberOfDrums; i++){
    
    document.querySelectorAll(".drum")[i].addEventListener("click",function (){
       
        var buttonInnerHTML= this.innerHTML;
        makeSound(buttonInnerHTML);
        buttonANimation(buttonInnerHTML);

    });

}

document.addEventListener("keydown", function(event){
    makeSound(event.key);
    buttonANimation(event.key);
})

function makeSound(key){
    switch(key){
        case "w":
            new Audio("sounds/crash.mp3").play();
            break;
        case "a":
            new Audio("sounds/kick-bass.mp3").play();
            break;
        case "s":
            new Audio("sounds/snare.mp3").play();
            break;
        case "d":
            new Audio("sounds/tom-1.mp3").play();
            break;
        case "j":
            new Audio("sounds/tom-2.mp3").play();
            break;
        case "k":
            new Audio("sounds/tom-3.mp3").play();
            break;
        case "l":
            new Audio("sounds/tom-4.mp3").play();
            break; 
            
        default:console.log();
       }
}

function buttonANimation(currentKey){
    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add("pressed");
    setTimeout(function(){activeButton.classList.remove("pressed");},150);
}