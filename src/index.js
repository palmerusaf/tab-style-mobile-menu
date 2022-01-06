import makeDropDownMenu from "make-drop-down-menu";
import "./style.scss";

const mobileMenu = (() => {
  const menuItemDisplayed = [
    ...document.getElementsByClassName("menu-item-displayed"),
  ];
  const menuItemUnderIcon = [
    ...document.getElementsByClassName("menu-item-under-icon"),
  ];

  document.body.appendChild(_makeNavBar());

  function _makeNavBar() {
    const nav = document.createElement("nav");
    const listDisplayed = document.createElement("ul");
    listDisplayed.classList = "list-displayed";
    menuItemDisplayed.forEach((item) => {
      const li = document.createElement("li");
      li.classList = "list-displayed__item";
      li.appendChild(item);
      listDisplayed.appendChild(li);
    });
    nav.appendChild(listDisplayed);

    const listUnderIcon = document.createElement("ul");
    listUnderIcon.classList = "list-under-icon";
    menuItemUnderIcon.forEach((item) => {
      const li = document.createElement("li");
      li.classList = "list-under-icon__item";
      li.appendChild(item);
      listDisplayed.appendChild(li);
    });
    nav.appendChild(listUnderIcon);

    return nav;
  }

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
