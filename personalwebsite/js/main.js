document.addEventListener("DOMContentLoaded", function () {
    var gallery = document.getElementById("gallery");
    var images = [
        "./images/cat.jpg",
        "./images/city_apartment.jpg",
        "./images/lights.jpg",
        "./images/palm_trees.jpg",
        "./images/Dallas.jpg",
        "./images/aguy.jpg",
    ];

    images.forEach(function(imageUrl, index) {
        var img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "Gallery image";
        img.classList.add("img");
        if (index % 2 === 0) {
            img.classList.add("left");
        } else {
            img.classList.add("right");
        }
        gallery.appendChild(img);
    });

    document.querySelector('.menu-button').addEventListener('click', function () {
        const nav = document.querySelector('.nav ul');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});