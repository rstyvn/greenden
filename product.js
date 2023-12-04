

var sidenav = document.getElementById("sidenav")
var menuicon = document.getElementById("menuicon")


menuicon.addEventListener("click", function () {
    sidenav.style.right = 0
})

var closenav = document.getElementById("close-nav")

closenav.addEventListener("click", function () {
    sidenav.style.right = "-50%"
})


//Product Search
var productcontainer = document.getElementById("product-container")
var search = document.getElementById("search")
var productlist = productcontainer.querySelectorAll("div")

console.log(search)

search.addEventListener("keyup", function () {
    var enteredvalue = event.target.value.toUpperCase()

    for (count = 0; count<productlist.length; count++) {
        var productName = productlist[count].querySelector("h1").textContent
        if (productName.toUpperCase().indexOf(enteredvalue) < 0) {
            productlist[count].style.display = "none"
        }
        else {
            productlist[count].style.display = "block"
        }
    }
})
