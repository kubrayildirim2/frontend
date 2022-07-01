

let inputContainer = document.getElementById("input-container");
let button = document.getElementById("submit-button");
button.addEventListener("click", function(){
    let input = document.getElementById("name-input")
    let name = input.value;
    inputContainer.innerHTML = "Welcome " + name;
   
} );

function showProjects(){
    document.getElementById("project-content").style.display = "block"
    
}

window.addEventListener("click", function(event){
    if(!event.target.matches("#projects-button")){
        
        document.getElementById("project-content").style.display = "none"
    }

})

let itemLijst = document.getElementById("itemLijst")
 
console.log(itemLijst.children)
 function toonItem(e){
    console.log(e.firstChild.nextSibling.innerHTML)
 for(let x = 0; x<itemLijst.children.length;x++){
console.log(itemLijst.children[x].lastChild.previousSibling.innerHTML)
if(itemLijst.children[x].firstChild.nextSibling.innerHTML == e.firstChild.nextSibling.innerHTML){
    itemLijst.children[x].lastChild.previousSibling.style.display = "block"
}else{
    itemLijst.children[x].lastChild.previousSibling.style.display = "none"
}
 }
 }






/*console.log(Number(num1.value))
let num2 = document.getElementById("num2")
let som;
let uitkomst = document.getElementById("uitkomst")
function bereken(){
 som = Number(num1.value) + Number(num2.value)
uitkomst.innerHTML = "De uitkomst is " + som
}*/
