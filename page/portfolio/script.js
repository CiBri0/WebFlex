const image = document.getElementById('back');
const maxBlur = 16;
const cards = [document.getElementById('card-0'),
            document.getElementById('card-1'),
            document.getElementById('card-2'),
            document.getElementById('card-3'),
            document.getElementById('card-4'),]

const sections = ['title',
                'aboutMe',
                'projects',
                'contact']

const states = [document.getElementById("state-0"),
                document.getElementById("state-1")]
let currentCard = 0;
let currenSection = 0;
let pastScroll = 0;
// Function to update image blur based on scroll position
function updateImageBlur() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    let blurAmount = Math.min(scrollPosition / window.innerHeight * maxBlur, maxBlur);
    image.style.backdropFilter = `blur(${blurAmount}px)`;
}

function navbarBlur() {
    const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > window.innerHeight - 50) {
        document.getElementById("navbar").classList.remove("backdrop-blur-lg")
        document.getElementById("navbar").classList.add("bg-black")
    } else if (scrollPosition > 2 * (window.innerHeight - 50)) {
        document.getElementById("navbar").classList.add("text-white")
        document.getElementById("navbar").classList.add("bg-white")

    } else {
        document.getElementById("navbar").classList.add("backdrop-blur-lg")
        document.getElementById("navbar").classList.remove("bg-black")
    }
}


function navbarUp() {
    let scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
    if (scrollPosition > 0) {
        document.getElementById("navbar").classList.remove("-translate-y-24");
    } else {
        document.getElementById("navbar").classList.add("-translate-y-24");
    }
}


function goTo(addr) {
    var scrollDiv = document.getElementById(addr).offsetTop;
    currenSection = sections.indexOf(addr)
    window.scrollTo({top: scrollDiv, behavior: 'smooth'});
}

function changeCard(card) {
    if (currentCard == card) {
        currentCard = 0;
        selectCards(0)
        return
    }
    currentCard = card
    selectCards(card)
}

function selectCards(card) {
    for (let i = 0; i < cards.length; i++) {
        cards[i].style.display = "none";
    }
    cards[card].style.display = "block";
}

function switchState(addr) {
    console.log(states[addr].style.width)
    states[addr].style.width = "100%"
    if (addr == 0) {
        states[1].style.width = "0%"
        return
    }
    states[0].style.width = "0%"
}

function clipboard(text, id) {
    // Copier text dans le presse papier
    navigator.clipboard.writeText(text);
    element = document.getElementById(id)
    firstValue = element.innerText
    console.log(firstValue)
    element.innerText = "Copié ! ✅"
    setTimeout(function(){
        element.innerText = firstValue
    }, 1000);
}


function openInNewTab(url) {
    window.open(url, '_blank').focus();
}


window.addEventListener('scroll', navbarBlur);
window.addEventListener('scroll', navbarUp);
window.addEventListener('scroll', updateImageBlur);
