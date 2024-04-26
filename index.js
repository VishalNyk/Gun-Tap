var numberofWeapons=document.querySelectorAll(".weapon").length;
for(var i=0;i<numberofWeapons;i++){
    document.querySelectorAll(".weapon")[i].addEventListener("click",handleclick);
}
function handleclick(){
    var button=this.innerHTML;
    //alert(button);
    makesound(button);
    makeAnimation(button);
}
function makesound(key){
    switch(key){
        case "1":
            var audio1=new Audio("./sounds/akmtap.mp3");
            audio1.play();
            break;
        case "2":
            var audio2=new Audio("./sounds/dp28.mp3");
            audio2.play();
            break;
        case "3":
            var audio3=new Audio("./sounds/kar98.mp3");
            audio3.play();
            break;
        default:
            console.log("Sorry");
            break;
    }
}

document.addEventListener("keypress", function(event){
    makesound(event.key);
    makeAnimation(event.key);
});

function makeAnimation(word){
    var Current=document.querySelector("."+word);
    Current.classList.add("pressed");
    setTimeout(function(){
        Current.classList.remove("pressed");
    },100);
}

