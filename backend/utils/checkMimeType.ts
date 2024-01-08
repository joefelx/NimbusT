function checkMimeType(type:string) {
  const d = new Date();
  let time = d.getTime();
  switch (type) {
    case "image/jpeg":
      return `${time}.jpeg`;

    case "image/png":
      return `${time}.png`;

    case "image/jpg":
      return `${time}.jpg`;

    default:
      break;
  }
}

export default checkMimeType;