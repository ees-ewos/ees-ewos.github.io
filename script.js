function toggleBurger() {
    document.querySelector(".hamburger-ul").classList.toggle("burger");
}

window.onscroll = function() {
    if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 10) {
        document.getElementById("to-top").style.display = "block";
    } else {
        document.getElementById("to-top").style.display = "none";
    }
};

function toTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}