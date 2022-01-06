import "./style.scss";

const mobileMenu = (() => {
  const menuItemDisplayed = [
    ...document.getElementsByClassName("menu-item-displayed"),
  ];
  const menuItemUnderIcon = [
    ...document.getElementsByClassName("menu-item-under-icon"),
  ];

  document.body.prepend(_makeNavBar());

  function _makeNavBar() {
    const nav = document.createElement("nav");
    nav.classList = "menu-bar";
    const listDisplayed = document.createElement("ul");
    listDisplayed.classList = "list-displayed";
    menuItemDisplayed.forEach((item) => {
      const li = document.createElement("li");
      li.classList = "list-displayed__item";
      li.appendChild(item);
      listDisplayed.appendChild(li);
    });
    nav.appendChild(listDisplayed);

    const listUnderIcon = _makeListUnderIcon();
    document.body.appendChild(listUnderIcon)
    const burgerIcon = _makeHamburgerButton(listUnderIcon);
    nav.appendChild(burgerIcon);

    return nav;
  }

  function _makeListUnderIcon() {
    const listUnderIcon = document.createElement("ul");
    listUnderIcon.classList = "list-under-icon";
    menuItemUnderIcon.forEach((item) => {
      const li = document.createElement("li");
      li.classList = "list-under-icon__item";
      li.appendChild(item);
      listUnderIcon.appendChild(li);
    });
    return listUnderIcon;
  }

  function _makeHamburgerButton(DOMNode) {
    const button = _makeButton();
    _addAnimationClickEvent(button);
    _makeTriggerToggleItemDisplay(button, DOMNode);

    const burgerBox = _makeBurgerBox();
    button.appendChild(burgerBox);
    return button;

    function _makeButton() {
      const button = document.createElement("button");
      button.classList = "hamburger hamburger--spin";
      button.type = "button";
      return button;
    }

    function _addAnimationClickEvent(button) {
      button.addEventListener("click", () => {
        button.classList.toggle("is-active");
      });
    }

    function _makeTriggerToggleItemDisplay(trigger, item) {
      trigger.addEventListener("click", () => {
        item.classList.toggle("list-under-icon--visible");
      });
    }

    function _makeBurgerBox() {
      const burgerBox = document.createElement("span");
      burgerBox.classList = "hamburger-box";
      const burgerInner = document.createElement("span");
      burgerInner.classList = "hamburger-inner";
      burgerBox.appendChild(burgerInner);
      return burgerBox;
    }
  }
})();
export { mobileMenu };
