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
    body.classList.add('active');
})
let products = [
    {
        id: 1,
        name: 'Spicy Broth',
        image: 'spicyBroth.jpg',
        price: 5
    },
    {
        id: 2,
        name:'Herbal Broth',
        image: 'herbal-broth.jpeg',
        price: 5
    },
    {
        id: 3,
        name: 'Mushroom Broth',
        image: 'mushroom-broth.jpeg',
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