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

const PriceSelAmt=[10000,2999,150,1000];

window.addEventListener('DOMContentLoaded',init)
var CourseSelectDOM,PayPriceBtnAmtTextDOM,UPIDOM,UPIDBtnDOM;

function setPriceAmt(amt) {
    PayPriceBtnAmtTextDOM.innerText=AmtToStr(amt);
    const upihref="upi://pay?pa=purnajitasen47@oksbi&pn=Purnajita%20Sen&cu=INR&am="+amt;
    UPIDOM.setAttribute("href",upihref);
    UPIDBtnDOM.setAttribute("href",upihref);
}

function AmtToStr(a){
    let b=a+"";
    let l=(b.length-3)/2;
    let c="";
    let i;
    const isOdd=1-(b.length%2);
    if(isOdd==1 && l>0){
        c=b.charAt(0)+',';
    }
    for(i=isOdd;i<l;i++){
        const d=b.substring(i*2,(i+1)*2);
        c+=d+',';
    }
    c+=b.substring(b.length-3);
    return c;
}

function selectCourse(i){
    CourseSelectDOM.value=i;
    setPriceAmt(PriceSelAmt[i]);
}

function init(){
    CourseSelectDOM=document.getElementById("prodSel");
    PayPriceBtnAmtTextDOM=document.getElementById("joinFeesAmtSpan");
    UPIDOM=document.getElementById("upiID");
    UPIDBtnDOM=document.getElementById("upiIDbtn")
    CourseSelectDOM.addEventListener("change",()=>{
        setPriceAmt(PriceSelAmt[CourseSelectDOM.value]);
    });
    selectCourse(0);
}