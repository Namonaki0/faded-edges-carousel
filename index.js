const scroller = document.querySelector(".scroller");

if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
  addScrollAnimation();
}

function addScrollAnimation() {
  scroller.setAttribute("data-animated", true);

  const scrollerInner = scroller.querySelector(".scroller__inner");
  const scrollerInnerContent = Array.from(scrollerInner.children);

  scrollerInnerContent.forEach((item) => {
    const duplicatedItem = item.cloneNode(true);
    duplicatedItem.setAttribute("aria-hidden", true);
    scrollerInner.appendChild(duplicatedItem);
  });
}
