const body = document.getElementById('body')
const red =document.getElementById('red')
const green =document.getElementById('green')
const orange= document.getElementById('orange')
const blue= document.getElementById('blue')
const yellow= document.getElementById('yellow')
const indigo= document.getElementById('indigo')
const violet= document.getElementById('violet')
const random= document.getElementById('random')
const colors=['violet','indigo','yellow','blue','orange','green','red','antiquewhite','darkblue'];

red.addEventListener("click",function onClick(red){
body.style.backgroundColor = "red";
return red;
});

green.addEventListener("click",function onClick(green){
body.style.backgroundColor = "green";
return green;
});

orange.addEventListener("click",function onClick(orange){
body.style.backgroundColor = "orange";
return orange;
});

yellow.addEventListener("click",function onClick(yellow){
    body.style.backgroundColor ="yellow";    
    return yellow;
});

blue.addEventListener("click",function onClick(blue){
    body.style.backgroundColor ="blue";    
    return blue;
});

indigo.addEventListener("click",function onClick(indigo){
    body.style.backgroundColor ="indigo";    
    return indigo;
});

violet.addEventListener("click",function onClick(violet){
    body.style.backgroundColor ="violet";    
    return violet;
});

random.addEventListener("click",function onClick(random){
       random=parseInt(Math.random()*colors.length);
       body.style.backgroundColor=colors[random];
       return random;
});
