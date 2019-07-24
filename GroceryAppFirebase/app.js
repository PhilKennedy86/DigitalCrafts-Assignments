let storeNameTextBox = document.getElementById("storeNameTextBox")
let storeAddressTextBox = document.getElementById("storeAddressTextBox")
let storeAddBtn = document.getElementById("storeAddBtn")
let storesListArea = document.getElementById("storesListArea")

let storesRef = database.ref("stores")
let itemsRef = storesRef.child("items")

//Stores entered values and assignes to name/address variables. Runs saveStore
storeAddBtn.addEventListener('click', () => {
    let name = storeNameTextBox.value
    let address = storeAddressTextBox.value
    saveStore(name,address)
})

//Saving variables to assigned keys
function saveStore(name,address) {
    storesRef.push({
        name: name,
        address: address
    })
}

//Displays store entry to user
function displayStores(stores) {
    let storeList = stores.map(store => {
        return `<div>Store Name: ${store.name}</div>
                Store Address: ${store.address}
                <p><button onclick='deleteStore("${store.key}")'>Delete Store</button><button onclick='getItems("${store.key}")'>Add Items to Grocery List</button></p></div>`
    })
    storesListArea.innerHTML = storeList.join('')
}

//Delete button functionality
function deleteStore(key) {
    storesRef.child(key).remove()
}

//Inputting saved data into object/database
storesRef.on('value', (snapshot) => {
    let stores = []
    for(key in snapshot.val()){
        let store = snapshot.val()[key]
        store.key = key
        console.log(store)
        stores.push(store)
    }
    displayStores(stores)
})

function getItems(key) {
    let item = prompt("What item would you like to add to your grocery list?")
    let itemQuantity = prompt("How many of this item would you like?")
}

function saveItems(item,itemQuantity) {
    database.ref().push()
}