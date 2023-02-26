export function splitText(paragraph) {
  let word = paragraph.split("^");
  return word;
}

export function handleResize(input) {
  const inputName = document.querySelector(input);
  inputName.addEventListener("keyup", (e) => {
    let scHeight = e.target.scrollHeight;
    inputName.style.height = `${scHeight}px`;
  });
}
