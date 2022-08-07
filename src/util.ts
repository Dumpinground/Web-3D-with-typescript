export function fallbackTo(url: string) {
  const div = document.createElement("div")
  const a = document.createElement("a");
  a.setAttribute("href", url);
  a.innerText = url;
  div.appendChild(a)
  return div;
}
