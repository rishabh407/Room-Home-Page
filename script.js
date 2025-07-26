 const navigation = document.querySelector('.navigation');
  const leftBtn = document.querySelector('.btn1');
  const rightBtn = document.querySelector('.btn2');

  const images = [
    "images/desktop-image-hero-1.jpg",
    "images/desktop-image-hero-2.jpg",
    "images/desktop-image-hero-3.jpg"
  ];

  let currentIndex = 0;

  function updateBackground()
  {
      navigation.style.backgroundImage= `url('${images[currentIndex]}')`;
  }
// We add in 1 in current index to make it point to the next image in the array

  rightBtn.addEventListener("click",()=>{
      //  currentIndex=(currentIndex+1)%images.length;
      if(currentIndex<images.length-1)
      {
        currentIndex++;
        updateBackground(currentIndex);
      }
  });

// We subtract 1 from current index to make it point to the previous image in the array
  leftBtn.addEventListener("click",()=>{
    if(currentIndex>0)
    {
      currentIndex--;
      updateBackground(currentIndex);
    }
  });

   const hamburger=document.querySelector(".cont-img-1");
   const room=document.querySelector(".cont-img-2")
   const links=document.querySelector(".links");
  const alllinks=document.querySelectorAll(".links ul li");
   const cont1=document.querySelector(".cont-1")
   const lessopacity=document.querySelectorAll(".lessopacity");
   const black=document.querySelector(".black");
   let ismenu=false;
   hamburger.addEventListener("click",()=>{
    ismenu=!ismenu;   
    const removename=ismenu?room.classList.add("hide"):room.classList.remove("hide");

   const removelinks=ismenu?links.classList.remove("hide"):links.classList.add("hide");
   
   const hamburgericon=ismenu?hamburger.src="images/icon-close.svg":hamburger.src="images/icon-hamburger.svg";  
   
   const changelinkscolor=ismenu?alllinks.forEach((link)=>{
        link.style.color="black";
   }):alllinks.forEach((link)=>{
        link.style.color="white";
   });
   const contbackground=ismenu?cont1.style.backgroundColor="white":cont1.style.backgroundColor="transparent";
   const blackportion=ismenu?black.classList.remove("hide"):black.classList.add("hide");
  });