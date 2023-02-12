let btn = document.getElementById("button-first");
let btnOne = document.getElementById("button-second");

btn.addEventListener("click", () => {
  let url = "www.google.com";
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  window.location.href = url;
});

btnOne.addEventListener("click", () => {
  let url = "http://www.google.com";
  if (!/^https?:\/\//i.test(url)) {
    url = "https://" + url;
  }
  window.location.href = url;
});
