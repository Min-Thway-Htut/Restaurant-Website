let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.qunatity');

openShopping.addEventListener('click', ()=> {
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})
let products = [
    {
        id: 1,
        name: 'Spicy Broth',
        image: 'spicy-broth.png',
        price: 5
    },
    {
        id: 2,
        name:'Herbal Broth',
        image: 'herbal-broth.webp',
        price: 5
    },
    {
        id: 3,
        name: 'Mushroom Broth',
        image: 'mushroom-broth.png',
        price: 5
    },
    {
        id: 4,
        name: 'Beef',
        image: 'beef.png',
        price: 1
    },
    {
        id: 5,
        name: 'Lamb',
        image: 'lamb.png',
        price: 1.5
    },
    {
        id: 6,
        name: 'Pork',
        image: 'pork.png',
        price: 1
    },
    {
        id: 7,
        name: 'Chicken',
        image: 'chicken.webp',
        price: 1
    },
    {
        id: 8,
        name: 'Seafood',
        image: 'seafood.png',
        price: 2
    },
    {
        id: 9,
        name: 'Beef Balls',
        image: 'meatball.webp',
        price: 1
    },
    {
        id: 10,
        name: 'Chicken Meatballs',
        image: 'meatball-chicken.png',
        price: 1
    },
    {
        id: 11,
        name: 'Mushroom',
        image: 'mushroom.png',
        price: 0.25
    },
    {
        id: 12,
        name: 'Chinese Cabbage',
        image: 'chinese-cabbage.jpg',
        price: 0.25
    },
    {
        id: 13,
        name: 'Carrot',
        image: 'carrot.jpg',
        price: 0.25
    },
    {
        id: 14,
        name: ' Broccoli',
        image: 'brocooli.webp',
        price: 0.25
    },
    {
        id: 15,
        name: 'Baby Corn',
        image: 'baby-corn.png',
        price: 0.25
    },
    {
        id: 16,
        name: 'Spicy Sauce',
        image: 'spicy-sauce.png',
        price: 0
    },
    {
        id: 17,
        name: 'Soy Sauce',
        image: 'soy-sauce.png',
        price: 0
    },
    {
        id: 18,
        name: 'Normal Sauce',
        image: 'normal-sauce.png',
        price: 0
    },
    {
        id: 19,
        name: 'Coca Cola',
        image: 'coca-cola.png',
        price: 3
    },
    {
        id: 20,
        name: 'Coke Zero',
        image: 'coke-zero.jpg',
        price: 3
    },
    {
        id: 21,
        name: 'Pepsi',
        image: 'pepsi.png',
        price: 3
    },
    {
        id: 22,
        name: 'Orange Juice',
        image: 'orange-juice.webp',
        price: 4.5
    },
    {
        id: 23,
        name: 'Grape Juice',
        image: 'grape-juice.png',
        price: 4.5
    },
    {
        id: 24,
        name: 'Apple Juice',
        image: 'apple-juice.png',
        price: 4.5
    }
];

let listCards  = [];
function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="image/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();

function addToCard(key){
    if(listCards[key] == null){
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value,key) => {
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;

        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
            <div><img src="image/${value.image}"/></div>
            <div>${value.name}</div>
            <div>${value.price.toLocaleString()}</div>
            <div>${value.quantity}</div>
            <div>
                <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                <div class="count">${value.quantity}</div>
                <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
            </div>
            `;
            listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}

function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}