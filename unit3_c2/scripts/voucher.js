// Implement debouncing for network request
// On clicking book now store the selected movie in localstorage as key "movie"
// so that you can retrive it on checkout.html page

// try{
//     let res=await fetch(url)
//     let u=await(res.json())
//     append(u.data)
//     console.log(u.data)
// }catch(err){
//     console.log(err)
// }}

const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"

// fetch(url)
// .then(function(res){
//     return res.json()
// }).then(function(res){
//     console.log(res)
//     append(res[0].vouchers)
// })
// .catch(function(err){
//     console.log(err)
// })
async function getData() {
      try {
        let res = await fetch(url);
    
        let users = await res.json();
        append(users[0].vouchers);
        
      } catch (err) {
        console.log(err);
      }
}
    
    getData()
    var cartData = JSON.parse(localStorage.getItem("cart")) || [];


    function append(data){
        let container=document.getElementById("voucher_list")

      data.forEach(function (el) {
        let div = document.createElement("div");
            let img = document.createElement("img");
            img.src = el.image;
        
            let h2 = document.createElement("h2");
            h2.innerText = el.name;
        
            var btn=document.createElement("button")
            btn.innerText="buy voucher"
            btn.addEventListener("click", function () {
                addToCart(el);
            })
            
            div.append(img, h2, btn);
        
            container.append(div);
          });

          function addToCart(el) {
            console.log(el);
            cartData.push(el);
            localStorage.setItem("cart", JSON.stringify(cartData));
            alert("item added to cart");
        }
    }

