var callData = JSON.parse(localStorage.getItem("makeUpData"));
if(callData == null)
{
    temp()
}
function temp()
{
    window.location.href="/nykaa/Data/makeupData.html";
}





var belowNavBar = document.createElement("div");
belowNavBar.setAttribute("id","belowNavBar");

var path = document.createElement("div");
    //    <-------------------- change this------------------>
path.innerText="Home>Women, Men, Unisex>Face";
var mensGrooming = document.createElement("div");
    //    <-------------------- change this------------------>
mensGrooming.innerText="Face Primer Collection";
// <----------------All Products start--------------->
var autoSliderContainer = document.createElement("div");
autoSliderContainer.setAttribute("id","autoSliderContainer")
var mainContainer = document.querySelector("#mainContainer");
var dotContainer = document.querySelector("#dotsContainer")
autoSliderContainer.append(mainContainer,dotContainer)

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
icon_downArrow1.addEventListener("click",function()
{
    var hideThis = document.querySelector("#sortHiddenDiv");
    hideThis.style.display="block";
    var firstChild = document.querySelector("#filter > :nth-child(1)");
    firstChild.style.marginBottom="0px";
})
icon_downArrow1.addEventListener("dblclick",function()
{
    var hideThis = document.querySelector("#sortHiddenDiv");
    hideThis.style.display="none";
    var firstChild = document.querySelector("#filter > :nth-child(1)");
    firstChild.style.marginBottom="30px"
})
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
// <------------Hidden Part Start-------------->

var sortHiddenDiv = document.createElement("div");
sortHiddenDiv.setAttribute("id","sortHiddenDiv");

var sortHiddenDiv_popularityDiv = document.createElement("div");
var sortHiddenDiv_popularity = document.createElement("div");
sortHiddenDiv_popularity.innerText="Popularity";
var sortHiddenDiv_popularity_check = document.createElement("input")
sortHiddenDiv_popularity_check.setAttribute("type","checkbox");
sortHiddenDiv_popularityDiv.append(sortHiddenDiv_popularity,sortHiddenDiv_popularity_check)
sortHiddenDiv_popularity_check.addEventListener("change",function()
{
    if(this.checked)
    {
        //    <-------------------- change this------------------>
        window.location.href="/nykaa/makeup/data/fragrance_perfume_data.html"
    }
})

var sortHiddenDiv_discountDiv = document.createElement("div");
var sortHiddenDiv_discount = document.createElement("div");
sortHiddenDiv_discount.innerText="Discount";
var sortHiddenDiv_discount_check = document.createElement("input")
sortHiddenDiv_discount_check.setAttribute("type","checkbox");
sortHiddenDiv_discountDiv.append(sortHiddenDiv_discount,sortHiddenDiv_discount_check)
sortHiddenDiv_discount_check.addEventListener("change",function()
{
    if(this.checked)
    {
        var arr=[];
    //    <-------------------- change this------------------>
        var getDataForDiscount = JSON.parse(localStorage.getItem("makeUpData"));
        getDataForDiscount.map(function (element)
        {
            if(element.mrp != undefined)
            {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
            }
            //    <-------------------- change this------------------>
            localStorage.setItem("makeUpData",JSON.stringify(arr))

        })
        //    <-------------------- change this------------------>
        window.location.href = "makeUpPage.html";
    }
})

