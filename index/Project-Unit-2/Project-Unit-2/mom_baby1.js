var Brands=[
    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/847780f7-6de7-4c25-81ef-f7333678c156.png",
        Upto:"Up To 18% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/0826732e-3ec5-4e44-af49-761c545844fd.png",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/ff7da47c-12e9-4008-9fbd-efa115c3e925.png",
        Upto:"Up To 27% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/c2664fec-fdad-4548-b267-36956b4a1420.png",
        Upto:"Up To 40% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/425d1b81-fe87-44e2-af8a-417a9ade3867.png",
        Upto:"Up To 15% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/e4bef574-3641-40e1-bf4b-7676f637f238.png",
        Upto:"Up To 25% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/85a2ab86-c339-4cd1-96ef-c54b3fea3c12.png",
        Upto:"Up To 25% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/0ff979d7-663b-4e99-976b-ab53dceac08b.png",
        Upto:"Up To 15% Off",
    },

];


var winter=[
    {
        imgUrl:"https://images-static.nykaa.com/uploads/b819b5eb-7be7-427c-9e57-c50143b22c0f.png",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/52ff2d04-159e-469a-9d01-87408d91b67d.png",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/17f01b33-b1e7-4fbd-a90f-3b9090ca8380.png",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/6718d51a-ae5a-4af4-819d-41328e7dfb8f.png",
    },


];

var Steal=[
    
    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/02984672-f571-45b4-b61e-773b17949496.png",
        Upto:"Up To 10% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/e1feb3a8-67d7-443a-824b-cd6bb6d04d78.png",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/c9ab7a88-a637-44e3-8f04-5585fef42bd6.png",
        Upto:"Up To 40% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/a006f6bf-61cd-4ba9-97fa-9e092897b6f5.png",
        Upto:"Up To 20% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/93294eec-0841-4976-92f4-fe8a105e7f6f.png",
        Upto:"Up To 20% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/f977badf-8be7-40ea-92eb-aeeaf41421ef.png",
        Upto:"Up To 30% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/92aa57f8-a4f3-4552-b76f-a61bfc2d5608.png",
        Upto:"Up To 50% Off",
    },

    {
        imgUrl:"https://images-static.nykaa.com/tr:w-640,c-at_max/uploads/b8e7f5b8-0804-4895-9dd5-6069b78aa56c.png",
        Upto:"Up To 20% Off",
    },
];


var Luxe =[

    {
        imgUrl:"https://images-static.nykaa.com/uploads/ca1849b2-5416-4a0f-b584-33f786a75b38.jpg",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/d0adebef-3eec-4f27-8de8-578cf0631f0a.jpg",
    },

    {
        imgUrl:"https://images-static.nykaa.com/uploads/6d125f79-c422-4e43-9a2f-2bb5a81741ef.png",
    },


];

var imgs=[
    {
    imgUrl:"https://images-static.nykaa.com/tr:w-1120,c-at_max/uploads/29b7742f-288b-495e-aaa5-ca6543c8601a.png",
    },

    {
    imgUrl:"https://images-static.nykaa.com/tr:w-1120,c-at_max/uploads/2b779db7-1df2-4e1b-a607-f2138970d430.jpg",
    },

    {
    imgUrl:"https://images-static.nykaa.com/tr:w-1120,c-at_max/uploads/375f5878-ba5b-44ee-b9c5-491ce3971c10.jpg",
    },


];

localStorage.setItem("Brands", JSON.stringify(Brands));

Brands.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);

    // var a=document.createElement("a")
    // a.setAttribute("href","http://127.0.0.1:5501/men/mamaearth.html")

    avatar.addEventListener("click",function(){
      window.location.href="/fragrance_perfume/fragrance_perfume.html"
    });
    
    var upto = document.createElement("h4");
    upto.innerText = elem.Upto;

    //a.append(avatar)
    div.append(avatar,upto);
    document.querySelector("#container").append(div)

    document.querySelector("#container").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});


winter.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    
    div.append(avatar);
    document.querySelector("#container1").append(div)

    document.querySelector("#container1").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});

Steal.map(function (elem,index,array)
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

Luxe.map(function (elem,index,array)
{
    var div = document.createElement("div");
    var avatar = document.createElement("img");
    avatar.setAttribute("src", elem.imgUrl);
    
    
    div.append(avatar);
    document.querySelector("#container4").append(div)

    document.querySelector("#container4").addEventListener("click",function()
    {
     window.location.href="/Project-Unit-2/Project-Unit-2/fragrance_perfume/collagen.html"
     })
});

imgs.map(function (elem,index,array)
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

