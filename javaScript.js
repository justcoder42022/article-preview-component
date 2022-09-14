const sharebtn = document.querySelector(".sharebtn");

sharebtn.addEventListener("click", () => {
  if (sharebtn.parentElement.classList.contains("clicked"))
    sharebtn.parentElement.classList.remove("clicked");
  else 
    sharebtn.parentElement.classList.add("clicked");
});
