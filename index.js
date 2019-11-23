let elementsArray= document.querySelectorAll(".menu_links");

elementsArray.forEach(function(elem){
    elem.addEventListener("click",function(){
        document.getElementById("menu-bar").checked= false;
    });
});