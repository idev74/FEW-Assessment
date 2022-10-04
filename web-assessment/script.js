const colorbox = document.getElementById('box')
const widthInput = document.getElementById('widthInput')
const heightInput = document.getElementById('heightInput')
const colorInput = document.getElementById('colorInput')

const displayWidth = document.getElementById('displayWidth')
const displayHeight = document.getElementById('displayHeight')
const displayColor = document.getElementById('displayColor')



colorbox.style.width = `${widthInput.value}px`;
colorbox.style.height = `${heightInput.value}px`;
colorbox.style.backgroundColor = colorInput.value;

heightInput.addEventListener("input", update);
widthInput.addEventListener("input", update);
colorInput.addEventListener("input", update);

function update(e) {
    displayWidth.innerHTML = `${widthInput.value}px`;
    displayHeight.innerHTML = `${heightInput.value}px`;
    displayColor.innerHTML = colorInput.value;
    box.style.width = `${widthInput.value}px`;
    box.style.height = `${heightInput.value}px`;
    box.style.backgroundColor = colorInput.value;
    console.log(update)
}

