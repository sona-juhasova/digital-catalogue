// code source: https://codepen.io/priyankamalviya/pen/OOxXQj
var setPopupSlider = function (popupContainer) {
  
  let arr = [];
  var dots = popupContainer.getElementsByClassName("dot");

  debugger;
  for(var i = 0;i<dots.length;i++)
  {
    arr.push(dots[i].getAttribute("data-imgurl"));
  }

  let len = arr.length;

  let leftArrow = popupContainer.getElementsByClassName("left")[0];

  let rightArrow = popupContainer.getElementsByClassName("right")[0];

  let imageItem = `<img class="image" src="${arr[0]}"/>`;

  let count = 0;

  let imageParent = popupContainer.getElementsByClassName("images")[0];

  imageParent.innerHTML = imageItem;

  // imageParent.innerHTML += imageBackground;

  // imageParent[0]["z-index"] = 1;

  // imageParent[1]["z-index"] = 0;

  console.log(imageParent);

  let currentImage = imageParent.childNodes[0];

  leftArrow.addEventListener("click", function () {
    if (count === 0) {
      count = len;
    }
    count--;
    // currentImage.classList.add("fade-out"); 
    setSliderImage(count);

    // setTimeout(function(){ currentImage.classList.remove("fade-out"); }, 3000);
  });

  rightArrow.addEventListener("click", function () {
    count++;
    if (count === len) {
      count = 0;
    }

    setSliderImage(count,popupContainer);

  });


  // keep fading in and out by default


  function setSliderImage(count, popupContainer) {
    currentImage.src = arr[count];

    var i;
    var dots = popupContainer.getElementsByClassName("dot");
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[count].className += " active";
  }
}
