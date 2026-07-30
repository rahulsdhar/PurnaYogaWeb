AOS.init({
    duration: 800,
    once: true,
    offset: 100
});

window.addEventListener('scroll', function () {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            const headerOffset = 80;
            const elementPosition = targetElement.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth"
            });
        }
    });
});

document.addEventListener('contextmenu', (e) => {
    const t = e.target;
    const cn = t.className;
    if (!cn.includes("copyit")) e.preventDefault();
});

const PriceSelAmt = [10000, 2999, 150, 1000];
var CourseSelectDOM, PayPriceBtnAmtTextDOM, UPIDOM, UPIDBtnDOM;

window.addEventListener('DOMContentLoaded', init);

function setPriceAmt(amt) {
    PayPriceBtnAmtTextDOM.innerText = AmtToStr(amt);
    const upihref = "upi://pay?pa=purnajitasen47@oksbi&pn=Purnajita%20Sen&cu=INR&am=" + amt;
    UPIDOM.setAttribute("href", upihref);
    UPIDBtnDOM.setAttribute("href", upihref);
}

function AmtToStr(a) {
    let b = a + "";
    let l = Math.floor((b.length - 3) / 2);
    let c = "";
    let i;
    const isOdd = 1 - (b.length % 2);
    if (isOdd == 1 && l > 0) {
        c = b.charAt(0) + ',';
    }
    for (i = isOdd; i < l; i++) {
        const d = b.substring(i * 2, (i + 1) * 2);
        c += d + ',';
    }
    c += b.substring(b.length - 3);
    return c;
}

function selectCourse(i) {
    if (CourseSelectDOM) {
        CourseSelectDOM.value = i;
        setPriceAmt(PriceSelAmt[i]);
    }
}

function init() {
    CourseSelectDOM = document.getElementById("prodSel");
    PayPriceBtnAmtTextDOM = document.getElementById("joinFeesAmtSpan");
    UPIDOM = document.getElementById("upiID");
    UPIDBtnDOM = document.getElementById("upiIDbtn");
    if (CourseSelectDOM) {
        CourseSelectDOM.addEventListener("change", () => {
            setPriceAmt(PriceSelAmt[CourseSelectDOM.value]);
        });
        selectCourse(0);
    }
}