var sortHiddenDiv_nameDiv = document.createElement("div");
var sortHiddenDiv_name = document.createElement("div");
sortHiddenDiv_name.innerText="Name";
var sortHiddenDiv_name_check = document.createElement("input")
sortHiddenDiv_name_check.setAttribute("type","checkbox");
sortHiddenDiv_nameDiv.append(sortHiddenDiv_name,sortHiddenDiv_name_check)
sortHiddenDiv_name_check.addEventListener("change",function()
{
    if(this.checked)
    {
        var arr=[];
        //    <-------------------- change this------------------>
        var getDataForName = JSON.parse(localStorage.getItem("makeUpData"));
        
        getDataForName.map(function (element)
        {
            var obj={
                bstsell: element.bstsell,
                cp: element.cp,
                discount: element.discount,
                fe: element.fe,
                img_url: element.img_url,
                mrp: element.mrp,
                name: element.name
            }
            arr.push(obj);
            
        })
        function mini(a,b)
        {
            if(a<b)
            {
                return a
            }
            else
            {
                return b
            }
        }
        function swap(i,j,arr)
        {
            var temp = arr[i];
            arr[i] = arr[j];
            arr[j]=temp
        }
        var N = arr.length;
        for(var i=0;i<N;i++)
        {
            for(var j=0;j<N-1-i;j++)
            {
                var min = mini(arr[j].name.length,arr[j+1].name.length);
                for(var k=0;k<min;k++)
                {
                    if(arr[j].name[k] != arr[j+1].name[k])
                    {
                        if(arr[j].name.charCodeAt(arr[j].name[k]) > arr[j+1].name.charCodeAt(arr[j+1].name[k]))
                        {
                            swap(j,j+1,arr);
                        }
                        break;
                    }
                }
            }
        }
        //    <-------------------- change this------------------>
        localStorage.setItem("makeUpData",JSON.stringify(arr))
        window.location.href = "makeUpPage.html";
    }
})


var sortHiddenDiv_ratedDiv = document.createElement("div");
var sortHiddenDiv_rated = document.createElement("div");
sortHiddenDiv_rated.innerText="Customer Top Rated";
var sortHiddenDiv_rated_check = document.createElement("input")
sortHiddenDiv_rated_check.setAttribute("type","checkbox");
sortHiddenDiv_ratedDiv.append(sortHiddenDiv_rated,sortHiddenDiv_rated_check)
sortHiddenDiv_rated_check.addEventListener("change",function()
{
    if(this.checked)
    {
        var arr=[];
        //    <-------------------- change this------------------>
        var getDataForRating = JSON.parse(localStorage.getItem("makeUpData"));
        getDataForRating.map(function (element,index)
        {
            if(index%2==1)
            {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
            }
            // localStorage.setItem("makeUpData",JSON.stringify(arr))
        })
        getDataForRating.map(function (element,index)
        {
            if(index%2==0)
            {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
            }
        })
        //    <-------------------- change this------------------>
        localStorage.setItem("makeUpData",JSON.stringify(arr))
        window.location.href = "makeUpPage.html";
    }
})


var sortHiddenDiv_newDiv = document.createElement("div");
var sortHiddenDiv_new = document.createElement("div");
sortHiddenDiv_new.innerText="New Arrival";
var sortHiddenDiv_new_check = document.createElement("input")
sortHiddenDiv_new_check.setAttribute("type","checkbox");
sortHiddenDiv_newDiv.append(sortHiddenDiv_new,sortHiddenDiv_new_check)
sortHiddenDiv_new_check.addEventListener("change",function()
{
    if(this.checked)
    {
        var arr=[];
        //    <-------------------- change this------------------>
        var getDataForDiscount = JSON.parse(localStorage.getItem("makeUpData"));
        getDataForDiscount.map(function (element)
        {
            if(element.fe != undefined)
            {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
            }

        })
        getDataForDiscount.map(function (element)
        {
            if(element.fe == undefined)
            {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
            }
            
        })
        //    <-------------------- change this------------------>
        localStorage.setItem("makeUpData",JSON.stringify(arr))
        window.location.href = "makeUpPage.html";
    }
})

