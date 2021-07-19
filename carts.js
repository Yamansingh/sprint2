let data = localStorage.getItem("cart");
data = JSON.parse(data);
let parent = document.getElementById("items");
let number = document.getElementById("count")
let  count = 0;
let price = 0;
data.forEach(function(el) {
    count++;
    console.log(count)
    let div = document.createElement("div")
    let p_name = document.createElement("p")
    p_name.innerHTML = el.name
    let p_price = document.createElement("p")
    p_price.innerHTML = el.price
    price+= Number(el.price)
    let img = document.createElement("img")
    img.src = el.image
    div.append(img,p_name,p_price)
    parent.append(div)
});

function Apply(){
    let input = document.getElementById("input").value
    
    if(input == "masai30"){
         console.log(price)
         price = price - Math.floor((30/100)*price)
         p2.innerHTML = "Total price = "+price
         console.log(input)
        
    }
    else{
        alert("you code is incorrect")
    }
}


let p = document.createElement("p")
p.innerHTML = "total items "+ count

let p2 = document.createElement("p")
p2.innerHTML = "total price = " + price
number.append(p,p2)
function checkout(){
    window.location.href = "\ checkout.html"
}