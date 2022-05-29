/* -------------Auto Slider Start-----------   */
var slideIndex,slides,dots;
function slider()
{
    slideIndex=0;
    slides = document.querySelectorAll(".imageContainer");
    slides[slideIndex].style.opacity=1;

    dots=[];
    var dotContainer=document.querySelector("#dotsContainer");
    
    for(var i=0;i<slides.length;i++)
    {
        var dot = document.createElement("span");
        dot.classList.add("dots");
        dot.setAttribute("onclick","autoSlider("+i+")")
        dotContainer.append(dot);
        dots.push(dot);
    }
    console.log(dots[slideIndex]);
    dots[slideIndex].style.backgroundColor="red";
}
slider();
function plusSlides(n)
{
    autoSlider(slideIndex+n);
}
function autoSlider(n){
    var i,currentSlide,nextSlide
    var autoSliderAnimationClass={
        forCurrent:"",
        forNext:""

    }
    if(n > slideIndex)
    {
        if(n>=slides.length){
            n=0
        }
        autoSliderAnimationClass.forCurrent="moveLeftCurrentSlide"
        autoSliderAnimationClass.forNext="moveLeftNextSlide"
    }
    else if(n<slideIndex)
    {
        if(n<0)
        {
            n=slides.length-1
        }
        autoSliderAnimationClass.forCurrent="moveRightCurrentSlide"
        autoSliderAnimationClass.forNext="moveRightNextSlide"

    }
    if(n!=slideIndex)
    {
        nextSlide = slides[n];
        currentSlide = slides[slideIndex];
        for(i=0;i<slides.length;i++)
        {
            slides[i].className="imageContainer";
            slides[i].style.opacity=0;
            dots[i].style.backgroundColor="#cbcbcb";
            
        }
        currentSlide.classList.add(autoSliderAnimationClass.forCurrent);
        nextSlide.classList.add(autoSliderAnimationClass.forNext);
        dots[n].style.backgroundColor="red";
        slideIndex=n;
    }
}


var timer=null;
function setTimer()
{
    timer = setInterval(function ()
    {
        plusSlides(1);
    },5500)
}
setTimer();
/* -------------Auto Slider End-----------   */
var slideShowContainer = document.querySelector("#slideshowContainer")
slideShowContainer.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})


/* -------------Main Container 2 Start-----------   */
var maincontainer1 =document.querySelector("#mainContainer1");
var singleImage1 = document.createElement("img");
singleImage1.setAttribute("src","https://images-static.nykaa.com/tr:w-1148,c-at_max/uploads/9a774240-9c16-4211-b375-2362dc8d8c52.png")
singleImage1.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})


var manualImageSlider1 = document.createElement("div");
manualImageSlider1.setAttribute("id","manualImageSlider1");

var manualImageSlider1_rightDiv = document.createElement("div");
manualImageSlider1_rightDiv.setAttribute("id","manualImageSlider1_rightDiv");
var manualImageSlider1_right =  document.createElement("i");
manualImageSlider1_right.setAttribute("class","fas fa-chevron-right")
manualImageSlider1_rightDiv.append(manualImageSlider1_right);

var manualImageSlider1_leftDiv = document.createElement("div");
manualImageSlider1_leftDiv.setAttribute("id","manualImageSlider1_leftDiv");
var manualImageSlider1_left =  document.createElement("i");
manualImageSlider1_left.setAttribute("class","fas fa-chevron-left")
manualImageSlider1_leftDiv.append(manualImageSlider1_left);

