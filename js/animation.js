function startanim() {
    console.log("start");
    var slide1 = document.getElementById("slide1");
    if (slide1.style.display == "none") {

    } else {
        TweenMax.to('.innercircle', 2, { scale: 1, opacity: 1, ease: Circ.easeOut });
    }

}