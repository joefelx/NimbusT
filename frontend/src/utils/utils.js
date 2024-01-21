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
  const date = new Date(dateString).toLocaleDateString();
  return date;
}

export function truncateStr(str, length) {
  let out = "";
  if (str.length < length) {
    out = str;
  } else {
    out = out + str.substring(0, length) + "...";
  }
  return out;
}
