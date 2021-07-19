product = [
    {
        name:"football",
        price:"2400",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBo5Lfk2A5hMGKtEgcIh6m9fCc8zKS2crbEA&usqp=CAU"
    },
    {
        name:"helmet",
        price:"3800",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjBiYF5EcpSg7d-38A3yKLhJwNj78WwW-frA&usqp=CAU"
    }
    ,
    {
        name:"ball",
        price:"50",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSuTKHCyrXfdteuhZvUIi_J8NZxeTWajPCBFw&usqp=CAU"
    }
    ,
    {
        name:"shoes",
        price:"4500",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ7XsxZuUOkq-RablkHKfQ8bc8_vnHHSsZYbg&usqp=CAU"
    }
    ,
    {
        name:"addidas",
        price:"2300",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0Ega-RBjQYjw-sONkpbI4ojS4YPvOUOILcDh7AeuTfjjS7qChyfFgsz66WIMyS4XWP54&usqp=CAU"
    }
    ,
    {
        name:"bat",
        price:"4900",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ2dWdVu0IRY3sTsFhOK7mHBrBwzHttH7uHfw&usqp=CAU"
    }
    ,
    {
        name:"glubs",
        price:"3999",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAmuxTP7lH22IJC55GrH7m6z9Bm8lJk5kxXw&usqp=CAU"
    }
    ,
    {
        name:"water bottels",
        price:"299",
        image:"https://i.pinimg.com/236x/b5/0d/e9/b50de93c0e848d081e309803d3a3e482--reusable-water-bottles-kor.jpg"
    }
    ,
    {
        name:"dumbbell",
        price:"5999",
        image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQyaVXhMRvmSctKVqyCJEgzsdcl_hM_Eu3xQ&usqp=CAU"
    }
    ,
    {
        name:"samsung phone",
        price:"13999",
        image:"https://images.samsung.com/is/image/samsung/p6pim/in/sm-m127gzbhins/gallery/in-galaxy-m-sm-m127gzbhins-sm-m---gzbgins-405435076?$684_547_PNG$"
      }
    ,
    {
        name:"tie",
        price:"399",
        image:"https://5.imimg.com/data5/EH/QW/MY-9491335/student-school-tie-500x500.jpg"
    }
    ,
    {
        name:"amla oil",
        price:"199",
        image:"https://www.dabur.com/img/product/small/2-dabur-amla-hair-oil-smal.JPG"
    }
    ,
    {
        name:"hair gel",
        price:"349",
        image:"https://wwd.com/wp-content/uploads/2021/01/hip-peas-best-kids-curly-hair-products.jpg?w=1024"
    }
]
     if(localStorage.getItem('product') == null){
         localStorage.setItem("product",JSON.stringify(product))
     } 
     let data =  JSON.parse(localStorage.getItem("product"))
     console.log(data)
       let parent = document.getElementById("data")
       data.forEach(function(el) {
           let div = document.createElement("div")
           let p_name = document.createElement("p")
           p_name.innerHTML = el.name
           let p_price = document.createElement("p")
           p_price.innerHTML = ` price ${el.price}$ `
           let img = document.createElement("img")
           img.src = el.image
           btn = document.createElement("button")
           btn.innerHTML = "add to cart"
           btn.style.display = "block"
           btn.onclick = function(){
            div.style.backgroundColor = "green"
            add_to_cart(el)
          }
          div.append(img,p_name,p_price,btn)
          parent.append(div)
           
       });
       function add_to_cart(el){
           let notFound = true
           let arr;
           arr = localStorage.getItem("cart")
           if(arr == null){
               arr = []
           }
           else{
               arr = JSON.parse(arr)
               arr.forEach(function(ele){
                   if(el.name == ele.name){
                       alert("item has been already added to the cart")
                       notFound = false
                   }
               })
           }
           if(notFound){arr.push(el)}
           localStorage.setItem("cart",JSON.stringify(arr))

       }
       function ltoh(){
           let data =JSON.parse(localStorage.getItem("product"))
           data.sort(function(a,b){
               a.price - b.price
           });
       }
       function cart(){
           window.location.href = "\ cart.html"
       }