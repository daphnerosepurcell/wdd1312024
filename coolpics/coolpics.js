// Get the gallery div
var gallery = document.getElementById("gallery");

// Image source
var imageUrl = "./images/norris-sm.jpeg";

// Number of rows and columns
var numRows = 3;
var numCols = 3;

// Repeat the image to create a grid of 3 by 3
for (var i = 0; i < numRows; i++) {
    // Create a new row div
    var row = document.createElement("div");
    row.classList.add("row");

    for (var j = 0; j < numCols; j++) {
        // Create a new figure element
        var figure = document.createElement("figure");

        // Create a new img element
        var img = document.createElement("img");
        img.src = imageUrl;
        img.alt = "picture";
        img.classList.add("img"); // Add the img class here

        // Append the img element to the figure element
        figure.appendChild(img);

        // Append the figure element to the row
        row.appendChild(figure);
    }

    // Append the row to the gallery
    gallery.appendChild(row);
}
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.menu-button').addEventListener('click', () => {
        const nav = document.querySelector('.nav-container');
        nav.style.display = nav.style.display === 'block' ? 'none' : 'block';
    });
});