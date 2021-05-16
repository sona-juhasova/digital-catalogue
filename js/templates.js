// intro section template
let introTemplate = function (section) {
    return /*html*/ `
<div class="intro-img">
<img src="${section.intro_img}">
</div>
`;
}

// text element template (title, subtitle, article)
let textElementTemplate = function (section, settings) {
    return /*html*/ `
<div class="text-element" style="font-family: ${settings.font}; color: ${settings.font_color};">
    <h1>${section.title}</h1>
    <h2>${section.subtitle}</h2>
    <p>${section.article}</p>
</div>
`;
}

// popup templates 
let popupTemplate = function (product, settings) {
    return /*html*/ `
<div class="popup-wrapper" style="display: none;">
                <div class="popup">
                    <div class="slider-wrapper">
                        <img class="left" src="media/arrow-left.svg" />
                        <img class="right" src="media/arrow-right.svg" />
                        <div class="images"></div>
                        <div class="dots-wrapper" style="text-align:center">
                            ${sliderDotTemplate(product.img_url)}
                        </div>
                    </div>
                    <div class="popup-details-wrapper" style="font-family: ${settings.font}; color: ${settings.font_color};">
                        <button class="popup-close-btn" onclick="closePopup(this)">&Cross;</button>
                        <h1>${product.title}</h1>
                        <h2>${product.price} kr</h2>
                        <p>${product.description}</p>
                        <select name="dropdown" id="select">
                            <option value="">Select</option>
                            ${productOptionTemplate(product.variants)}
                        </select>
                        <button class="popup-cart-btn" style="background-color: ${settings.color};font-family: ${settings.font}; ">Add to cart</button>
                        <a href="#">See product page &rarr;</a>
                    </div>
                </div>
            </div>
`;
}

let productOptionTemplate = function (options) {
    var optionString = "";
    for (var i = 0; i < options.length; i++) {
        optionString += `<option value="${options[i]}">` + options[i] + `</option>`;
    }
    return optionString;
}


let sliderDotTemplate = function (img_url) {
    var dotsString = "";
    for (var i = 0; i < img_url.length; i++) {
        dotsString += `<span class="dot" onclick="setSliderImage(${i})" data-imgUrl="${img_url[i]}"></span>`;
    }
    return dotsString;
}

// parallax 
let parallaxTemplate = function (section) {
    return /*html*/ `
<div class="parallax-window" data-parallax="scroll" data-image-src="${section.parallax_img}"></div>
        `;
}

// product template
let singleProductTemplate = function (product, settings) {
    return /*html*/ `
<div class="product-container" style="background-image:url('${product.img_url[0]}');">
            <div class="action-btn" style="background-color: ${settings.color};" onclick="openPopup(this)"><img src="./media/plus-icon.svg" alt="plus-icon"></div>
            <div class="product-details">
                <h1>${product.title}</h1>
                <h2>${product.price} kr</h2>
                <p>${product.description}</p>
            </div>
            <!-- popup -->
            ${popupTemplate(product, settings)}

        </div>
        `;
}

