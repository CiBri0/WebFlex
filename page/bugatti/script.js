let pastScroll = 0;

function navbarUp() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

    let diff = scrollPosition - pastScroll;

    if (diff < 0) {
        document.getElementById("navbar").classList.remove("-translate-y-32");
    } else if (diff > 0) {
        document.getElementById("navbar").classList.add("-translate-y-32")

    }
    pastScroll = scrollPosition;
}



function goTo(addr) {
    var scrollDiv = document.getElementById(addr).offsetTop;
    currenSection = sections.indexOf(addr)
    window.scrollTo({top: scrollDiv, behavior: 'smooth'});
}

window.addEventListener('scroll', navbarUp);
