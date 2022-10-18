export const smallerImageHandler = (path, size) => {
  let image;
  if (path) {
    image = path.match(/media\/screenshots/)
      ? path.replace(
          "/media/screenshots",
          `/media/resize/${size}/-/screenshots`
        )
      : path.replace("/media/games/", `/media/resize/${size}/-/games/`);
  } else {
    image = path;
  }
  return image;
};
