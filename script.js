/*function learnJavaScript() {
  console.log("Я учу JavaScript!");
}
learnJavaScript();*/

const images = document.querySelectorAll("img");
const buttons = document.querySelectorAll("button");
let currentImage = 0;
images[1].style.display = "none";
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    images[currentImage].style.display = "none";
    currentImage = (currentImage + 1) % 2;
    images[currentImage].style.display = "block";
  });
});
