var cartData = JSON.parse(localStorage.getItem("cart")) || [];
console.log(cartData)


cartData.map(function (el) {
   var container= document.getElementById("purchased_vouchers")
    var box = document.createElement("div");

    var img = document.createElement("img");
    img.src = el.image;

    var name = document.createElement("p");
    name.textContent = el.name;

    

    box.append(img, name);
document.querySelector("#purchased_vouchers").append(box)

  });

  