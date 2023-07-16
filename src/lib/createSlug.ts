export default function (title: string) {
  return title
    .replace(/[^A-Za-z0-9 ]/g, "")
    .toLowerCase()
    .trim()
    .replace(/\s+/g, "-");
}
