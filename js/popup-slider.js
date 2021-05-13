// code source: https://codepen.io/priyankamalviya/pen/OOxXQj



let arr = ["http://res.cloudinary.com/pixelplus/image/upload/v1510295441/black-and-white-photography-1024x584_niptgw.jpg",            "http://res.cloudinary.com/pixelplus/image/upload/v1510793289/mammoth_jfeeza.jpg","http://res.cloudinary.com/pixelplus/image/upload/v1468260297/sample.jpg", "http://res.cloudinary.com/pixelplus/image/upload/v1510793289/Yellowstone_National_Park_001_tztczt.jpg"];

let len = arr.length;

let leftArrow = document.getElementsByClassName("left")[0];

let rightArrow = document.getElementsByClassName("right")[0];

let imageItem = `<img class="image" src="${arr[0]}"/>`;

let imageBackground = `<img src="${arr[1]}"/>`;
let count = 0;

let imageParent = document.getElementsByClassName("images")[0];

imageParent.innerHTML = imageItem;

// imageParent.innerHTML += imageBackground;

// imageParent[0]["z-index"] = 1;

// imageParent[1]["z-index"] = 0;

console.log(imageParent);

let currentImage = imageParent.childNodes[0];

leftArrow.addEventListener("click", function(){
  if(count === 0){
    count = len;
  }
  count--;
  // currentImage.classList.add("fade-out"); 
 setSliderImage(count);
  
  // setTimeout(function(){ currentImage.classList.remove("fade-out"); }, 3000);
});

rightArrow.addEventListener("click", function(){
  count++;
  if(count === len ){
    count = 0;
  } 

setSliderImage(count);

});


// keep fading in and out by default


function setSliderImage(count) {
  currentImage.src = arr[count];

  var i; 
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < dots.length; i++) {
  dots[i].className = dots[i].className.replace(" active", "");
  }
  dots[count].className += " active";
}








