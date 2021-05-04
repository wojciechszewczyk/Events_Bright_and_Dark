let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

/* const changeColor = (e) => {
    if(e.keyCode === 38) {
        if (red < 255) {
        red += 5;
        green += 5;
        blue += 5;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
        }
    }
    else if (e.keyCode === 40 && red >= 0) {
        red -= 5;
        green -= 5;
        blue -= 5;
        document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
    }
} */

const changeColor = (e) => {
    switch (e.keyCode) {
        case 38:
            red <= 255 ? red += 5 : red;
            green <= 255 ? green += 5 : green;
            blue <= 255 ? blue += 5 : blue;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
            break;
        case 40:
            red >= 0 ? red -= 5 : red;
            green >= 0 ? green -= 5 : green;
            blue >= 0 ? blue -= 5 : blue;
            document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    }
}
window.addEventListener("keydown", changeColor);