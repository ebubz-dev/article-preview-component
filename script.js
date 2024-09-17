// Desktop

let share = document.getElementById('share');
let popUp = document.getElementById('sharedesk');
let popUp2 = document.getElementById('sharedesktwo');
let flex = document.getElementById('flex');
let article = document.getElementById('article');
function clicked() {
    if (window.innerWidth > 1023) {
        if (popUp.style.display == 'flex') {
            popUp.style.display = 'none';
        } else {
            popUp.style.display = 'flex';
        }
    } else {
        flex.style.display = 'none';
        popUp2.style.display = 'flex';
        article.style.height = '230px';
        article.style.borderBottomLeftRadius = 0;
        article.style.borderBottomRightRadius = 0;
    }
};
function declicked() {
    if (window.innerWidth <=1023) {
        flex.style.display = 'flex';
        popUp2.style.display = 'none';
        article.style.height = '300px';
        article.style.borderRadius = '10px';
    }
}
