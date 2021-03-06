// /* fetch data from catalogue-one JSON */

function loadCatalogue() {
    fetch('./json/catalogue-one.json')
        .then(function (response) {
            return response.json();
        })
        .then(function (json) {
            console.log(json);
            appendCatalogue(json.sections, json.settings);

            $('[data-parallax="scroll"]').parallax();
            $('.slider-container').each(function (index, sliderElement) {
                sliderElement.slideIndex = 1;
                $('.demo', $(sliderElement)).each(function (index2, demoElement) {
                    demoElement.onclick = function () {
                        showSlides(index2 + 1, sliderElement);
                    }
                });
                $('.prev', $(sliderElement)).each(function (index2, prevElement) {
                    prevElement.onclick = function () {
                        plusSlides(-1, sliderElement);
                    }
                });
                $('.next', $(sliderElement)).each(function (index2, prevElement) {
                    prevElement.onclick = function () {
                        plusSlides(1, sliderElement);
                    }
                });
                showSlides(1, sliderElement);
            });
            $('.popup-wrapper').each(function (index, popupElement) {
                setPopupSlider(popupElement);
            });
            //showSlides(slideIndex);
        })
}

/* append JSON data to the DOM */

function appendCatalogue(sections, settings) {
    let htmlTemplate = "";
    for (let section of sections) {
        if (section.type === "intro") {
            htmlTemplate += introTemplate(section, settings);

        }

        if (section.type === "text") {
            htmlTemplate += textElementTemplate(section, settings);
        }


        if (section.type === "category") {
            if (section.products.length == 8) {

                htmlTemplate += sectionSmall(section, settings);

            }
            if (section.products.length == 12) {

                htmlTemplate += sectionMedium(section, settings);

            }
            if (section.products.length == 20) {

                htmlTemplate += sectionLarge(section, settings);

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