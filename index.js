function changeImage(src) {
  let image = document.getElementById("image");
  image.src = src;
}

function updateImage() {
  let image = document.getElementById("image");
  let width = document.getElementById("width").value;
  let height = document.getElementById("height").value;
  let border = document.getElementById("border").value;
  let alt = document.getElementById("alt").value;
  image.width = width;
  image.height = height;
  image.style.border = border + "px solid black";
  image.alt = alt;
}
