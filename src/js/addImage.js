import imagePath from "../assets/images/noodle.jpeg";
import textTxt from "../assets/text/text.txt";

export function addImage() {
  const imgElement = document.createElement("img");
  imgElement.src = imagePath;
  imgElement.width = 500;
  imgElement.alt = textTxt;
  console.log(textTxt);
  document.body.appendChild(imgElement);
}
