const open = document.getElementById("open");
const modalContainer = document.getElementById("modal-container");
const close = document.getElementById("close");

open.addEventListener("click", () => {
  modalContainer.classList.add("show");
});

close.addEventListener("click", () => {
  modalContainer.classList.remove("show");
});

const data = [
  {
    title: "Modals are cool designs in Websites 😎",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt eaque laudantium vero non dolor! Voluptatem possimus atque neque incidunt sequi?",
    image: "../images/laptop.jpg",
  },
];

const para = document.querySelector(".para");
const heading = document.querySelector("h1");
const image = document.querySelector(".image");

para.innerHTML = data[0].description;
image.src = data[0].image;
image.width = "400";
heading.innerHTML = data[0].title;
