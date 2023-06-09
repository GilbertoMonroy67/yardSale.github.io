const menuEmail = document.querySelector(".navbar-email");
const menuHamburgerIcon = document.querySelector(".menu");
const menuShoppingCart = document.querySelector(".navbar-shopping-cart");
const productDetailCloseIcon = document.querySelector(".product-detail-close")
const desktopMenu = document.querySelector(".desktop-menu");
const mobileMenu = document.querySelector(".mobile-menu");
const shoppingCartContainer = document.querySelector("#shoppingCartContainer");
const productDetailContainer = document.querySelector("#productDetail");
const cardsContainer = document.querySelector(".cards-container");

menuEmail.addEventListener("click", toggleDesktopMenu)
menuHamburgerIcon.addEventListener("click", toggleMobileMenu);
menuShoppingCart.addEventListener("click", toggleShoppingCart);
productDetailCloseIcon.addEventListener("click", closeProductDetailAside)

function toggleDesktopMenu(){
    const isshoppingCartContainerClosed =shoppingCartContainer.classList.contains("inactive");

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.toggle("inactive");
    }
    
    desktopMenu.classList.toggle("inactive");
}

function toggleMobileMenu(){
    const isshoppingCartContainerClosed =shoppingCartContainer.classList.contains("inactive");

    if(!isshoppingCartContainerClosed){
        shoppingCartContainer.classList.toggle("inactive");
    }

    closeProductDetailAside();

    mobileMenu.classList.toggle("inactive");
}

function toggleShoppingCart(){
    const isMobileMenuClosed = mobileMenu.classList.contains("inactive");
    
    if(!isMobileMenuClosed){
        mobileMenu.classList.toggle("inactive");
    }

    const isProductDetailClosed = productDetailContainer.classList.contains("inactive");
    
    if(!isProductDetailClosed){
        productDetailContainer.classList.toggle("inactive");
    }

    shoppingCartContainer.classList.toggle("inactive");    
}

function openProductDetailAside(){
    shoppingCartContainer.classList.add("inactive");
    productDetailContainer.classList.remove("inactive");
}

function closeProductDetailAside(){
    productDetailContainer.classList.add("inactive");
}

const productList = [];
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});
productList.push({
    name: "Make up",
    price: 30,
    image: "https://images.pexels.com/photos/9777328/pexels-photo-9777328.jpeg?auto=compress&cs=tinysrgb&w=600",

});

function renderProducts(arr){
    for (product of arr){
        const productCard = document.createElement("div");
        productCard.classList.add("product-card");
        
        // product = {name, price, image}
        const productImg = document.createElement("img");
        productImg.setAttribute("src", product.image);
        productImg.addEventListener("click", openProductDetailAside);
        
        const productInfo = document.createElement("div");
        productInfo.classList.add("product-info");
    
        const productInfoDiv = document.createElement("div");
        
        const productPrice = document.createElement("p");
        productPrice.innerText = "$"+ product.price;
        
        const productName = document.createElement("p");
        productName.innerText = product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
    
        const productInfoFigure = document.createElement("figure");
        const productImgCart = document.createElement("img");
        productImgCart.setAttribute("src", "./icons/Platzi_YardSale_Icons/bt_add_to_cart.svg");
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        cardsContainer.appendChild(productCard);
    }
}

renderProducts(productList);
