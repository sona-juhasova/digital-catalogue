let introTemplate = function (section) {
    return /*html*/ `
<div class="intro-img">
<img src="${section.intro_img}">
</div>
`;
}

let textElementTemplate = function (section) {
    return /*html*/ `
<div class="text-element">
    <h1>${section.title}</h1>
    <h2>${section.subtitle}</h2>
    <h3>${section.article}</h3>
</div>
`;
}

// product templates

let singleProductTemplate = function (product) {
    return /*html*/ `
<div class="product-container" style="background-image:url('${product.img_url[0]}');">
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
}
let parallaxTemplate = function (section) {
    return /*html*/ `
<div class="parallax-window" data-parallax="scroll" data-image-src="${section.parallax_img}"></div>
        `;
}
let slideshowTemplate = function (product1, product2, product3) {
    return /*html*/ `
<div class="container slider-container">
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('${product1.img_url[0]}');">
                    <div class="action-btn" style="background-color: red;"></div>
                    <div class="product-details-slideshow">
                        <h1>${product1.title}</h1>
                        <h2>${product1.price} kr</h2>
                        <p>${product1.description}</p>
                    </div>
                </div>
            </div>
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('${product2.img_url[0]}');">
                    <div class="action-btn" style="background-color: red;"></div>
                    <div class="product-details-slideshow">
                        <h1>${product2.title}</h1>
                        <h2>${product2.price} kr</h2>
                        <p>${product2.description}</p>
                    </div>
                </div>
            </div>
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('${product3.img_url[0]}');">
                    <div class="action-btn" style="background-color: red;"></div>
                    <div class="product-details-slideshow">
                        <h1>${product3.title}</h1>
                        <h2>${product3.price} kr</h2>
                        <p>${product3.description}</p>
                    </div>
                </div>
            </div>
            <a class="prev" >
                <img class="left" src="media/arrow-up.svg" />
            </a>
            <a class="next" >
                <img class="left" src="media/arrow-down.svg" />
            </a>
            <div class="row">
                <div class="column">
                    <img class="demo" src="${product1.img_url[0]}" />
                </div>
                <div class="column">
                    <img class="demo" src="${product2.img_url[0]}" />
                </div>
                <div class="column">
                    <img class="demo" src="${product3.img_url[0]}" />
                </div>
            </div>
        </div>
        `;

}


// section templates

let sectionSmall = function (section, settings) {
    return /*html*/ ` 
    <h1 class="section-title" style="${settings.font}">${section.title}</h1>

    <div class="section-container-small">
        <div class="group-of-four">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[0])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[1])}</div>
            </div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[2])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[3])}</div>
            </div>
        </div>
        <div class="section-item-big">${singleProductTemplate(section.products[4])}</div>

        <div class="section-item-slider">${slideshowTemplate(section.products[5],section.products[6],section.products[7])}</div>

    </div>
    
    
    `

}

let sectionMedium = function (section, settings) {
    return /*html*/ `
    <h1 class="section-title" style="${settings.font}">${section.title}</h1>

    <div class="section-container-medium">

        <div class="group-of-three">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[0])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[1])}</div>
            </div>
            <div class="section-item-big">${singleProductTemplate(section.products[2])}</div>
        </div>

        <div class="group-of-three">
            <div class="section-item-big">${singleProductTemplate(section.products[3])}</div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[4])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[5])}</div>
            </div>
        </div>

        <div class="section-item-parallax">${parallaxTemplate(section)}</div> 

        <div class="group-of-three">
            <div class="section-item-big">${singleProductTemplate(section.products[6])}</div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[7])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[8])}</div>
            </div>
        </div>

        <div class="group-of-three">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[9])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[10])}</div>
            </div>
            <div class="section-item-big">${singleProductTemplate(section.products[11])}</div>
        </div>
    </div>
    
    
    `

}

let sectionLarge = function (section, settings) {
    return /*html*/ `
    <h1 class="section-title" style="${settings.font}">${section.title}</h1>
    <div class="section-container-large">
        <div class="section-item-slider">${slideshowTemplate(section.products[0],section.products[1],section.products[2])}</div>
        
        <div class="section-item-small">${singleProductTemplate(section.products[3])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[4])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[5])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[6])}</div>
        <div class="group-of-five">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[7])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[8])}</div>
            </div>
            <div class="section-item-big">${singleProductTemplate(section.products[9])}</div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[10])}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[11])}</div>
            </div>
        </div>
        <div class="section-item-small">${singleProductTemplate(section.products[12])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[13])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[14])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[15])}</div>
        <div class="section-item-parallax">${parallaxTemplate(section)}</div> 
        
        <div class="section-item-small">${singleProductTemplate(section.products[16])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[17])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[18])}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[19])}</div>
    </div>
    
    
    `

}