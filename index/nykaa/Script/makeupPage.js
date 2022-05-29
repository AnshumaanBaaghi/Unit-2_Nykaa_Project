var belowNavBar = document.createElement("div");
belowNavBar.setAttribute("id","belowNavBar");
// <----------------All Products start--------------->
var allProduct = document.createElement("div");
allProduct.setAttribute("id","allProduct");

var head = document.createElement("div");
head.innerText = "All Products";
// <----------------Filter Start--------------->
var filter = document.createElement("div");
filter.setAttribute("id","filter");

var icon_downArrow1 = document.createElement("i");
icon_downArrow1.setAttribute("class","fas fa-chevron-down")
var icon_downArrow2 = document.createElement("i");
icon_downArrow2.setAttribute("class","fas fa-chevron-down")
var icon_downArrow3 = document.createElement("i");
icon_downArrow3.setAttribute("class","fas fa-chevron-down")
var icon_downArrow4 = document.createElement("i");
icon_downArrow4.setAttribute("class","fas fa-chevron-down")
var icon_downArrow5 = document.createElement("i");
icon_downArrow5.setAttribute("class","fas fa-chevron-down")
var icon_downArrow6 = document.createElement("i");
icon_downArrow6.setAttribute("class","fas fa-chevron-down")
var icon_downArrow7 = document.createElement("i");
icon_downArrow7.setAttribute("class","fas fa-chevron-down")
var icon_downArrow8 = document.createElement("i");
icon_downArrow8.setAttribute("class","fas fa-chevron-down")
var icon_downArrow9 = document.createElement("i");
icon_downArrow9.setAttribute("class","fas fa-chevron-down")
var icon_downArrow10 = document.createElement("i");
icon_downArrow10.setAttribute("class","fas fa-chevron-down")
var icon_downArrow11 = document.createElement("i");
icon_downArrow11.setAttribute("class","fas fa-chevron-down")
var icon_downArrow12 = document.createElement("i");
icon_downArrow12.setAttribute("class","fas fa-chevron-down")
var icon_downArrow13 = document.createElement("i");
icon_downArrow13.setAttribute("class","fas fa-chevron-down")

var sort = document.createElement("div");
var sort1 = document.createElement("span");
sort1.innerText = "Sort By: Popularity";
sort.append(sort1,icon_downArrow1);

var ctg = document.createElement("div");
var ctg1 = document.createElement("span");
ctg1.innerText = "Category";
ctg.append(ctg1,icon_downArrow2);

var brand = document.createElement("div");
var brand1 = document.createElement("span");
brand1.innerText = "Brand";
brand.append(brand1,icon_downArrow3);

var price = document.createElement("div");
var price1 = document.createElement("span");
price1.innerText = "Price";
price.append(price1,icon_downArrow4);

var dis = document.createElement("div");
var dis1 = document.createElement("span");
dis1.innerText = "Discount";
dis.append(dis1,icon_downArrow5);

var avg = document.createElement("div");
var avg1 = document.createElement("span");
avg1.innerText = "Avg Customer Rating";
avg.append(avg1,icon_downArrow6);

var occasion = document.createElement("div");
var occasion1 = document.createElement("span");
occasion1.innerText = "Occasion";
occasion.append(occasion1,icon_downArrow7);

var gender = document.createElement("div");
var gender1 = document.createElement("span");
gender1.innerText = "Gender";
gender.append(gender1,icon_downArrow8);

var preference = document.createElement("div");
var preference1 = document.createElement("span");
preference1.innerText = "Preference";
preference.append(preference1,icon_downArrow9);

var fragrance = document.createElement("div");
var fragrance1 = document.createElement("span");
fragrance1.innerText = "Fragrance Family";
fragrance.append(fragrance1,icon_downArrow10);

var formulation = document.createElement("div");
var formulation1 = document.createElement("span");
formulation1.innerText = "Formulation";
formulation.append(formulation1,icon_downArrow11);

var skin = document.createElement("div");
var skin1 = document.createElement("span");
skin1.innerText = "Skin Type";
skin.append(skin1,icon_downArrow12);

var concern = document.createElement("div");
var concern1 = document.createElement("span");
concern1.innerText = "Concern";
concern.append(concern1,icon_downArrow13);

filter.append(sort,ctg,brand,price,dis,avg,occasion,gender,preference,fragrance,formulation,skin,concern);




