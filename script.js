/*
16x16
32x32
48x48
64x64
*/
const sketch_container = document.querySelector("#sketch-container");

let pixel_sizes = [
    `<div id="pixel" style="height: 48px;width:48px;"></div>`, // 16x16
    `<div id="pixel" style="height: 24px;width:24px;"></div>`, // 32x32
    `<div id="pixel" style="height: 12px;width:12px;"></div>` // 64x64
];
function change_grid_button_color(event, button) {
    const grid_options_buttons = document.querySelectorAll("#grid-options *");
    for (let element of grid_options_buttons) {
        if (element.textContent === button){
            
            element.style = "background-color: #FF0000";
        }
        else {
            element.style = "background-color: #955F20";
        }
    }
}
function change_grid(event) {
    let pixels_to_add = "";
    let number_of_pixels = 0;
    let type_of_pixels = 0;
    switch (event.target.textContent) {
        case "16x16":
            number_of_pixels = 256;
            type_of_pixels = 0;
            change_grid_button_color(event, "16x16");
            break;
        case "32x32":
            number_of_pixels = 1024;
            type_of_pixels = 1;
            change_grid_button_color(event, "32x32");
            break;
        case "64x64":
            number_of_pixels = 4096;
            type_of_pixels = 2;
            change_grid_button_color(event, "64x64");
            break;
    }
    for (let i = 0; i < number_of_pixels; i++) {
        pixels_to_add += pixel_sizes[type_of_pixels];
    }
    sketch_container.innerHTML = pixels_to_add;
}


document.addEventListener("DOMContentLoaded",() => {
    let pixels_to_add = "";
    for (let i = 0; i < 256; i++) {
        pixels_to_add += pixel_sizes[0];
    }

    sketch_container.innerHTML = pixels_to_add;
});



const grid_options = document.querySelector("#grid-options");

grid_options.addEventListener("click",change_grid);


