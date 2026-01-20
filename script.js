scrollPad=20;
// Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href'))
            .scrollIntoView({ behavior: 'smooth' });
    });
});

document.addEventListener('contextmenu', (e) => {
    const t=e.target;
    const cn=t.className;
    console.log(cn);
    if(cn!="copyit")
        e.preventDefault()
});
var currentScrollY=0;
window.addEventListener('scroll', () => {
    const isScrollDown=window.scrollY>currentScrollY
    currentScrollY=window.scrollY;
    const currSecIndex=getCurrentSectionIndex();
    if(isScrollDown){
        if(isSectionScrollDownEnd()){
            gotoSection(currSecIndex+1);
        }
    }else{
        if(isSectionScrollTopEnd()){
            gotoSection(currSecIndex-1);
        }
    }
});

window.addEventListener('DOMContentLoaded',init)

function init(){
    sectionDOMs=document.getElementsByTagName("section");
}

var sectionDOMs;

function isSectionScrollDownEnd(){
    const i=getCurrentSectionIndex();
    const c=sectionDOMs[i];
    return window.innerHeight+currentScrollY>c.offsetTop+c.offsetHeight+scrollPad;
}

function isSectionScrollTopEnd(){
    const i = getCurrentSectionIndex();
    if (i <= 0) return false; // no section above
    const c = sectionDOMs[i];
    console.log(currentScrollY - (c.offsetTop - scrollPad));
    return currentScrollY <= c.offsetTop - scrollPad;
}


function getCurrentSectionIndex(){
    let i;
    for(i=0;i<sectionDOMs.length;i++){
        const element=sectionDOMs[i];
        const h=element.offsetTop;
        if(h>currentScrollY+window.innerHeight/2){
            return i-1;
        }
    }
}

function gotoSection(i){
    sectionDOMs[i].scrollIntoView({ behavior: 'smooth' });
}