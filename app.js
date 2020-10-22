let pro = [
  "such",
  "that",
  "these",
  "this",
  "those",
  "the",
  "any",
  "our",
  "my",
  "your",
  "the",
  "no",
];
let adj = [
  "clean",
  "elegant",
  "handsome",
  "magnificent",
  "kind",
  "witty",
  "ambitious",
  "obedient",
  "grumpy",
  "scary",
  "worried",
  "angry",
  "colossal",
  "tiny",
  "fat",
];
let noun = [
  "method",
  "bird",
  "love",
  "library",
  "nature",
  "fact",
  "idea",
  "video",
  "strategy",
  "income",
  "medicine",
  "shop",
  "mood",
  "collection",
  "solution",
  "charity",
  "error",
  "client",
  "diamond",
];

let dom = [".com", ".net", ".us", ".org", ".cl"];

function url() {
  let string = "";
    for (const p of pro) {
      for (const a of adj) {
        for (const n of noun) {
          for (const d of dom) {
            string += ('<span class="p">' + p +'</span>' + '<span class="a">' + a + '</span>' + '<span class="n">' + n + '</span>' + '<span class="d">' + d + '</span>' + "<br>")
          }
        }
      }
    }
  return string;
}
let urlstring = document.querySelector("#url");
let btn = document.querySelector("#btn");

btn.addEventListener("click", e => {
    urlstring.innerHTML = url()
})





