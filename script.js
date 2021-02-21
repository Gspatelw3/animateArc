
let element = document.querySelectorAll('svg');

animateArc = (el) => {
    let mainV = 484;
    let currentVal = el.getAttribute('data-value');
    let cv = 100 - currentVal;
    let d = cv * mainV / 100;
    let v = cv / 10;
    let endV = mainV * v / 10;
    let i = 0;
    let timer = setInterval(function () {
        let vl = mainV - i++;
        if (vl < endV) {
            clearInterval(timer);
        }
        el.setAttribute('stroke-dashoffset', vl);
    })
}

for(let i = 0; i < element.length; i++ ){
    animateArc(element[i]);
}

