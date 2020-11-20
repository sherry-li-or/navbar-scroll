/**
 * 將 active 的項目保持置中
 * @param {element} activeItem 被 active 的 項目
 * @param {element} scrollContainer  scroll 的容器
 */

function navigationScroll({ activeItem, scrollContainer }) {
  if (!activeItem || !scrollContainer) return;

  const activeRect = activeItem.getBoundingClientRect();
  const scrollRect = scrollContainer.getBoundingClientRect();

  const scrollLeftPosition =
    activeRect.left -
    scrollRect.left -
    scrollRect.width / 2 +
    activeRect.width / 2;

  scrollContainer.scrollTo({
    left: scrollContainer.scrollLeft + scrollLeftPosition,
    behavior: "smooth",
  });
  // or  scrollContainer.scrollLeft += scrollLeftPosition;
}

export default navigationScroll;

module.exports = navigationScroll;
