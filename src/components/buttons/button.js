import "./button.scss";
class Button {
  button = null;
  render() {
    this.button = document.createElement("button");
    this.button.innerHTML = "test button";
    this.button.classList.add("btn");

    this.button.addEventListener("click", () => {
      this.addText();
    });

    document.body.appendChild(this.button);
  }

  addText() {
    const pEle = document.createElement("p");
    pEle.classList.add("btn__text");
    pEle.innerHTML = Math.random().toString(16).slice(2);
    document.body.appendChild(pEle);
  }

  destroy() {
    if (this.button) {
      this.button.remove();
    }
  }
}

export default Button;
