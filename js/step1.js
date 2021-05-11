// let commodity_chicken = 0;
// let commodity_Shoes = 0;
// let commodity_Boots = 0;
let sum = 0;
let inputs = [...document.querySelectorAll("input")];
let addbtns = [...document.querySelectorAll(".add")];
let lessbtns = [...document.querySelectorAll(".less")];
let total = document.querySelector(".total");
let costs = [...document.querySelectorAll(".cost")];
let prices = [...document.querySelectorAll(".price")];
let count = inputs.length;

prices.forEach((price)=>{
    sum += price.textContent * 1
})
costsHandler();
function costsHandler(){
    costs.forEach((cost)=>{
        cost.textContent = sum;
    })
}

addbtns.forEach((addbtn,index)=>{
    addbtn.addEventListener('click',function(){
        inputs[index].value ++;
        count ++;
        total.textContent = count;
        sum += prices[index].textContent * 1;
        costsHandler();
    })
})
lessbtns.forEach((lessbtn,index)=>{
    lessbtn.addEventListener('click',function(){
        if(inputs[index].value < 1) return
        inputs[index].value -= 1;
        count --;
        total.textContent = count;
        sum -=prices[index].textContent * 1;
        costsHandler();
    })
})