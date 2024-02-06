const redSlider = document.querySelector("#redslider");
const greenSlider = document.querySelector("#greenSlider");
const blueSlider = document.querySelector("#blueSlider");

const redValueSpan = document.querySelector("#redValue");
const greenValueSpan = document.querySelector("#greenValue");
const blueValueSpan = document.querySelector("#blueValue");

const colorBox = document.querySelector("#color-box");
const copyButton = document.querySelector("#copyButton");
const inpuTypeRGBValue = document.querySelector(".input-type-value");

redSlider.addEventListener("input", updateColor);
greenSlider.addEventListener("input", updateColor);
blueSlider.addEventListener("input", updateColor);
copyButton.addEventListener("click", copyRGBValue);

function updateColor() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  console.log(redValue, greenValue, blueValue);

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  console.log(rgbColor);

  colorBox.style.backgroundColor = rgbColor;

  redValueSpan.textContent = redValue;
  greenValueSpan.textContent = greenValue;
  blueValueSpan.textContent = blueValue;

  inpuTypeRGBValue.textContent = rgbColor;
}

updateColor();

function copyRGBValue() {
  const redValue = redSlider.value;
  const greenValue = greenSlider.value;
  const blueValue = blueSlider.value;

  const rgbColor = `rgb(${redValue},${greenValue},${blueValue})`;
  console.log(rgbColor);

  navigator.clipboard
    .writeText(rgbColor)
    .then(() => {
      alert(`RGB Color Value copied to clipboard: ${rgbColor}`);
    })
    .catch((error) => {
      console.error("Failed to copy RGB value :", error);
    });
}
