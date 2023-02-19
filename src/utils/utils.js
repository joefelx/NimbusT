export function splitText(paragraph) {
  let word = paragraph.split("^");
  return word;
}

// export function handleResize(inputName) {
//   const inputName = document
//     .querySelector(inputName)
//     .addEventListener("keyup", (e) => {
//       inputName.style.height = "63px";
//       let scHeight = e.target.scrollHeight;
//       inputName.style.height = `${scHeight}px`;
//     });
// }
