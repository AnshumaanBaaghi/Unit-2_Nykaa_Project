var data = JSON.parse(localStorage.getItem("brandImagesData"));
var brandImagesData = JSON.parse(localStorage.getItem("brandImagesData")) || [];
data.map(function (elem, index) {
    var logoDiv = document.createElement("div");

    var logoimages = document.createElement("img");
    logoimages.setAttribute("src", elem.image_url);
    logoimages.setAttribute("class", "logoimages")

    var offer = document.createElement("p");
    offer.innerText = elem.offer;
    offer.setAttribute("class", "title")

    logoDiv.append(logoimages, offer);
    document.querySelector(".logo ").append(logoDiv);

})
localStorage.setItem("brandImagesData", JSON.stringify(brandImagesData));

document.querySelector(".logo ").addEventListener("click",function()
{
    window.location.href="/nykaa/skin/skinPage.html"
})

var data1 = JSON.parse(localStorage.getItem("categoryImagesData"));
var categoryImagesData = JSON.parse(localStorage.getItem("categoryImagesData")) || [];
data1.map(function (elem, index) {
    var categoryDiv = document.createElement("div");

    var categoryimages = document.createElement("img");
    categoryimages.setAttribute("src", elem.image_url);
    categoryimages.setAttribute("class", "categoryimages");
    // categoryimages.addEventListener("click", function(){
    //     window.location.href= "/nykaa/skin/skinPage.html";
    // });

    categoryDiv.append(categoryimages);
    document.querySelector(".category ").append(categoryDiv);

})

document.querySelector(".category ").addEventListener("click",function()
{
    window.location.href="/nykaa/skin/skinPage.html"
})
localStorage.setItem("categoryImagesData", JSON.stringify(categoryImagesData));



var data2 = JSON.parse(localStorage.getItem("bestsellerImagesData"));
var bestsellerImagesData = JSON.parse(localStorage.getItem("bestsellerImagesData")) || [];
data2.map(function (elem, index) {
    var bestsellerDiv = document.createElement("div");

    var bestsellerimages = document.createElement("img");
    bestsellerimages.setAttribute("src", elem.image_url);
    bestsellerimages.setAttribute("class", "bestsellerimages")

    bestsellerDiv.append(bestsellerimages);
    document.querySelector(".bestsellers ").append(bestsellerDiv);

})
document.querySelector(".bestsellers ").addEventListener("click",function()
{
    window.location.href="/nykaa/skin/skinPage.html"
})
localStorage.setItem("bestsellerImagesData", JSON.stringify(bestsellerImagesData));




var data3 = JSON.parse(localStorage.getItem("luxebarpicsData"));
var luxebarpicsData = JSON.parse(localStorage.getItem("luxebarpicsData"))||[];

data3.map(function (elem, index) {
    var luxebarDiv = document.createElement("div");

    var luxebarimages = document.createElement("img");
    luxebarimages.setAttribute("src", elem.image_url);
    luxebarimages.setAttribute("class", "luxebarimages")

    luxebarDiv.append(luxebarimages);
    document.querySelector(".luxeIndulgences").append(luxebarDiv);

})
localStorage.setItem("luxebarpicsData", JSON.stringify(luxebarpicsData));
document.querySelector(".luxeIndulgences ").addEventListener("click",function()
{
    window.location.href="/nykaa/skin/skinPage.html"
})



var data4 = JSON.parse(localStorage.getItem("musthavepicsData"));
 var musthavepicsData = JSON.parse(localStorage.getItem("musthavepicsData"))||[];

data4.map(function (elem, index) {
    var musthaveDiv = document.createElement("div");

    var musthaveimages = document.createElement("img");
    musthaveimages.setAttribute("src", elem.image_url);
    musthaveimages.setAttribute("class", "musthaveimages")

    musthaveDiv.append(musthaveimages);
    document.querySelector(".mustHave").append(musthaveDiv);

})
 localStorage.setItem("musthavepicsData", JSON.stringify(musthavepicsData));

 document.querySelector(".mustHave").addEventListener("click",function()
 {
     window.location.href="/nykaa/skin/skinPage.html"
 })


 var data5 = JSON.parse(localStorage.getItem("onlyatpicsData"));
 var onlyatpicsData = JSON.parse(localStorage.getItem("onlyatpicsData"))||[];