var manualImageSlider1_Child = document.createElement("div");
manualImageSlider1_Child.setAttribute("id","manualImageSlider1_Child")
manualImageSlider1_Child.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
var manualImageSlider1_Child_1 = document.createElement("img");
manualImageSlider1_Child_1.setAttribute("src","https://images-static.nykaa.com/uploads/889c4e1a-51e6-4bfe-b800-eac93f61a2f4.jpg")
var manualImageSlider1_Child_2 = document.createElement("img");
manualImageSlider1_Child_2.setAttribute("src","https://images-static.nykaa.com/uploads/08bfa209-874d-4316-b50e-97031f5b9945.jpg")
var manualImageSlider1_Child_3 = document.createElement("img");
manualImageSlider1_Child_3.setAttribute("src","https://images-static.nykaa.com/uploads/a63d37f9-73e4-4d78-b645-0d5413a353b0.jpg")
var manualImageSlider1_Child_4 = document.createElement("img");
manualImageSlider1_Child_4.setAttribute("src","https://images-static.nykaa.com/uploads/3181730d-a02d-4e9b-9c0d-c0ae96fe3cba.jpg")
var manualImageSlider1_Child_5 = document.createElement("img");
manualImageSlider1_Child_5.setAttribute("src","https://images-static.nykaa.com/uploads/c0c7a1e4-391e-4384-b97c-74da00d70a9e.jpg")
var manualImageSlider1_Child_6 = document.createElement("img");
manualImageSlider1_Child_6.setAttribute("src","https://images-static.nykaa.com/uploads/1ecefa0f-883c-4c75-ac7d-7534803d473f.jpg")
var manualImageSlider1_Child_7 = document.createElement("img");
manualImageSlider1_Child_7.setAttribute("src","https://images-static.nykaa.com/uploads/67adea8c-751f-4396-a29a-334edc692bac.jpg")
var manualImageSlider1_Child_8 = document.createElement("img");
manualImageSlider1_Child_8.setAttribute("src","https://images-static.nykaa.com/uploads/d6a9854a-195c-4453-b4e1-c8e379d9470e.jpg")
var manualImageSlider1_Child_9 = document.createElement("img");
manualImageSlider1_Child_9.setAttribute("src","https://images-static.nykaa.com/uploads/db007406-f200-4d91-9d15-615404b0eb30.jpg")
var manualImageSlider1_Child_10 = document.createElement("img");
manualImageSlider1_Child_10.setAttribute("src","https://images-static.nykaa.com/uploads/832733f1-a1cc-4903-935b-25f84fc6ee07.jpg")

manualImageSlider1_Child.append(manualImageSlider1_Child_1,manualImageSlider1_Child_2
  ,  manualImageSlider1_Child_3,manualImageSlider1_Child_4,manualImageSlider1_Child_5,manualImageSlider1_Child_6,manualImageSlider1_Child_7,manualImageSlider1_Child_8,manualImageSlider1_Child_9,manualImageSlider1_Child_10)
  ;
manualImageSlider1.append(manualImageSlider1_leftDiv,manualImageSlider1_Child,manualImageSlider1_rightDiv);



var nameHeading1 = document.createElement("div");
nameHeading1.setAttribute("class","nameHeadings");
nameHeading1.innerText = "Perfume Of The Month";

var singleImage2 = document.createElement("img");
singleImage2.setAttribute("src","https://images-static.nykaa.com/tr:w-1148,c-at_max/uploads/53f93cf2-da1b-4389-981c-e430d4c3b088.png");
singleImage2.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})




var manualImageSlider2 = document.createElement("div");
manualImageSlider2.setAttribute("id","manualImageSlider2");

var manualImageSlider2_rightDiv = document.createElement("div");
manualImageSlider2_rightDiv.setAttribute("id","manualImageSlider2_rightDiv");
var manualImageSlider2_right =  document.createElement("i");
manualImageSlider2_right.setAttribute("class","fas fa-chevron-right")
manualImageSlider2_rightDiv.append(manualImageSlider2_right);

var manualImageSlider2_leftDiv = document.createElement("div");
manualImageSlider2_leftDiv.setAttribute("id","manualImageSlider2_leftDiv");
var manualImageSlider2_left =  document.createElement("i");
manualImageSlider2_left.setAttribute("class","fas fa-chevron-left")
manualImageSlider2_leftDiv.append(manualImageSlider2_left);


var manualImageSlider2_Child = document.createElement("div");
manualImageSlider2_Child.setAttribute("id","manualImageSlider2_Child")
manualImageSlider2_Child.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})

var manualImageSlider2_Child_1 = document.createElement("img");
manualImageSlider2_Child_1.setAttribute("src","https://images-static.nykaa.com/uploads/b048b3cf-bcbb-4413-b0f0-cab0ea62ad47.png")
var manualImageSlider2_Child_2 = document.createElement("img");
manualImageSlider2_Child_2.setAttribute("src","https://images-static.nykaa.com/uploads/236bc49d-d198-44f0-a8e7-11e11041da36.png")
var manualImageSlider2_Child_3 = document.createElement("img");
manualImageSlider2_Child_3.setAttribute("src","https://images-static.nykaa.com/uploads/f61ea2db-a570-4152-9da0-7c56f751a5d7.png")

manualImageSlider2_Child.append(manualImageSlider2_Child_1,manualImageSlider2_Child_2,manualImageSlider2_Child_3)

