let ubicacionPrincipal = window.pageYOffset; //0

window.addEventListener("scroll", function(){
    let desplazaminentoActual = window.pageYOffset; //200
    if(unicacionPrincipal >= desplazaminentoActual){ //100 > 200
        document.getElementsByTagName("nav")[0].style.top = "0px"
    }else{
        document.getElementsByTagName("nav")[0].style.top ="-100px"
    }
    ubicacionPrincipal= desplazaminentoActual; 
})

// Menu

let enlacesHeader = document.querySelectorAll(".enlaces-header")[0];
let semaforo = true;

document.querySelectorAll(".hamburguer")[0].addEventListener("click", function(){
    if(semaforo){
        document.querySelectorAll(".hamburguer")[0].style.color ="#fff";
        semaforo= false;
    }else{
        document.querySelectorAll(".hamburguer")[0].style.color ="#000";
        semaforo= true;
    }
    enlacesHeader.classList.toggle("menudos")
})
