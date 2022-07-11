let menu = document.getElementById('menu');
let menuDiv = document.getElementById('link_div');
let links = document.getElementById('page_links');
let isShown = false;



menu.addEventListener("click", showMenu);
links.addEventListener('click', showMenu);


function showMenu(){

    if(isShown === false){
        menuDiv.style.top = "100%";
        isShown = true;
    }else if(isShown === true){
        menuDiv.style.top = "-600%";
        isShown = false;
    }
    console.log("sdad");
}