manualImageSlider2.append(manualImageSlider2_leftDiv,manualImageSlider2_Child,manualImageSlider2_rightDiv);


var nameHeading2 = document.createElement("div");
nameHeading2.setAttribute("class","nameHeadings");
nameHeading2.innerText = "Brand Spotlight";

var multiImage1 = document.createElement("div");
multiImage1.setAttribute("id","multiImage1")

var multiImage1_1= document.createElement("img")
multiImage1_1.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/a1dad775-b676-4e27-b0d8-11a0c741b4c0.jpg")
var multiImage1_2= document.createElement("img")
multiImage1_2.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/1e257af1-e5e9-46c4-9200-06754c9a7ca5.jpg")
var multiImage1_3= document.createElement("img")
multiImage1_3.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/bc164c60-b1be-421b-887f-a2ce727a423b.jpg")
var multiImage1_4= document.createElement("img")
multiImage1_4.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/3dbc411e-af34-4dee-9c74-f4b791be2c7d.jpg")
var multiImage1_5= document.createElement("img")
multiImage1_5.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/e010cb97-23ea-49ee-8d06-f9d90ef9d4bb.jpg")
var multiImage1_6= document.createElement("img")
multiImage1_6.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/8e296f6e-f409-488c-8e3b-7d31b09a88e5.jpg")
multiImage1_1.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
multiImage1_2.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
multiImage1_3.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
multiImage1_4.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
multiImage1_5.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
multiImage1_6.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
multiImage1.append(multiImage1_1,multiImage1_2,multiImage1_3,multiImage1_4,multiImage1_5,multiImage1_6)


var nameHeading3 = document.createElement("div");
nameHeading3.setAttribute("class","nameHeadings");
nameHeading3.innerText = "Gift Sets";

var singleImage3 = document.createElement("img");
singleImage3.setAttribute("src","https://images-static.nykaa.com/tr:w-1148,c-at_max/uploads/bdf6701b-adec-499d-ab41-fb3e89d02e36.jpg");
singleImage3.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})

var singleImage4 = document.createElement("img");
singleImage4.setAttribute("src","https://images-static.nykaa.com/tr:w-1148,c-at_max/uploads/73a84221-15d9-4f72-a89d-f4622d3619ed.jpg");
singleImage4.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})

var nameHeading4 = document.createElement("div");
nameHeading4.setAttribute("class","nameHeadings");
nameHeading4.innerText = "Gift With Purchase";

var manualImageSlider3 = document.createElement("div");
manualImageSlider3.setAttribute("id","manualImageSlider3");


var manualImageSlider3_rightDiv = document.createElement("div");
manualImageSlider3_rightDiv.setAttribute("id","manualImageSlider3_rightDiv");
var manualImageSlider3_right =  document.createElement("i");
manualImageSlider3_right.setAttribute("class","fas fa-chevron-right")
manualImageSlider3_rightDiv.append(manualImageSlider3_right);

var manualImageSlider3_leftDiv = document.createElement("div");
manualImageSlider3_leftDiv.setAttribute("id","manualImageSlider3_leftDiv");
var manualImageSlider3_left =  document.createElement("i");
manualImageSlider3_left.setAttribute("class","fas fa-chevron-left")
manualImageSlider3_leftDiv.append(manualImageSlider3_left);


var manualImageSlider3_Child = document.createElement("div");
manualImageSlider3_Child.setAttribute("id","manualImageSlider3_Child")
manualImageSlider3_Child.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
var manualImageSlider3_Child_1 = document.createElement("img");
manualImageSlider3_Child_1.setAttribute("src","https://images-static.nykaa.com/uploads/d29b18f7-d454-483b-9205-9552a9741811.jpg")
var manualImageSlider3_Child_2 = document.createElement("img");
manualImageSlider3_Child_2.setAttribute("src","https://images-static.nykaa.com/uploads/cf987770-0cad-4aff-9344-14cdb893f6bf.png")
var manualImageSlider3_Child_3 = document.createElement("img");
manualImageSlider3_Child_3.setAttribute("src","https://images-static.nykaa.com/uploads/a680e174-a511-410d-960e-6c726fb2888d.png")

manualImageSlider3_Child.append(manualImageSlider3_Child_1,manualImageSlider3_Child_2,manualImageSlider3_Child_3)

manualImageSlider3.append(manualImageSlider3_leftDiv,manualImageSlider3_Child,manualImageSlider3_rightDiv);




var nameHeading4_5 = document.createElement("div");
nameHeading4_5.setAttribute("class","nameHeadings");
nameHeading4_5.innerText = "Just Arrived";

