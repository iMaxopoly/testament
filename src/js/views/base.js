export const elements = {
  // Global selectors
  pageType: document.querySelector("body > section"),
  header: document.querySelector(".header"),
  navigation: document.querySelector(".header__main-nav"),
  footer: document.querySelector(".footer"),

  // frontpage
  slidesContainer: document.querySelector("section.slide > ul")
}

export const elementsClassNames = {
  // Global classnames
  navigationFixed: "header__main-nav--fixed",
  slideVisible: "slide__image-container--image-visible",
  slideInvisible: "slide__image-container--image-invisible"
}
