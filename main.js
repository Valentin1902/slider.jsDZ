const images = document.querySelectorAll(".slider-img");
const controls = document.querySelectorAll(".controlls");
let imageIndex = 0;

function show(index) {
  images[imageIndex].classList.remove("active");
  images[index].classList.add("active");
  imageIndex = index;
}

controls.forEach((control) => {
  control.addEventListener("click", (e) => {
    if (e.target.classList.contains("prev")) {
      let index = imageIndex - 1;
      if (index < 0) {
        index = images.length - 1;
      }
      show(index);
    } else if (e.target.classList.contains("next")) {
      let index = imageIndex + 1;
      if (index >= images.length) {
        index = 0;
      }
      show(index);
    }
  });
});
show(imageIndex);
console.log(show);

// Кнопка, яка відповідає за перемикання картинок самостійно кожні 3 секунди!
// беремо кнопку по классу
const intervalButton = document.querySelector(".buttonInterval");

let interval;
//створив функцію яка буде перемикати картинки по індексу
function nextSlide() {
  let index = (imageIndex + 1) % images.length;
  show(index);
}
// функція інтервал перемикання картинок кожні 3 секунди
function startAutoSlide() {
  interval = setInterval(nextSlide, 3000);
}
// функція при нажиманні кнопки буде спрацьовувати функція startAutoSlide, кожні 3 секунди перемикання картинок зліва на право
intervalButton.addEventListener("click", function () {
  startAutoSlide();
});