var autoImageSlider2 = document.querySelector("#autoImageSlider2")
var dotcontainer2 = document.querySelector("#dotsContainer2");
autoImageSlider2.append(dotcontainer2)
autoImageSlider2.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})

var nameHeading5 = document.createElement("div");
nameHeading5.setAttribute("class","nameHeadings");
nameHeading5.innerText = "Ultra Luxe";

var singleImage5 = document.createElement("img");
singleImage5.setAttribute("src","https://images-static.nykaa.com/tr:w-1148,c-at_max/uploads/27ebe33d-40ca-421f-82ca-900dddc1182a.jpg");
singleImage5.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})

var nameHeading6 = document.createElement("div");
nameHeading6.setAttribute("class","nameHeadings");
nameHeading6.innerText = "Bestsellers";

var manualImageSlider4 = document.createElement("div");
manualImageSlider4.setAttribute("id","manualImageSlider4");

var manualImageSlider4_rightDiv = document.createElement("div");
manualImageSlider4_rightDiv.setAttribute("id","manualImageSlider4_rightDiv");
var manualImageSlider4_right =  document.createElement("i");
manualImageSlider4_right.setAttribute("class","fas fa-chevron-right")
manualImageSlider4_rightDiv.append(manualImageSlider4_right);

var manualImageSlider4_leftDiv = document.createElement("div");
manualImageSlider4_leftDiv.setAttribute("id","manualImageSlider4_leftDiv");
var manualImageSlider4_left =  document.createElement("i");
manualImageSlider4_left.setAttribute("class","fas fa-chevron-left")
manualImageSlider4_leftDiv.append(manualImageSlider4_left);

var manualImageSlider4_Child = document.createElement("div");
manualImageSlider4_Child.setAttribute("id","manualImageSlider4_Child")

manualImageSlider4_Child.addEventListener("click",function()
{
    window.location.href="/fragrance_perfume/fragrance_perfume.html"
})
var manualImageSlider4_Child_1 = document.createElement("img");
manualImageSlider4_Child_1.setAttribute("src","https://images-static.nykaa.com/uploads/c129e03e-21ef-4f1e-8da5-a4fa301c9e51.jpg")
var manualImageSlider4_Child_2 = document.createElement("img");
manualImageSlider4_Child_2.setAttribute("src","https://images-static.nykaa.com/uploads/d1f6379b-2ed1-4fe2-b391-cb40b8dbc3c8.jpg")
var manualImageSlider4_Child_3 = document.createElement("img");
manualImageSlider4_Child_3.setAttribute("src","https://images-static.nykaa.com/uploads/9f221108-33f8-4b96-b9ce-8fecb19381bf.jpg")
var manualImageSlider4_Child_4 = document.createElement("img");
manualImageSlider4_Child_4.setAttribute("src","https://images-static.nykaa.com/uploads/fcc0f4f9-6758-4ca5-bbb1-bb5ae469a9ab.jpg")
var manualImageSlider4_Child_5 = document.createElement("img");
manualImageSlider4_Child_5.setAttribute("src","https://images-static.nykaa.com/uploads/9869b198-249a-4176-8dc8-878878798a3f.jpg")
var manualImageSlider4_Child_6 = document.createElement("img");
manualImageSlider4_Child_6.setAttribute("src","https://images-static.nykaa.com/uploads/4be3f740-5743-49a5-87fd-6dc3d9f0d359.jpg")
var manualImageSlider4_Child_7 = document.createElement("img");
manualImageSlider4_Child_7.setAttribute("src","https://images-static.nykaa.com/uploads/fdca7986-5c7d-4c63-9011-cea52df21159.jpg")

manualImageSlider4_Child.append(manualImageSlider4_Child_1,manualImageSlider4_Child_2
  ,  manualImageSlider4_Child_3,manualImageSlider4_Child_4,manualImageSlider4_Child_5,manualImageSlider4_Child_6,manualImageSlider4_Child_7)
  ;
manualImageSlider4.append(manualImageSlider4_leftDiv,manualImageSlider4_Child,manualImageSlider4_rightDiv);










var nameHeading7 = document.createElement("div");
nameHeading7.setAttribute("class","nameHeadings");
nameHeading7.innerText = "Shop By Note";



var multiImage2 = document.createElement("div");
multiImage2.setAttribute("id","multiImage2")

