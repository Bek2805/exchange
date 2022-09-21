const isExchangeKgz = document.querySelector('#exchange__kgz')
const isExchangeUsd = document.querySelector('#exchange__usd')
const isExchangeSum = document.querySelector('.sum')
const isExchangeBtn = document.querySelector('.exchange__btn')


isExchangeBtn.addEventListener("click",() => {
   let sum =  isExchangeKgz.value
    let usd = isExchangeUsd.value
    let result = sum / usd
    isExchangeSum.innerText = Math.round(parseFloat(`${result}`) * 100) / 100 + '$';

})