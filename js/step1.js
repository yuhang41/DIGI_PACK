// let commodity_chicken = 0;
// let commodity_Shoes = 0;
// let commodity_Boots = 0;
let sum = 0;
let price_Content = [];
let inputs = [...document.querySelectorAll("input")];
let addbtns = [...document.querySelectorAll(".add")];
let lessbtns = [...document.querySelectorAll(".less")];
let total = document.querySelector(".total");
let costs = [...document.querySelectorAll(".cost")];
let prices = [...document.querySelectorAll(".price")];
let count = inputs.length;

let next_step = document.querySelector('.next_step');
let product_name = [...document.querySelectorAll('.product_name')];
let products = [];
let contact = [];

//讀取API資料
axios.get("http://localhost:8888/contact")
.then((res)=>{
    contact = res.data;
    console.log(contact)
}).catch((err)=>{
    console.log(err)
})
product_name.forEach((item)=>{
    products.push(item);
})

// -------------計算input數量，費用
prices.forEach((price)=>{
    sum += price.textContent * 1;
    price_Content.push(price.textContent * 1);
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
        prices[index].textContent = ((prices[index].textContent * 1) + price_Content[index]).toFixed(2);
        sum += price_Content[index];
        costsHandler();
    })
})
lessbtns.forEach((lessbtn,index)=>{
    lessbtn.addEventListener('click',function(){
        if(inputs[index].value < 1) return
        inputs[index].value -= 1;
        count --;
        total.textContent = count;
        prices[index].textContent = ((prices[index].textContent * 1) - price_Content[index]).toFixed(2);
        sum -= price_Content[index];
        costsHandler();
    })
})

function nextHandler(e){
    e.preventDefault();
    axios.put("http://localhost:8888/contact/2",{count,sum,price_Content})
    .then((res)=>{
        contact[1] = res.data;
        nextPage();
    }).catch((err)=>{
        console.log(err)
    })
}
function nextPage(){
    window.location.href='http://127.0.0.1:5501/shopping_step2.html';
}

next_step.addEventListener('click',nextHandler)