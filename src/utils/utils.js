export function splitText(paragraph) {
  let word = paragraph.split("^");
  return word;
}

export function mergeText(textList) {}

export function handleResize(input) {
  const inputName = document.querySelector(input);
  inputName.addEventListener("input" || "click", (e) => {
    let scHeight = e.target.scrollHeight;
    inputName.style.height = `${scHeight}px`;
  });
  inputName.addEventListener("click", (e) => {
    let scHeight = e.target.scrollHeight;
    inputName.style.height = `${scHeight}px`;
  });
}
