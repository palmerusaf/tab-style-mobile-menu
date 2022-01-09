# tab-style-mobile-menu

## Description

 This is a simple JS function that creates a tab-style menu at the top of the website when the site is accessed on mobile. It does this by reading the document for links with specific class names and converting them into a nav-bar.

## How to use

#### Without NPM
* Download the file [here](https://raw.githubusercontent.com/palmerusaf/tab-style-mobile-menu/main/dist/main.js) and include the following `<script>` tag in the head of your html document.

* `<script src='path/to/file/main.js' defer>`
* Then for the links you want to have displayed as tabs add the class name `menu-item-displayed`
* For the links you want hidden under the hamburger icon add the class name `menu-item-under-icon`
* Example:
    ```
    <a class="menu-item-displayed" href="#">link 1</a>
    <a class="menu-item-displayed" href="#">link 2</a>
    <a class="menu-item-displayed" href="#">link 3</a>
    <a class="menu-item-under-icon" href="#">other link 1</a>
    <a class="menu-item-under-icon" href="#">other link 2</a>
    <a class="menu-item-under-icon" href="#">other link 3</a>
    ```
#### With NPM (preferred)

## Motivations

The motivations behind this project are to practice creating commonly used JS web functions using standard JS and practicing publishing node packages.
