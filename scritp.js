const items = document.querySelector(".sec-items");
const icon = document.querySelector(".fa-solid");
const getColor = document.querySelector(".color"); 


// want to change the background color when mouse is hover
//want to add tooltip effect to my icon with css
function myfunction(){
    document.querySelector(".sec-items").style.backgroundColor = 'yellow'
}

items.addEventListener('mouseover', myfunction());




icon.addEventListener('mouseover', function(
    // style.backgroundColor = #ececeec4;
//    icon.textContent = getColor
));



