let pricef = document.getElementById('pr1')
let pricem = document.getElementById('pr2')
let quantityf = document.getElementById('quan1')
let quantitym = document.getElementById('quan2')
let resultf = document.getElementById('result1')
let resultm = document.getElementById('result2')
let result = document.getElementById('result3')
let calc = document.getElementById('rbtn')

let resultf1
let resultm1

function calculateandDisplay(){
     resultf1 =parseFloat(eval(`${pricef.innerText}*${quantityf.value}`)).toFixed(2);

    resultf.innerText = resultf1
    resultm1 =parseFloat(eval(`${pricem.innerText}*${quantitym.value}`)).toFixed(2);
    
    resultm.innerText = resultm1
}

pricef.addEventListener('input', calculateandDisplay)
quantityf.addEventListener('input', calculateandDisplay)



pricem.addEventListener('input', calculateandDisplay)
quantitym.addEventListener('input', calculateandDisplay)


calc.addEventListener('click', ()=>{
    var resultc =eval(`${resultf1}+${resultm1}`)

    result.innerText = resultc
    console.log(resultf1, resultm1);
})
