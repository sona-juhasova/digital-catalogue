let introTemplate = /*html*/ `
<div class="intro-img">
<img src="${section.intro_img}">
</div>

`;

let textElementTemplate = /*html*/ `
<div class="text-element">
    <h1>${section.title}</h1>
    <h2>${section.subtitle}</h2>
    <h3>${section.article}</h3>
</div>
`;

let singleProductTemplate = /*html*/ `
<div class="product-container" style="background-image:url('json/media-cat-one/s11.png');">
            <div class="action-btn" style="background-color: red;" onclick="openPopup(this)"></div>
            <div class="product-details">
                <h1>${product.title}</h1>
                <h2>${product.price} kr</h2>
                <p>${product.description}</p>
            </div>

            <!-- popup -->
            <div class="popup-wrapper" style="display: none;">
                <div class="popup">
                    <div class="slider-wrapper">
                        <img class="left" src="media/arrow-left.svg" />
                        <img class="right" src="media/arrow-right.svg" />

                        <div class="images"></div>

                        <div class="dots-wrapper" style="text-align:center">
                            <span class="dot" onclick="setSliderImage(0)"></span>
                            <span class="dot" onclick="setSliderImage(1)"></span>
                            <span class="dot" onclick="setSliderImage(2)"></span>
                            <span class="dot" onclick="setSliderImage(3)"></span>
                        </div>
                    </div>
                    <div class="popup-details-wrapper">
                        <button class="popup-close-btn" onclick="closePopup(this)">&Cross;</button>
                        <h1>${product.title}</h1>
                        <h2>${product.price} kr</h2>
                        <p>${product.description}</p>


                        <select name="dropdown" id="select">
                            <option value="">Select</option>
                            <option value="option">${product.variant}</option>
                        </select>
                        <button class="popup-cart-btn" style="background-color: red;">Add to cart</button>
                        <a href="#">See product page &rarr;</a>
                    </div>
                </div>
            </div>
        </div>
        `;

let parallaxTemplate = /*html*/ `
<div class="parallax-window" data-parallax="scroll" data-image-src="json/media-cat-one/s11.png"></div>
        `;

let slideshowTemplate = /*html*/ `
<div class="container">
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('json/media-cat-one/s1.png');">
                    <div class="action-btn" style="background-color: red;"></div>
                    <div class="product-details-slideshow">
                        <h1>${product.title}</h1>
                        <h2>${product.price} kr</h2>
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>

            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('json/media-cat-one/s11.png');">
                    <div class="action-btn" style="background-color: red;"></div>
                    <div class="product-details-slideshow">
                        <h1>${product.title}</h1>
                        <h2>${product.price} kr</h2>
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>

            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('json/media-cat-one/s11.png');">
                    <div class="action-btn" style="background-color: red;"></div>
                    <div class="product-details-slideshow">
                        <h1>${product.title}</h1>
                        <h2>${product.price} kr</h2>
                        <p>${product.description}</p>
                    </div>
                </div>
            </div>


            <a class="prev" onclick="plusSlides(-1)">
                <img class="left" src="media/arrow-up.svg" />
            </a>
            <a class="next" onclick="plusSlides(1)">
                <img class="left" src="media/arrow-down.svg" />
            </a>



            <div class="row">
                <div class="column">
                    <img class="demo" src="json/media-cat-one/s1.png" onclick="currentSlide(1)">
                </div>
                <div class="column">
                    <img class="demo" src="json/media-cat-one/s11.png" onclick="currentSlide(2)">
                </div>
                <div class="column">
                    <img class="demo" src="json/media-cat-one/s11.png" onclick="currentSlide(3)">
                </div>

            </div>
        </div>
        `;


