// button pressed
let numberOfButtons= document.querySelectorAll(".drum").length;

for(let i=0;i<numberOfButtons;i++){
    document.querySelectorAll("button")[i].addEventListener("click",function(){
        let buttonInnerHTML= this.innerHTML;

       keyPressed(buttonInnerHTML);
       buttonAnimation(buttonInnerHTML);
    });
}


// keyboard pressed
document.addEventListener("keydown",function(event){
    keyPressed(event.key);    
    buttonAnimation(event.key);
})


function keyPressed(key){
    switch (key) {
        case "w":
            let tom1=new Audio('sound/tom-1.mp3');
            tom1.play();
            break;
        case"a":
            let tom2=new Audio("sound/tom-2.mp3");
            tom2.play();
            break;
        case"s":
            let tom3=new Audio("sound/tom-3.mp3");
            tom3.play();
            break;
        case"d":
            let tom4=new Audio("sound/tom-2.mp3");
            tom4.play();
            break;
        case"j":
            let crash=new Audio("sound/crash.mp3");
            crash.play();
            break;
        case"k":
            let kick=new Audio("sound/kick-bass.mp3");
            kick.play();
            break;
        case"l":
            let snare= new Audio ("sound/snare.mp3");
            snare.play();
            break;
        
        default:
            console.log(buttonInnerHTML);
            break;
    }
}
function buttonAnimation(currentkey){
    let activeButton= document.querySelector("."+ currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function(){
        activeButton.classList.remove("pressed")
    },100);
}



    