data5.map(function (elem, index) {
    var onlyatDiv = document.createElement("div");

    var onlyatimages = document.createElement("img");
    onlyatimages.setAttribute("src", elem.image_url);
    onlyatimages.setAttribute("class", "onlyatimages")

    onlyatDiv.append(onlyatimages);
    document.querySelector(".onlyAt").append(onlyatDiv);

})
 localStorage.setItem("onlyatpicsData", JSON.stringify(onlyatpicsData));
 document.querySelector(".onlyAt").addEventListener("click",function()
 {
     window.location.href="/nykaa/skin/skinPage.html"
 })



 var data6 = JSON.parse(localStorage.getItem("budgetbuypicsData"));
 var budgetbuypicsData = JSON.parse(localStorage.getItem("budgetbuypicsData"))||[];

data6.map(function (elem, index) {
    var budgetbuyDiv = document.createElement("div");

    var budgetbuyimages = document.createElement("img");
    budgetbuyimages.setAttribute("src", elem.image_url);
    budgetbuyimages.setAttribute("class", "budgetbuyimages")

    budgetbuyDiv.append(budgetbuyimages);
    document.querySelector(".budgetBuy").append(budgetbuyDiv);

})
 localStorage.setItem("budgetbuypicsData", JSON.stringify(budgetbuypicsData));
 document.querySelector(".budgetBuy").addEventListener("click",function()
 {
     window.location.href="/nykaa/skin/skinPage.html"
 })




 var data7 = JSON.parse(localStorage.getItem("featuredBrandspicsData"));
 var featuredBrandspicsData = JSON.parse(localStorage.getItem("featuredBrandspicsData"))||[];

data7.map(function (elem, index) {
    var featuredBrandDiv = document.createElement("div");

    var featuredBrandimages = document.createElement("img");
    featuredBrandimages.setAttribute("src", elem.image_url);
    featuredBrandimages.setAttribute("class", "featuredBrandimages")

    featuredBrandDiv.append(featuredBrandimages);
    document.querySelector(".featuredBrands").append(featuredBrandDiv);

})
 localStorage.setItem("featuredBrandspicsData", JSON.stringify(featuredBrandspicsData));
 document.querySelector(".featuredBrands").addEventListener("click",function()
 {
     window.location.href="/nykaa/skin/skinPage.html"
 })

 
 
 var data8 = JSON.parse(localStorage.getItem("beautifulBronzeData"));
 var beautifulBronzeData = JSON.parse(localStorage.getItem("beautifulBronzeData"))||[];

data8.map(function (elem, index) {
    var beautifulBronzeDiv = document.createElement("div");

    var beautifulBronzeimages = document.createElement("img");
    beautifulBronzeimages.setAttribute("src", elem.image_url);
    beautifulBronzeimages.setAttribute("class", "beautifulBronzeimages")

    beautifulBronzeDiv.append(beautifulBronzeimages);
    document.querySelector(".beautifulBronze").append(beautifulBronzeDiv);

})
 localStorage.setItem("beautifulBronzeData", JSON.stringify(beautifulBronzeData));
 document.querySelector(".beautifulBronze").addEventListener("click",function()
 {
     window.location.href="/nykaa/skin/skinPage.html"
 })

 var data9 = JSON.parse(localStorage.getItem("trendingbarpicsData"));
 var trendingbarpicsData = JSON.parse(localStorage.getItem("trendingbarpicsData"))||[];

data9.map(function (elem, index) {
    var trendingbarDiv = document.createElement("div");

    var trendingbarimages = document.createElement("img");
    trendingbarimages.setAttribute("src", elem.image_url);
    trendingbarimages.setAttribute("class", "trendingbarimages")

    trendingbarDiv.append(trendingbarimages);
    document.querySelector(".trendingbar").append(trendingbarDiv);

})
 localStorage.setItem("trendingbarpicsData", JSON.stringify(trendingbarpicsData));
 document.querySelector(".trendingbar").addEventListener("click",function()
 {
     window.location.href="/nykaa/skin/skinPage.html"
 })