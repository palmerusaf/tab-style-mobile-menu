import makeDropDownMenu from "make-drop-down-menu";
import "./style.scss";

const mobileMenu = (() => {
  const displayedItems = [...document.getElementsByClassName("item-displayed")];
  const hamburgeredItems = [
    ...document.getElementsByClassName("item-under-icon"),
  ];

  function _makeHamburgerButton() {
    const button = document.createElement("button");
    button.classList = "hamburger hamburger--spin";
    button.type = "button";
    button.addEventListener("click", () => {
      button.classList.toggle("is-active");
    });
    const burgerBox = document.createElement("span");
    burgerBox.classList = "hamburger-box";
    const burgerInner = document.createElement("span");
    burgerInner.classList = "hamburger-inner";
    burgerBox.appendChild(burgerInner);
    button.appendChild(burgerBox);
    return button;
  }
})();
export { mobileMenu };
