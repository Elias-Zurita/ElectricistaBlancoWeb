/* AMPLIACION DE IMAGENES */

const fullImgBox = document.getElementById("fullImgBox"),
fullImg = document.getElementById("fullImg");

/* Abrir imagen fullScreen */
function openFullImg(reference){
    fullImgBox.style.display = "flex";
    fullImg.src = reference /* reference hace alucion al (this.scr) de cada imagen */
}
/* Cerrar imagen fullScreen */
function closeFullImg(){
    fullImgBox.style.display = "none";
}

/* IR HACIA ARRIBA DE TODO CON BOTÓN */
document.querySelector(".arriba") /*selecciono la clase del div (del boton) */
.addEventListener("click", () =>{ /* al hacer click */
    window.scrollTo({  /* la ventana subira arriba de todo en modo smooth (suave) */
        top:0, 
        behavior: "smooth"
    })
})