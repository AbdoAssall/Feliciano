let span = document.querySelector(".btn-up");

window.onscroll = function () {
    // console.log(this.scrollY);
    if (this.scrollY >= 486) {
        span.classList.add("show")
    } else {
        span.classList.remove("show");
    }
    //this.scrollY >= 486 ? span.classList.add("show") : span.classList.remove("show"); // shorthand
};

span.onclick = function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth",
    });
};