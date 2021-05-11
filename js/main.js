// /* fetch data from catalogue-one JSON */

function loadCatalogue() {
    fetch('../json/catalogue-one.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            appendCatalogue(json.sections);
        })
}

/* append JSON data to the DOM */

function appendCatalogue(sections) {
    let htmlTemplate = "";
    for (let section of sections) {
        if (section.type === "intro") {
            htmlTemplate += introTemplate ;

        }

        if (section.type === "text") {
            htmlTemplate += /*html*/ `
            <div class="text-element">
                <h1>${section.title}</h1>
                <h2>${section.subtitle}</h2>
                <h3>${section.article}</h3>
            </div>
            `;
        }


        if (section.type === "category") {
            for (let product of section.products) {


                htmlTemplate += /*html*/ ` 
        <div class="product-container" style="background-image:url('${product.img_url[0]}');">
            <div class="action-btn" style="background-color: ${settings.font};"></div>
            <div class="product-details">
                <h1>${product.title}</h1>
                <h2>${product.price}</h2>
                <p>${product.description}</p>
            </div>
        </div>
        `;
            }
        }

    }
    document.querySelector("#catalogue").innerHTML = htmlTemplate;
}

function openPopup(target) {
    var popupWrapper = target.parentElement.getElementsByClassName("popup-wrapper")[0];
   
        popupWrapper.style.display = "block"; 
    }


function closePopup(target) {
    var popupWrapper = target.closest(".popup-wrapper");
        popupWrapper.style.display = "none";
    
}

loadCatalogue();