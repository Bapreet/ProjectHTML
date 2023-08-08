// script.js

// jQuery code to load header and footer
 $(document).ready(function() {
    // Load global header
    $("#header").load("header.html");

    // Load global footer
    $("#footer").load("footer.html");

    addHoverEffect();
 });
// Function to add hover effect to product options
function addHoverEffect() {
    const new1 = document.querySelectorAll("#div1");
    new1.forEach((option) => {
        option.addEventListener("mouseenter", () => {
            option.style.transform = "scale(1.05)";
            option.style.opacity = 1;
        });

        option.addEventListener("mouseleave", () => {
            option.style.transform = "scale(1)";
            option.style.opacity = 0.9;
        });
    });

    //Adding transformation function to home page divs when hovered
    const new2 = document.querySelectorAll("#div2");
    new2.forEach((option) => {
        option.addEventListener("mouseenter", () => {
            option.style.transform = "scale(1.05)";
            option.style.opacity = 1;
        });

        option.addEventListener("mouseleave", () => {
            option.style.transform = "scale(1)";
            option.style.opacity = 0.9;
        });
    });

    const productOptions = document.querySelectorAll("#product-options li");
    productOptions.forEach((option) => {
        option.addEventListener("mouseenter", () => {
            option.style.transform = "scale(1.05)";
            option.style.opacity = 1;
        });

        option.addEventListener("mouseleave", () => {
            option.style.transform = "scale(1)";
            option.style.opacity = 0.9;
        });
    });
    
    const productSpecsItems = document.querySelectorAll("#product-specs li");
    productSpecsItems.forEach((item) => {
        item.addEventListener("mouseenter", () => {
            item.style.fontSize = "18px";
            item.style.fontWeight = "bold";
        });

        item.addEventListener("mouseleave", () => {
            item.style.fontSize = "18px";
            item.style.fontWeight = "normal";
        });
    });

}

