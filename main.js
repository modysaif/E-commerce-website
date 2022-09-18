let wrapper = document.querySelector('.sliderWrapper')
let menuItem = document.querySelectorAll(".menuItem")


menuItem.forEach((item,index)=>{
    item.addEventListener('click' , ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
    })
})

const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "./img/air.png",
        },
        {
          code: "darkblue",
          img: "./img/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "./img/jordan.png",
        },
        {
          code: "green",
          img: "./img/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "./img/blazer.png",
        },
        {
          code: "green",
          img: "./img/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "./img/crater.png",
        },
        {
          code: "lightgray",
          img: "./img/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "./img/hippie.png",
        },
        {
          code: "black",
          img: "./img/hippie2.png",
        },
      ],
    },
  ];


  let chossen = products[0]
  let currentProductImg = document.querySelector(".productImg");
  let currentProductTitle = document.querySelector(".productTitle");
  let currentProductPrice = document.querySelector(".productPrice")
  let currentProductColors = document.querySelectorAll(".color")
  console.log(currentProductColors)
  let CurrentProductSizes = document.querySelectorAll(".size")
  let currentProductPrice2 = document.querySelector('.sliderPrice')

  menuItem.forEach((item,index)=>{
    item.addEventListener('click' , ()=>{
        wrapper.style.transform = `translateX(${-100 * index}vw)`
        chossen = products[index]
        currentProductTitle.textContent = chossen.title
        currentProductPrice.textContent = chossen.price
        currentProductImg.src = chossen.colors[0].img

        currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor = chossen.colors[index].code
        })
    })
});

currentProductColors.forEach((color,index)=>{
    color.addEventListener('click', ()=>{
        currentProductImg.src = chossen.colors[index].img;
     
    })
})

CurrentProductSizes.forEach((size,index)=>{
    size.addEventListener('click' , ()=>{
        CurrentProductSizes.forEach((size)=>{
            size.style.backgroundColor = 'white'
            size.style.Color = 'black'
        });
        size.style.backgroundColor = 'black'
        size.style.color = 'white'
    });
});

let btn = document.querySelector('.productButton')
let payMent = document.querySelector(".payment")
let close = document.querySelector('.close')

btn.addEventListener('click' , ()=>{
payMent.classList.add('show')
})

close.addEventListener('click' , ()=>{
  payMent.classList.remove('show')
})




