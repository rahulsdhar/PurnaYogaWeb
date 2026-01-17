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