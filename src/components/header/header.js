import "./header.scss";

class Header {
  headerEle = null;
  render() {
    this.headerEle = document.createElement("h1");
    this.headerEle.classList.add("header");
    this.headerEle.innerHTML = "Webpack is awesome";
    document.body.appendChild(this.headerEle);
  }
}

export default Header;
