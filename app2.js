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
let r = (arr) => Math.floor(Math.random() * arr.length);
function url() {
    return ('<span class="p">' + pro[r(pro)] +'</span>' + '<span class="a">' + adj[r(adj)] + '</span>' + '<span class="n">' + noun[r(noun)] + '</span>' + '<span class="d">' + dom[r(dom)] + '</span>')
    }
    

let urlstring = document.querySelector("#url");
let btn = document.querySelector("#btn");

btn.addEventListener("click", e => {
    urlstring.innerHTML = url()
})