let viewOrders = document.getElementById("viewOrders")
let createOrderBtn = document.getElementById("createOrderBtn")
let allOrdersList = document.getElementById("allOrdersList")
let createEmail = document.getElementById("createEmail")
let createDrink = document.getElementById("createDrink")
let deleteOrderBtn = document.getElementById("deleteOrderBtn")

function displayAllOrders() {
    let allOrderURL = "http://dc-coffeerun.herokuapp.com/api/coffeeorders/"

    fetch(allOrderURL)
        .then((response) => {
            return response.json()
        }).then(function(orderInfo) {
            let orders = Object.keys(orderInfo).map(function(order) {
                return  `<li id="orders">
                            <span>Email: ${orderInfo[order].emailAddress}</span>
                            <p>Order: ${orderInfo[order].coffee}</p>
                        </li>`
            })
            allOrderList.innerHTML = orders.join('')
        })
    }

viewOrders.addEventListener('click', () => {
    displayAllOrders()
})

createOrderBtn.addEventListener('click', () => {
    let para = {emailAddress: createEmail.value, coffee: createDrink.value}
    console.log(JSON.stringify(para))
    fetch("http://dc-coffeerun.herokuapp.com/api/coffeeorders/", {
        method: 'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify(para)
    }).then(function(response) {
        return response.json()
    }).then(function(newOrderAlert) {
        alert("Your order has been added")
    })
})

deleteOrderBtn.addEventListener('click', () => [
    fetch(`http://dc-coffeerun.herokuapp.com/api/coffeeorders/${deleteEmail.value}`, {
        method: 'DELETE',
        headers: {
            'Content-Type':'application/json'
        }
    }).then(function(response) {
        return response.json()
    }).then(function(deleteOrderAlert) {
        alert("Your order has been deleted")
    })
])