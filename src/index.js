import "./style.scss";

const mobileMenu = (() => {
  if (_getMenuItemDisplayed().length!==0){
    document.body.prepend(makeNavBar());
 }


  function _getMenuItemDisplayed() {
    const menuItemDisplayed = [
      ...document.getElementsByClassName("menu-item-displayed"),
    ];
    return menuItemDisplayed;
  }

  function _getMenuItemUnderIcon() {
    const menuItemUnderIcon = [
      ...document.getElementsByClassName("menu-item-under-icon"),
    ];
    return menuItemUnderIcon;
  }

  function makeNavBar() {
    const nav = document.createElement("nav");
    nav.classList = "menu-bar";

    const listDisplayed = _makeListDisplayed();
    const listUnderIcon = _makeListUnderIcon();
    const hamburgerButton = _makeHamburgerButton(listUnderIcon);

    nav.appendChild(listDisplayed);
    nav.appendChild(hamburgerButton);
    nav.appendChild(listUnderIcon);

    return nav;
  }

  function _makeListDisplayed() {
    const listDisplayed = _makeListFromItems(_getMenuItemDisplayed());
    listDisplayed.classList = "list-displayed";
    return listDisplayed;
  }

  function _makeListUnderIcon() {
    const listUnderIcon = _makeListFromItems(_getMenuItemUnderIcon());
    listUnderIcon.classList = "list-under-icon";
    return listUnderIcon;
  }

  function _makeHamburgerButton(DOMNode) {
    const button = _makeButton();
    _addAnimationClickEvent(button);
    _makeTriggerToggleItemDisplay(button, DOMNode);

    return button;

    function _makeButton() {
      const button = document.createElement("button");
      button.classList = "hamburger hamburger--spin";
      button.type = "button";

      const burgerBox = _makeBurgerBox();
      button.appendChild(burgerBox);

      return button;

      function _makeBurgerBox() {
        const burgerBox = document.createElement("span");
        burgerBox.classList = "hamburger-box";

        const burgerInner = document.createElement("span");
        burgerInner.classList = "hamburger-inner";

        burgerBox.appendChild(burgerInner);

        return burgerBox;
      }
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
  }

  function _makeListFromItems(items) {
    const list = document.createElement("ul");
    items.forEach((item) => {
      const li = document.createElement("li");
      li.appendChild(item);
      list.appendChild(li);
    });
    return list;
  }
  return { makeNavBar };
})();
export { mobileMenu };
