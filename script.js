const envolturaAl = document.querySelector(".envoltura-sobreAl");
const cartaAl = document.querySelector(".cartaAl");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobreAl") || 
        e.target.matches(".solapa-derechaAl") ||
        e.target.matches(".solapa-izquierdaAl") ||
        e.target.matches(".corazonAl")) {
        envolturaAl.classList.toggle("abiertoAl");
      
    } else if (e.target.matches(".sobreAl *")) {
        if (!cartaAl.classList.contains("abiertaAl")) {
            cartaAl.classList.add("mostrar-cartaAl");

            setTimeout(() => {
                cartaAl.classList.remove("mostrar-cartaAl");
                cartaAl.classList.add("abiertaAl");
            }, 500);
            envolturaAl.classList.add("desactivar-sobreAl")
        } else {
            cartaAl.classList.add("cerrando-cartaAl");
            envolturaAl.classList.remove("desactivar-sobreAl");

            setTimeout(() => {
                cartaAl.classList.remove("cerrando-cartaAl")
                cartaAl.classList.remove("abiertaAl")
            }, 500);
        }

    } 
})

const envolturaAn = document.querySelector(".envoltura-sobreAn");
const cartaAn = document.querySelector(".cartaAn");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobreAn") || 
        e.target.matches(".solapa-derechaAn") ||
        e.target.matches(".solapa-izquierdaAn") ||
        e.target.matches(".corazonAn")) {
        envolturaAn.classList.toggle("abiertoAn");
      
    } else if (e.target.matches(".sobreAn *")) {
        if (!cartaAn.classList.contains("abiertaAn")) {
            cartaAn.classList.add("mostrar-cartaAn");

            setTimeout(() => {
                cartaAn.classList.remove("mostrar-cartaAn");
                cartaAn.classList.add("abiertaAn");
            }, 500);
            envolturaAn.classList.add("desactivar-sobreAn")
        } else {
            cartaAn.classList.add("cerrando-cartaAn");
            envolturaAn.classList.remove("desactivar-sobreAn");

            setTimeout(() => {
                cartaAn.classList.remove("cerrando-cartaAn")
                cartaAn.classList.remove("abiertaAn")
            }, 500);
        }

    } 
})

const envolturaJa = document.querySelector(".envoltura-sobreJa");
const cartaJa = document.querySelector(".cartaJa");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobreJa") || 
        e.target.matches(".solapa-derechaJa") ||
        e.target.matches(".solapa-izquierdaJa") ||
        e.target.matches(".corazonJa")) {
        envolturaJa.classList.toggle("abiertoJa");
      
    } else if (e.target.matches(".sobreJa *")) {
        if (!cartaJa.classList.contains("abiertaJa")) {
            cartaJa.classList.add("mostrar-cartaJa");

            setTimeout(() => {
                cartaJa.classList.remove("mostrar-cartaJa");
                cartaJa.classList.add("abiertaJa");
            }, 500);
            envolturaJa.classList.add("desactivar-sobreJa")
        } else {
            cartaJa.classList.add("cerrando-cartaJa");
            envolturaJa.classList.remove("desactivar-sobreJa");

            setTimeout(() => {
                cartaJa.classList.remove("cerrando-cartaJa")
                cartaJa.classList.remove("abiertaJa")
            }, 500);
        }

    } 
})

const envolturaMa = document.querySelector(".envoltura-sobreMa");
const cartaMa = document.querySelector(".cartaMa");

document.addEventListener("click", (e) => {
    if (e.target.matches(".sobreMa") || 
        e.target.matches(".solapa-derechaMa") ||
        e.target.matches(".solapa-izquierdaMa") ||
        e.target.matches(".corazonMa")) {
        envolturaMa.classList.toggle("abiertoMa");
      
    } else if (e.target.matches(".sobreMa *")) {
        if (!cartaMa.classList.contains("abiertaMa")) {
            cartaMa.classList.add("mostrar-cartaMa");

            setTimeout(() => {
                cartaMa.classList.remove("mostrar-cartaMa");
                cartaMa.classList.add("abiertaMa");
            }, 500);
            envolturaMa.classList.add("desactivar-sobreMa")
        } else {
            cartaMa.classList.add("cerrando-cartaMa");
            envolturaMa.classList.remove("desactivar-sobreMa");

            setTimeout(() => {
                cartaMa.classList.remove("cerrando-cartaMa")
                cartaMa.classList.remove("abiertaMa")
            }, 500);
        }

    } 
})