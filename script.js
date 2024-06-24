let btnMenu = document.querySelector(".btn-menu");
let btnClose = document.querySelector(".btn-close");

let mobileMenu = document.querySelector(".main-menu");

btnMenu.addEventListener("click", () => {
    if(mobileMenu.classList.contains("animate__fadeOutRight")) {
        mobileMenu.classList.remove("animate__fadeOutRight");
    }

    mobileMenu.style.display = "block";
    mobileMenu.classList.add("animate__fadeInRight");

    if(!document.querySelector(".overlay")) {
        let overlay = document.createElement("div");
        overlay.classList.add("overlay");
        document.body.append(overlay);
    }
})

btnClose.addEventListener("click", () => {
    if(mobileMenu.classList.contains("animate__fadeInRight")) {
        mobileMenu.classList.remove("animate__fadeInRight");
    }

    mobileMenu.classList.add("animate__fadeOutRight");

    document.querySelector(".overlay").remove();
})