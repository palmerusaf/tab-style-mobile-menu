import makeDropDownMenu from "make-drop-down-menu";

const mobileMenu = (() => {
  const displayedItems = [
    ...document.getElementsByClassName("item-displayed"),
  ];
  const hamburgeredItems = [
    ...document.getElementsByClassName("item-under-icon"),
  ];
})();