var sortHiddenDiv_highDiv = document.createElement("div");
var sortHiddenDiv_high = document.createElement("div");
sortHiddenDiv_high.innerText="Price:High to Low";
var sortHiddenDiv_high_check = document.createElement("input")
sortHiddenDiv_high_check.setAttribute("type","checkbox");
sortHiddenDiv_highDiv.append(sortHiddenDiv_high,sortHiddenDiv_high_check)
sortHiddenDiv_high_check.addEventListener("change",function()
{
    if(this.checked)
    {
        var arr=[];
        //    <-------------------- change this------------------>
        var getDataForHigh = JSON.parse(localStorage.getItem("makeUpData"));
        getDataForHigh.map(function (element)
            {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
                
            })
            function swap(i,j,arr2)
            {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            var N = arr.length
            for(var i=0;i<N-1;i++)
            {
                for(var j=0;j<N-i-1;j++)
                {
                    if(arr[j].cp < arr[j+1].cp)
                    {
                        swap(j,j+1,arr);
                    }
                }
            }
            //    <-------------------- change this------------------>
            window.location.href = "makeUpPage.html";
            localStorage.setItem("makeUpData",JSON.stringify(arr))
    }
})

var sortHiddenDiv_lowDiv = document.createElement("div");
var sortHiddenDiv_low = document.createElement("div");
sortHiddenDiv_low.innerText="Price:Low to High";
var sortHiddenDiv_low_check = document.createElement("input")
sortHiddenDiv_low_check.setAttribute("type","checkbox");
sortHiddenDiv_lowDiv.append(sortHiddenDiv_low,sortHiddenDiv_low_check)
sortHiddenDiv_low_check.addEventListener("change",function()
{
    if(this.checked)
    {
        var arr=[];
        //    <-------------------- change this------------------>
        var getDataForLow = JSON.parse(localStorage.getItem("makeUpData"));
        getDataForLow.map(function (element)
        {
                var obj={
                    bstsell: element.bstsell,
                    cp: element.cp,
                    discount: element.discount,
                    fe: element.fe,
                    img_url: element.img_url,
                    mrp: element.mrp,
                    name: element.name
                }
                arr.push(obj);
                
            })
            function swap(i,j,arr2)
            {
                var temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
            var N = arr.length
            for(var i=0;i<N-1;i++)
            {
                for(var j=0;j<N-i-1;j++)
                {
                    if(arr[j].cp > arr[j+1].cp)
                    {
                        swap(j,j+1,arr);
                    }
                }
            }
            //    <-------------------- change this------------------>
            window.location.href = "makeUpPage.html";
            localStorage.setItem("makeUpData",JSON.stringify(arr))
    }
})

sortHiddenDiv.append(sortHiddenDiv_popularityDiv,sortHiddenDiv_discountDiv,sortHiddenDiv_nameDiv,sortHiddenDiv_ratedDiv,sortHiddenDiv_newDiv,sortHiddenDiv_highDiv,sortHiddenDiv_lowDiv)
// <------------Hidden Part End-------------->
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

filter.append(sort,sortHiddenDiv,ctg,brand,price,dis,avg,occasion,gender,preference,fragrance,formulation,skin,concern);




// <----------------Filter End--------------->
// <----------------Products Start--------------->
var sum=749;
var productBoxContainer = document.createElement("div");
productBoxContainer.setAttribute("id","productBoxContainer")
var callMenData = JSON.parse(localStorage.getItem("makeUpData"));
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
    addToCart.innerText = "Add To Cart";
    var callQty = JSON.parse(localStorage.getItem("makeUpData"));
    var qty = callQty[index].qty || 1;
    addToCart.addEventListener("click",function()
    {
        var addToCartData = JSON.parse(localStorage.getItem("AddToCartData")) || []
        var obj={
            bstsell: element.bstsell,
            cp: element.cp,
            discount: element.discount,
            fe: element.fe,
            img_url: element.img_url,
            mrp: element.mrp,
            name: element.name,
            qty:qty
        }
        var flag = true;
        addToCartData.map(function (element2)
        {
            if(element.name == element2.name)
            {
                if(element.img_url==element2.img_url)
                {
                    if(element.cp==element2.cp)
                    {
                        flag=false;
                    }
                }
            }
        })
        if(flag==true)
        {
            addToCartData.push(obj);
            localStorage.setItem("AddToCartData",JSON.stringify(addToCartData))
            display()
        }
    })
    bag.append(heart,addToCart)

    
    productBox.append(featuredBox,imgBox,name,price,star,bag)
    productBoxContainer.append(productBox)
})
allProduct.append(filter,productBoxContainer);

// <----------------Products End--------------->

belowNavBar.append(path,mensGrooming,autoSliderContainer,head,allProduct)
document.querySelector("body").append(belowNavBar)

// <----------------All Products end--------------->
