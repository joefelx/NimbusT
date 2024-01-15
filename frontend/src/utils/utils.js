export function splitText(paragraph) {
  let word = paragraph.split("^");
  return word;
}

export function mergeText(textList) {
  let thread = "";
  textList.forEach((text) => {
    thread += `^${text}\n`;
  });

  return thread;
}

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

export function formatDate(dateString) {
  const date = new Date(dateString);
  let day = date.getDate();
  let month = date.getMonth() + 1;
  let year = date.getFullYear();
  return `${day}/${month}/${year}`;
}
