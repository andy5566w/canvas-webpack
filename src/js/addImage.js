import imagePath from "../assets/images/noodle.jpeg";

export function addImage() {
  const imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.width = 500;
  document.body.appendChild(imgElement);
}
