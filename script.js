function spicyBrothDetails(){
    let spicyBrothDetails = "Spicy broth is a hot soup made with chili peppers, garlic, ginger, and spices in a tasty broth. It's great for soups and noodles.";
document.getElementById("spicy-broth").innerHTML = spicyBrothDetails;}

function mushroomBrothDetails(){
    let mushroomBrothDetails = "Introducing our savory mushroom broth, a rich fusion of earthy mushrooms and aromatic herbs. Simmered to perfection, it's a comforting elixir that delights the palate with every nourishing sip.";
    document.getElementById("mushroom-broth").innerHTML = mushroomBrothDetails;
}

function beefDescription(){
    let beefDescription = "Savor the richness of our beef broth, made with tender beef and aromatic spices for a comforting, flavorful experience.";
    document.getElementById("meat-item").innerHTML = beefDescription;
    }

function lambDescription(){
        let lambDescription = "Indulge in the comforting warmth of our lamb broth, crafted with succulent lamb and aromatic herbs for a truly satisfying taste experience.";
        document.getElementById("lamb-menu").innerHTML = lambDescription;
    }

function porkDescription(){
        let porkDescription = "Treat yourself to the hearty goodness of our pork broth, simmered to perfection with savory pork and aromatic seasonings, delivering a deliciously comforting taste in every sip.";
        document.getElementById("pork-menu").innerHTML = porkDescription;
    }

function chickenDescription(){
        let chickenDescription = "Delight in the comforting taste of our chicken broth, crafted with tender chicken and aromatic herbs for a soul-warming experience with every sip.";
        document.getElementById("chicken-menu").innerHTML = chickenDescription;
    }

function blackchickenDescription(){
        let blackchickenDescription = "Explore the exquisite taste of black chicken, a delicacy renowned for its succulence and depth of flavor. Delight in tender, juicy meat, perfect for creating unforgettable culinary experiences.";
        document.getElementById("blackchicken-menu").innerHTML = blackchickenDescription;
    }

function seafoodDescription(){
        let seafoodDescription = "Savor the ocean's bounty with our seafood broth, brimming with the fresh flavors of the sea and aromatic herbs, creating a delightful and invigorating taste experience.";
        document.getElementById("seafood-menu").innerHTML = seafoodDescription;
    }

function beefballsDescription(){
        let beefballsDescription = "Beef balls are savory delights, fashioned from ground beef and a medley of spices, shaped into perfect spheres. These tender morsels are versatile, adding rich flavor to soups, noodle dishes, or enjoyed on their own.";
        document.getElementById("beefballs-menu").innerHTML = beefballsDescription;
    }

function chickenMeatBallsDescription(){
        let chickenMeatBallsDescription = "Chicken meatballs are flavorful orbs crafted from finely minced chicken, seasoned with a blend of herbs and spices. These versatile morsels can be baked, fried, or simmered, adding a delicious protein boost to pasta dishes or served as appetizers.";
        document.getElementById("chickenMeatBalls-menu").innerHTML = chickenMeatBallsDescription;
    }

function vegetableDescription(){
        let vegetableDescription = "The vegetables here are always fresh and 100% organic as they are planted on our own farm. "
        document.getElementById("vegetable-menu").innerHTML = vegetableDescription;
    }

function sauceDescription(){
        let sauceDescription = "Our home-made sauce is the highlight of 'Thint Sate Kyike'.";
        document.getElementById("sauce-menu").innerHTML = sauceDescription;
    }


let availableMenus = [
    'Spicy Broth',
    'Herbal Broth',
    'Mushrooms Broth',
    'Beef',
    'Lamb',
    'Pork',
    'Chicken',
    'Black Chicken',
    'Seafood',
    'Beef Balls',
    'Chicken Meatballs',
    'Mushrooms',
    'Chinese Cabbage',
    'Carrots',
    'Broccoli',
    'Baby Corn',
    'Soy Sauce',
    'Spicy Sauce',
    'Normal Sauce',
    'Coca Cola',
    'Beer',
    'Grape Juice',
    'Coke Zero',
    'Orange Juice',
    'Pepsi',
    'Apple Juice',
];

const resultsBox = document.querySelector(".result-box");
const inputBox = document.getElementById("search");

inputBox.onkeyup = function(){
    let result = [];
    let input = inputBox.value;
    if(input.length){
        result = availableMenus.filter((keyword =>{
        return keyword.toLowerCase().includes(input.toLowerCase());
        }));
        console.log(result);
    }
    display(result);

    if(!result.length){
        resultsBox.innerHTML = ' ';
    }
}

function display(result){
    const content = result.map((list)=>{
        return "<li onclick=selectInput(this)>" + list + "</li>";
    });

    resultsBox.innerHTML = "<ul>" + content.join('') + "</ul>";

}

function selectInput(list){
    inputBox.value = list.innerHTML;
    resultsBox.innerHTML = '';
}

let iconCart = document.querySelector('.icon-cart');
let closeCart = document.querySelector('.close');
let body = document.querySelector('body');

iconCart.addEventListener('click', ()=>{
    body.classList.toggle('showCart')
})

closeCart.addEventListener('click', ()=> {
    body.classList.toggle('showCart')
})