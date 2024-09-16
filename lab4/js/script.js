document.addEventListener("DOMContentLoaded", () => {
  const thirdElem = document.getElementById("education");
  const fourthElem = document.querySelector(".list-title");

  thirdElem.addEventListener("click", () => {
    thirdElem.classList.toggle("education-active");
  });

  fourthElem.addEventListener("click", () => {
    fourthElem.classList.toggle("list-title-active");
  });

  const imagesContainer = document.querySelector(".images-container");
  const imageBlockTemplate = document.querySelector(".template");
  const addButton = document.querySelector(".add-btn");
  const sizeUpButton = document.querySelector(".size-up-btn");
  const sizeDownButton = document.querySelector(".size-down-btn");
  const removeButton = document.querySelector(".remove-btn");
  let images = document.querySelectorAll(".image-decorator > img");
  let selectedImage = document.querySelector(".selected");

  for (const image of images) {
    image.sizeCof = 1;
  }

  sizeUpButton.addEventListener("click", () => {
    if (selectedImage.sizeCof >= 2) return;
    selectedImage.sizeCof += 0.1;
    selectedImage.style.transform = `scale(${selectedImage.sizeCof})`;
  });

  sizeDownButton.addEventListener("click", () => {
    if (selectedImage.sizeCof <= 1) {
      alert("Зображення має мінімальний розмір");
      return;
    }
    selectedImage.sizeCof -= 0.1;
    selectedImage.style.transform = `scale(${selectedImage.sizeCof})`;
  });

  addButton.addEventListener("click", () => {
    const imageUrl = prompt("Put image url here:");
    if (imageUrl === null || imageUrl === "") {
      alert("Incorrect input");
      return;
    }

    const newImageBlock = imageBlockTemplate.cloneNode(true);
    newImageBlock.classList.remove("template");
    const newImage = newImageBlock.querySelector("img");

    UnselectImages(images);

    newImage.className = "selected";
    newImage.src = imageUrl;
    newImage.sizeCof = 1;
    newImage.style.transform = `scale(${newImage.sizeCof})`;
    imagesContainer.appendChild(newImageBlock);
    images = document.querySelectorAll(".image-decorator > img");
    selectedImage = document.querySelector(".selected");
  });

  removeButton.addEventListener("click", () => {
    if (images.length === 0) {
      alert("There are no available images");
      return;
    }

    const selectedImageBlock =
      document.querySelector(".selected").parentElement;
    selectedImageBlock.remove();
    images = document.querySelectorAll(".image-decorator > img");
    images[images.length - 1].className = "selected";
    selectedImage = document.querySelector(".selected");
  });
});

function UnselectImages(images) {
  for (const image of images) {
    image.classList.remove("selected");
  }
}
