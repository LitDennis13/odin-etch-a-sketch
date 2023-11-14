/*
16x16
32x32
48x48
64x64
*/
const sketch_container = document.querySelector("#sketch-container");
let type_of_pixels = 0;
let number_of_pixels = 256;
let current_etch_color = "black";
let random_rgb_values = [0,0,0];
let pixel_sizes = [
    `<div id="pixel" style="height: 48px;width:48px;"></div>`, // 16x16
    `<div id="pixel" style="height: 24px;width:24px;"></div>`, // 32x32
    `<div id="pixel" style="height: 12px;width:12px;"></div>` // 64x64
];
function change_grid_button_color(button) {
    const grid_options_buttons = document.querySelectorAll("#grid-options *");
    for (let element of grid_options_buttons) {
        if (element.textContent === button){
            
            element.style.backgroundColor = "#FF0000";
            
        }
        else {
            element.style.backgroundColor = "#6C3B2A";
        }
    }
}
function change_grid(event) {
    let pixels_to_add = "";
    switch (event.target.textContent) {
        case "16x16":
            number_of_pixels = 256;
            type_of_pixels = 0;
            change_grid_button_color("16x16");
            break;
        case "32x32":
            number_of_pixels = 1024;
            type_of_pixels = 1;
            change_grid_button_color("32x32");
            break;
        case "64x64":
            number_of_pixels = 4096;
            type_of_pixels = 2;
            change_grid_button_color("64x64");
            break;
    }
    for (let i = 0; i < number_of_pixels; i++) {
        pixels_to_add += pixel_sizes[type_of_pixels];
    }
    sketch_container.innerHTML = pixels_to_add;
}

function change_pixel_color(event) {
    if (event.target.id === "pixel") {
        if (current_etch_color === "black"){
            event.target.style.backgroundColor = "black";
        }
        else if (current_etch_color === "rgb") {
            
            random_rgb_values[0] = Math.random() * 255;
            random_rgb_values[1] = Math.random() * 255;
            random_rgb_values[2] = Math.random() * 255;
            event.target.style.backgroundColor = `rgb(${random_rgb_values[0]},${random_rgb_values[1]},${random_rgb_values[2]})`;
        }
    }  
}
function clear() {
    let pixels_to_add = "";
    for (let i = 0; i < number_of_pixels; i++) {
        pixels_to_add += pixel_sizes[type_of_pixels];
    }
    sketch_container.innerHTML = pixels_to_add;
    console.log(pixels_to_add);
}
function change_etch_color(event) {
    switch (event.target.textContent) {
        case "Black":
            current_etch_color = "black";
            break;
        case "RGB":
            current_etch_color = "rgb";
            break;
    }
}

document.addEventListener("DOMContentLoaded",() => {
    let pixels_to_add = "";
    for (let i = 0; i < number_of_pixels; i++) {
        pixels_to_add += pixel_sizes[type_of_pixels];
    }

    sketch_container.innerHTML = pixels_to_add;
});




const grid_options = document.querySelector("#grid-options");

grid_options.addEventListener("click",change_grid);

const color_buttons = document.querySelector("#end-section");


color_buttons.addEventListener("click",change_etch_color);

const eraser = document.querySelector("#eraser");

eraser.addEventListener("click",clear);

sketch_container.addEventListener("mouseover", change_pixel_color);