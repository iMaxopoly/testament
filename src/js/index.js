import { elements, elementsClassNames } from "./views/base"

/**
 * Global state
 */
const state = {
  dresses: [],

  cart: {}
}

/**
 * Sticky Navigation
 * TODO: fix hard coded value using offsetTop or getBoundingClientRect
 */
addEventListener("scroll", () => {
  const navDOM = elements.navigation

  const fixedClassName = elementsClassNames.navigationFixed

  if (window.scrollY > 134) {
    const navDOM = elements.navigation
    if (!navDOM.classList.contains(fixedClassName)) {
      navDOM.classList.add(fixedClassName)
    }
    return
  }

  if (navDOM.classList.contains(fixedClassName)) {
    navDOM.classList.remove(fixedClassName)
  }
})

/**
 * Slider
 */
addEventListener("load", () => {
  const slidesDOM = elements.slidesContainer
  const slides = slidesDOM.children
  let pos = 0

  setInterval(() => {
    if (pos >= slides.length - 1) {
      slides[pos].classList.replace(
        elementsClassNames.slideVisible,
        elementsClassNames.slideInvisible
      )
      pos = 0
      slides[pos].classList.replace(
        elementsClassNames.slideInvisible,
        elementsClassNames.slideVisible
      )
    } else {
      slides[pos].classList.replace(
        elementsClassNames.slideVisible,
        elementsClassNames.slideInvisible
      )
      pos++;
      slides[pos].classList.replace(
        elementsClassNames.slideInvisible,
        elementsClassNames.slideVisible
      )
    }
  }, 8000)
});