// <----------------Filter End--------------->
// <----------------Products Start--------------->
var sum=749;
var productBoxContainer = document.createElement("div");
productBoxContainer.setAttribute("id","productBoxContainer")
var callMenData = JSON.parse(localStorage.getItem("mensPageData"));
callMenData.map(function(element,index)
{
    var productBox = document.createElement("div");
    productBox.setAttribute("class","productBox");

    var featuredBox = document.createElement("div");
    var fe = document.createElement("div");
    fe.innerText = element.fe;
    var bstsell = document.createElement("div");
    bstsell.innerText = element.bstsell;
    var offer = document.createElement("div");
    offer.innerText = element.offer;
    if(element.fe != undefined && element.bstsell!=undefined && element.offer==undefined)
    {   fe.style.color="#fc2779";
         bstsell.style.color="#5CD285";
        featuredBox.append(fe,bstsell)
    }
    else if (element.offer != undefined && element.bstsell!=undefined && element.fe== undefined)
    {
        offer.style.color="#FEA838";
        bstsell.style.color="#5CD285";
        featuredBox.append(bstsell,offer)

    }
    else if (element.offer == undefined && element.bstsell==undefined && element.fe!= undefined)
    {
        fe.style.color="#fc2779";
        featuredBox.append(fe)
    }
    else if (element.offer != undefined && element.bstsell==undefined && element.fe== undefined)
    {
        offer.style.color="#FEA838";
        featuredBox.append(offer)
    }
    else{
        var hidden = document.createElement("hidden");
        hidden.innerText="hidden"
        featuredBox.append(hidden)
    }

    var imgBox = document.createElement("img");
    imgBox.setAttribute("src",element.img_url)
    var name = document.createElement("div");
    name.innerText = element.name;
    var price = document.createElement("div");
    if(element.mrp==undefined)
    {
        var mrp = document.createElement("span")
        mrp.innerText="MPR:";
        var cp = document.createElement("span");
        cp.innerText = "Rs."+element.cp;
        cp.style.color="#001325";
        mrp.style.color="#6577869e";
        price.append(mrp,cp)

    }
    else{
        var mrp = document.createElement("span")
        mrp.innerText="MPR:";
        var mrpValue = document.createElement("s")
        mrpValue.innerText = "Rs."+element.mrp;
        var cp = document.createElement("span");
        cp.innerText = "Rs."+element.cp;
        var offer = document.createElement("span")
        offer.innerText = element.discount;
        mrp.style.color="#6577869e";
        mrpValue.style.color="#6577869e";
        cp.style.color="#001325";
        offer.style.color="#fc2779";
        price.append(mrp,mrpValue,cp,offer)
    }
    var star = document.createElement("div");
    var star1 = document.createElement("i");
    star1.setAttribute("class","fa-solid fa-star");
    var star2 = document.createElement("i");
    star2.setAttribute("class","fa-solid fa-star");
    var star3 = document.createElement("i");
    star3.setAttribute("class","fa-solid fa-star");
    var star4 = document.createElement("i");
    star4.setAttribute("class","fa-solid fa-star");

    if(index%2==1)
    {
        var star5 = document.createElement("i");
        star5.setAttribute("class","fa-solid fa-star-half-stroke");
        var rating = document.createElement("span");
        rating.innerText = "("+sum+")";
        star.append(star1,star2,star3,star4
            ,star5,rating)
        sum+=122;
    }
    else
    {
        var star5 = document.createElement("i");
        star5.setAttribute("class","fa-regular fa-star");
        var rating = document.createElement("span");
        rating.innerText = "("+sum+")";
        star.append(star1,star2,star3,star4
            ,star5,rating)
        sum+=97;
        
    }
    var bag = document.createElement("div");
    var heart = document.createElement("i");
    heart.setAttribute("class","far fa-heart")
    var addToCart = document.createElement("button");
    addToCart.innerText = "Add To Cart"
    addToCart.addEventListener("click", function(){
        cart();
    } )

function cart(){
    window.location.href= "addToCart.html";
}


    
    bag.append(heart,addToCart)

    
    productBox.append(featuredBox,imgBox,name,price,star,bag)
    productBoxContainer.append(productBox)
})
allProduct.append(filter,productBoxContainer);

// <----------------Products End--------------->



belowNavBar.append(head,allProduct)
document.querySelector("body").append(belowNavBar)


// <----------------All Products end--------------->
