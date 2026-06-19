
lightbox.option({
    'resizeDuration': 200,
    'wrapAround': true,
    'fadeDuration': 300 
})

document.addEventListener("DOMContentLoaded", function () {

    
    const shopButton = document.getElementById("shopBtn");

    shopButton.addEventListener("click", function () {
        alert("Welcome to Buka Skate Shop!");
        window.location.href = "products.html";
    });


    document.getElementById("year").textContent =
        new Date().getFullYear();

   
    const heading = document.querySelector("h1");

    heading.addEventListener("click", function () {
        heading.style.color = "orange";
    });

}); 