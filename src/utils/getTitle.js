export function getTitle(text) {
  let title = "";
  for (var i = 0; i < Math.min(text.length, 35); ++i) {
    title = title + text[i];
  }
  return title + "...";
}
