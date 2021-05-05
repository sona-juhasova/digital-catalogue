// /* fetch data from catalogue-one JSON */

// function loadCatalogue() {
//     fetch('catalogue-one.json')
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (json) {
//             console.log(json);
//             appendCatalogue(json.sections);
//         })
// }

// /* append JSON data to the DOM */

// function appendCatalogue(sections) {
//     let htmlTemplate = "";
//     for (let section of sections) {
//         if (section.type === "intro") {
//             htmlTemplate += `
//             <div class="intro-img"> 
//             <img src="${section.intro_img}">
//             </div> 
    
//             `;
            
//         }

//         if (section.type === "text") {
//             htmlTemplate += `
//             <div class="text-element">
//                 <h1>${section.title}</h1>
//                 <h2>${section.subtitle}</h2>
//                 <h3>${section.article}</h3>
//             </div>
//             `;
//         }

        
//         if (section.type === "category") {
//             for (let product of section.products) {


//         htmlTemplate += ` 
//         <div class="product-container">
//         <img src="${product.img_url}">
//         <div class="product-details">
//         <h1>${product.title}</h1>
//         <h2>${product.price}</h2>
//         <p>${product.description}<p>
//         </div>
//         </div> 
//         `;
//         }
//     }
        
//     }
//     document.querySelector("#catalogue").innerHTML = htmlTemplate;
// }


// loadCatalogue();