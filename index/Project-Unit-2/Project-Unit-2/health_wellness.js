var Impressive=[
        
    {
        imgUrl:"https://images-static.nykaa.com/uploads/f4cfe12c-0f2a-4e44-8636-7e513e61010c.jpg",
        Upto:"Up To 40% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/8dea8b6a-a180-4978-b54c-b09ab2750faa.jpg",
        Upto:"Up To 40% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/b25fe405-2a2e-435b-b8e7-65e8cd553d65.jpg",
        Upto:"Up To 40% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/0ac70c98-c889-4834-8dba-2cfe0365a97b.jpg",
        Upto:"Up To 40% Off",
    },

];

var daily_dose=[
    

    {
        imgUrl:"https://images-static.nykaa.com/uploads/93bbbf60-d685-438a-8e3f-979d2b193ee8.jpg",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/288bb1a3-3db8-495c-bb05-42b1ebfcd215.jpg",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/cb7c7ef5-0097-4054-bfce-b05c373ebd47.jpg",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/2a54332d-6b35-4230-ae04-2dd521f2f09e.jpg",
        Upto:"Up To 50% Off",
    },

];

var Healthy_Food=[
    

    {
        imgUrl:"https://images-static.nykaa.com/uploads/0727c2dc-02ac-4e4f-8c6a-c3718578c912.jpg",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/62d5b127-95a8-400b-8a11-364f4718b14b.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/da7d45d3-f64d-4b6b-8b94-d57151cfd29b.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/a4a8a0b0-7615-447e-b6aa-fc7a2622fafd.jpg",
        Upto:"Up To 50% Off",
    },


];

var Ayurvedic_Herbs=[


    {
        imgUrl:"https://images-static.nykaa.com/uploads/b385c51e-4b6a-4b5c-be84-e7021fbfa177.jpg",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/448ec5db-f828-494e-bcda-abe0f8cb6d8a.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/3b8eb829-4108-4ba7-9255-2b5507e9662f.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/75a178ce-3092-48a3-873f-889369fe2c11.jpg",
        Upto:"Up To 30% Off",
    },
];

var Shop_By=[


    {
        imgUrl:"https://images-static.nykaa.com/uploads/c24f4b3d-8303-4f44-bca0-feab98cd4b76.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/7b0f6684-07b9-4f65-b414-4df0c730ceaf.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/f5103a6a-0c2a-4f7e-a51f-212d3cc6af48.jpg",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/5d8a7f42-bd9a-4d67-ba13-621f43097bda.jpg",
        Upto:"Up To 50% Off",
    },
    
];

var New_at=[

    {
        imgUrl:"https://images-static.nykaa.com/uploads/5e3e1244-d183-48cf-99df-392c46eda09e.jpg",
        
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/8603c186-5464-4e52-8edc-586331bba5f3.jpg",
       
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/9fdb8eea-28ee-47d9-ab18-aad873d6edcc.jpg",
        
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/0c9adce7-7725-4895-9680-baed9e6cee5c.jpg",
        
    },

];

var spotlight=[


{
imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/245b2371-1505-4d83-a588-7339da8dab3d.jpg",

},

{
imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/1bbab9fc-eb16-443f-9e45-22a8c4e42011.jpg",

},

{
imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/16e01c22-745c-4267-97c2-17139000ae4d.jpg",

},

{
imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/60abc7d5-663d-4278-bd51-53188c5ded09.jpg",

},

];

var wellness_guide=[
    
    {
        imgUrl:"https://images-static.nykaa.com/uploads/0f0477d4-57ae-4296-873a-ab5f57145967.jpg",
        
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/a12278f6-afe0-4e36-bc3e-285e3c313f04.jpg",
       
    },
]

Impressive.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);

    var a=document.createElement("a")
    a.setAttribute("href","/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html")
    
    var upto = document.createElement("h4");
    upto.innerText = elem.Upto;

    a.append(avatar)

    div.append(a,upto);
    document.querySelector("#container1").append(div)

    document.querySelector("#container1").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
})




daily_dose.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    var upto = document.createElement("h4");
    upto.innerText = elem.Upto;

    div.append(avatar,upto);
    document.querySelector("#container2").append(div)
    document.querySelector("#container2").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});

Healthy_Food.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    var upto = document.createElement("h4");
    upto.innerText = elem.Upto;

    div.append(avatar,upto);
    document.querySelector("#container3").append(div)
    document.querySelector("#container3").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});


Ayurvedic_Herbs.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    var upto = document.createElement("h4");
    upto.innerText = elem.Upto;

    div.append(avatar,upto);
    document.querySelector("#container4").append(div)
    document.querySelector("#container4").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});


Shop_By.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    var upto = document.createElement("h4");
    upto.innerText = elem.Upto;

    div.append(avatar,upto);
    document.querySelector("#container5").append(div)
    document.querySelector("#container5").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});

New_at.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    
    div.append(avatar);
    document.querySelector("#container6").append(div)
    document.querySelector("#container6").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});

spotlight.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    
    div.append(avatar);
    document.querySelector("#container7").append(div)

    document.querySelector("#container7").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});

wellness_guide.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    
    div.append(avatar);
    document.querySelector("#container8").append(div)

    document.querySelector("#container8").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});
