var slideIndex2,slides2,dots2;
function slider2()
{
    slideIndex2=0;
    slides2 = document.querySelectorAll(".imageContainer2");
    slides2[slideIndex2].style.opacity=1;

    dots2=[];
    var dotContainer=document.querySelector("#dotsContainer2");
    
    for(var i=0;i<slides2.length;i++)
    {
        var dot = document.createElement("span");
        dot.classList.add("dots2");
        dot.setAttribute("onclick","autoSlider2("+i+")")
        dotContainer.append(dot);
        dots2.push(dot);
    }
    console.log(dots2[slideIndex2]);
    dots2[slideIndex2].style.backgroundColor="red";
}
slider2();
function plusSlides2(n)
{
    autoSlider2(slideIndex2+n);
}
function autoSlider2(n){
    var i,currentSlide,nextSlide
    var autoSliderAnimationClass={
        forCurrent:"",
        forNext:""

    }
    if(n > slideIndex2)
    {
        if(n>=slides2.length)
        {
            n = 0;
        }
        autoSliderAnimationClass.forCurrent="moveLeftCurrentSlide2"
        autoSliderAnimationClass.forNext="moveLeftNextSlide2"
    }
    else if(n<slideIndex2)
    {
        if(n<0)
        {
            n=slides2.length-1
        }
        autoSliderAnimationClass.forCurrent="moveRightCurrentSlide2"
        autoSliderAnimationClass.forNext="moveRightNextSlide2"

    }
    if(n!=slideIndex2)
    {
        nextSlide = slides2[n];
        currentSlide = slides2[slideIndex2];
        for(i=0;i<slides2.length;i++)
        {
            slides2[i].className="imageContainer2";
            slides2[i].style.opacity=0;
            dots2[i].style.backgroundColor="pink";
            
        }
        currentSlide.classList.add(autoSliderAnimationClass.forCurrent);
        nextSlide.classList.add(autoSliderAnimationClass.forNext);
        dots2[n].style.backgroundColor="red";
        slideIndex2=n;
    }
}


var timer2=null;
function setTimer2()
{
    timer2 = setInterval(function ()
    {
        plusSlides2(1);
    },5000)
}
setTimer2();