var multiImage2_1= document.createElement("img")
multiImage2_1.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/d783630d-14b3-4706-90d9-e062dd81ae4d.png")
var multiImage2_2= document.createElement("img")
multiImage2_2.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/fdcae87d-3fdf-4145-b3a9-647024bd3a75.png")
var multiImage2_3= document.createElement("img")
multiImage2_3.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/631c8839-b07d-4817-ab63-46d15bcefa89.png")
var multiImage2_4= document.createElement("img")
multiImage2_4.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/5ee97227-7bae-4fce-b1ea-f2efab46b799.png")

multiImage2.append(multiImage2_1,multiImage2_2,multiImage2_3,multiImage2_4);



var nameHeading8 = document.createElement("div");
nameHeading8.setAttribute("class","nameHeadings");
nameHeading8.innerText = "Shop By Price";

var multiImage3 = document.createElement("div");
multiImage3.setAttribute("id","multiImage3")

var multiImage3_1= document.createElement("img")
multiImage3_1.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/9dcd7814-52e3-4db7-b530-3327c071e552.jpg")
var multiImage3_2= document.createElement("img")
multiImage3_2.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/85669b61-b9eb-4daf-9010-d43e16f27559.png")
var multiImage3_3= document.createElement("img")
multiImage3_3.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/45957fa6-b6fc-404c-a681-61a2d49e9cc2.jpg")
var multiImage3_4= document.createElement("img")
multiImage3_4.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/7fee4705-fa31-45d6-869e-c6bc03ef608e.jpg")

multiImage3.append(multiImage3_1,multiImage3_2,multiImage3_3,multiImage3_4);





var nameHeading9 = document.createElement("div");
nameHeading9.setAttribute("class","nameHeadings");
nameHeading9.innerText = "Shop By Popular Brands";

var multiImage4 = document.createElement("div");
multiImage4.setAttribute("id","multiImage4")

var multiImage4_1= document.createElement("img")
multiImage4_1.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/c7917252-71a9-4fc4-9288-d553fd6f7a2f.png")
var multiImage4_2= document.createElement("img")
multiImage4_2.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/5fde26c0-980d-4e1b-8f3b-053ef0a2eb11.png")
var multiImage4_3= document.createElement("img")
multiImage4_3.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/ac481667-3f8c-4b04-8e63-e3e8070e7cde.png")
var multiImage4_4= document.createElement("img")
multiImage4_4.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/f4af9468-f656-4ae4-98bf-159e316f9e3d.png")
var multiImage4_5= document.createElement("img")
multiImage4_5.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/c3b9b963-f84a-456e-9905-8d27e49f1546.png")
var multiImage4_6= document.createElement("img")
multiImage4_6.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/851e7e73-c77a-45d6-bb34-e102aec9889d.png")
var multiImage4_7= document.createElement("img")
multiImage4_7.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/2ca4b817-e61b-496b-83d9-4a346a4fc80a.png")
var multiImage4_8= document.createElement("img")
multiImage4_8.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/023ae4ce-d13a-4bb4-a65a-525c4ff29fc1.png")
var multiImage4_9= document.createElement("img")
multiImage4_9.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/5eb15f96-350e-4023-b18d-ef46ab4e49fc.png")
var multiImage4_10= document.createElement("img")
multiImage4_10.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/e596689b-ca18-4671-83ba-4d5732f56412.png")
var multiImage4_11= document.createElement("img")
multiImage4_11.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/b7647472-07fd-4d9f-af06-2c85b6584c40.png")
var multiImage4_12= document.createElement("img")
multiImage4_12.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/0815a4df-d6f0-4ef3-bb93-0e07b6604d60.png")

multiImage4.append(multiImage4_1,multiImage4_2,multiImage4_3,multiImage4_4,multiImage4_5,multiImage4_6,multiImage4_7,multiImage4_8,multiImage4_9,multiImage4_10,multiImage4_11,multiImage4_12);


var singleImage6 = document.createElement("img");
singleImage6.setAttribute("src","https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/fbf3c970-8b8b-4738-a74e-7bd04dc5ed91.png");

maincontainer1.append(singleImage1,manualImageSlider1,nameHeading1,singleImage2,manualImageSlider2,nameHeading2,multiImage1,nameHeading3,singleImage3,singleImage4,nameHeading4,manualImageSlider3,nameHeading4_5,autoImageSlider2,nameHeading5,singleImage5,nameHeading6,manualImageSlider4,nameHeading7,multiImage2,nameHeading8,multiImage3,nameHeading9,multiImage4,singleImage6);


