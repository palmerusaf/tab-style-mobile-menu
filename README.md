# tab-style-mobile-menu

## Description

This is a simple JS function that creates a tab-style menu at the top of the website when the site is accessed on mobile. It does this by reading the document for links with specific class names and converting them into a nav-bar.

## [ GitHub Repository ](https://github.com/palmerusaf/tab-style-mobile-menu)

## [Live Preview Example](https://palmerusaf.github.io/tab-style-mobile-menu)

## How to use

#### Without NPM

- Download the file [here](https://raw.githubusercontent.com/palmerusaf/tab-style-mobile-menu/main/dist/main.js) and include the following `<script>` tag in the head of your html document.

- `<script src='path/to/file/main.js' defer>`
- Then for the links you want to have displayed as tabs add the class name `menu-item-displayed`
- For the links you want hidden under the hamburger icon add the class name `menu-item-under-icon`
- Example:
  ```
  <a class="menu-item-displayed" href="#">link 1</a>
  <a class="menu-item-displayed" href="#">link 2</a>
  <a class="menu-item-displayed" href="#">link 3</a>
  <a class="menu-item-under-icon" href="#">other link 1</a>
  <a class="menu-item-under-icon" href="#">other link 2</a>
  <a class="menu-item-under-icon" href="#">other link 3</a>
  ```

#### With NPM (preferred)

- Enter the following into the command line:
  `npm i tab-style-mobile-menu`
- There are three ways to use this module with NPM

  1. Without a module bundler:
     The steps are the same as without NPM except add the following script tag to the head of your html file:
     `<script src='node_modules/tab-style-mobile-menu/dist/main.js' defer>`

  2. With bundler nodes already added to html document:
     Simply add the following line to the import list of your index.js file:
     `import 'tab-style-mobile-menu'`
  3. If adding the links programmatically add the following line after appending your links:
     `mobileMenu.addNavBar();`

     Example:

  ```
  const link1 = document.createElement("a");

  link1.textContent = "link1";
  link1.classList = "menu-item-displayed";
  document.body.appendChild(link1);
  const link2 = document.createElement("a");
  link2.textContent = "link2";
  link2.classList = "menu-item-displayed";
  document.body.appendChild(link2);
  const link3 = document.createElement("a");
  link3.textContent = "link3";
  link3.classList = "menu-item-displayed";
  document.body.appendChild(link3);

  const otherLink1 = document.createElement("a");
  otherLink1.textContent = "otherLink1";
  otherLink1.classList = "menu-item-displayed";
  document.body.appendChild(otherLink1);
  const otherLink2 = document.createElement("a");
  otherLink2.textContent = "otherLink2";
  otherLink2.classList = "menu-item-displayed";
  document.body.appendChild(otherLink2);
  const otherLink3 = document.createElement("a");
  otherLink3.textContent = "otherLink3";
  otherLink3.classList = "menu-item-displayed";
  document.body.appendChild(otherLink3);

  mobileMenu.addNavBar();
  ```

* Note module will not remove and nav bars present. If this module is used more than once it could cause problems.

## Bugs and suggestions

- Report bugs and suggestions [here](https://github.com/palmerusaf/tab-style-mobile-menu/issues)

## Motivations

The motivations behind this project are to practice creating commonly used JS web functions using standard JS and practicing publishing node packages.
