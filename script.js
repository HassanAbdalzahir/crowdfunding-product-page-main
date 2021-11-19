const el = (e) => {
    if (e.charAt(0) == '#') {
        return document.querySelector(e);
    }
    return document.querySelectorAll(e);
}

const linksButton = el('.listButton svg')[0];
let navLinks = el('.navbar .links')[0];

window.onclick = (e) => {
    if (e.target == linksButton) {
        navLinks.classList.toggle('active')
    }
    else if (e.target == navLinks) {
        navLinks.classList.remove('active')
    }
}