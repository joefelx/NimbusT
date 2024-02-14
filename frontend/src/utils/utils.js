export function splitText(paragraph) {
  return paragraph.split("^");
}

export function mergeText(input) {
  let thread = "";
  const THREAD_LIMIT = 280;

  if (input.length > THREAD_LIMIT) {
    thread += `^${input.substring(0, 280)}`
    return thread.concat(mergeText(input.slice(280)))
  } else {
    thread += `^${input}`
  }

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