// slideshow with 3 products
let slideshowTemplate = function (product1, product2, product3, settings) {
    return /*html*/ `
<div class="container slider-container">
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('${product1.img_url[0]}');">
                    <div class="action-btn" style="background-color: ${settings.color};" onclick="openPopup(this)"><img src="./media/plus-icon.svg" alt="plus-icon"></div>
                    <div class="product-details-slideshow">
                        <h1>${product1.title}</h1>
                        <h2>${product1.price} kr</h2>
                        <p>${product1.description}</p>
                    </div> 
                    <!-- popup -->
               ${popupTemplate(product1, settings)}
                </div>
            </div>
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('${product2.img_url[0]}');">
                    <div class="action-btn" style="background-color: ${settings.color};" onclick="openPopup(this)"><img src="./media/plus-icon.svg" alt="plus-icon"></div>
                    <div class="product-details-slideshow">
                        <h1>${product2.title}</h1>
                        <h2>${product2.price} kr</h2>
                        <p>${product2.description}</p>
                    </div>
                      <!-- popup -->
               ${popupTemplate(product2, settings)}
                </div>
            </div>
            <div class="mySlides">
                <div class="product-container-slideshow" style="background-image:url('${product3.img_url[0]}');">
                    <div class="action-btn" style="background-color: ${settings.color};" onclick="openPopup(this)"><img src="./media/plus-icon.svg" alt="plus-icon"></div>
                    <div class="product-details-slideshow">
                        <h1>${product3.title}</h1>
                        <h2>${product3.price} kr</h2>
                        <p>${product3.description}</p>
                    </div>
                      <!-- popup -->
               ${popupTemplate(product3, settings)}
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
    <h1 class="section-title" style="font-family: ${settings.font}; color: ${settings.font_color};">${section.title}</h1>
    <div class="section-container-small" style="font-family: ${settings.font}; color: ${settings.font_color};">
        <div class="group-of-four">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[0], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[1], settings)}</div>
            </div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[2], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[3], settings)}</div>
            </div>
        </div>
        <div class="section-item-big">${singleProductTemplate(section.products[4], settings)}</div>
        <div class="section-item-slider">${slideshowTemplate(section.products[5],section.products[6],section.products[7], settings)}</div>
    </div>
    
    
    `

}

let sectionMedium = function (section, settings) {
    return /*html*/ `
    <h1 class="section-title" style="font-family: ${settings.font}; color: ${settings.font_color};">${section.title}</h1>
    <div class="section-container-medium" style="font-family: ${settings.font}; color: ${settings.font_color};">
        <div class="group-of-three">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[0], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[1], settings)}</div>
            </div>
            <div class="section-item-big">${singleProductTemplate(section.products[2], settings)}</div>
        </div>
        <div class="group-of-three">
            <div class="section-item-big">${singleProductTemplate(section.products[3], settings)}</div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[4], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[5], settings)}</div>
            </div>
        </div>
        <div class="section-item-parallax">${parallaxTemplate(section)}</div> 
        <div class="group-of-three">
            <div class="section-item-big">${singleProductTemplate(section.products[6], settings)}</div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[7], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[8], settings)}</div>
            </div>
        </div>
        <div class="group-of-three">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[9], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[10], settings)}</div>
            </div>
            <div class="section-item-big">${singleProductTemplate(section.products[11], settings)}</div>
        </div>
    </div>
    
    
    `

}

let sectionLarge = function (section, settings) {
    return /*html*/ `
    <h1 class="section-title" style="font-family: ${settings.font}; color: ${settings.font_color};">${section.title}</h1>
    <div class="section-container-large" style="font-family: ${settings.font}; color: ${settings.font_color};">
        <div class="section-item-slider">${slideshowTemplate(section.products[0],section.products[1],section.products[2], settings)}</div>
        
        <div class="section-item-small">${singleProductTemplate(section.products[3], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[4], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[5], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[6], settings)}</div>
        <div class="group-of-five">
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[7], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[8], settings)}</div>
            </div>
            <div class="section-item-big">${singleProductTemplate(section.products[9], settings)}</div>
            <div>
                <div class="section-item-small">${singleProductTemplate(section.products[10], settings)}</div>
                <div class="section-item-small">${singleProductTemplate(section.products[11], settings)}</div>
            </div>
        </div>
        <div class="section-item-small">${singleProductTemplate(section.products[12], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[13], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[14], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[15], settings)}</div>
        <div class="section-item-parallax">${parallaxTemplate(section)}</div> 
        
        <div class="section-item-small">${singleProductTemplate(section.products[16], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[17], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[18], settings)}</div>
        <div class="section-item-small">${singleProductTemplate(section.products[19], settings)}</div>
    </div>
    
    
    `

}