const projectTitles = document.querySelectorAll(".subtitle");

projectTitles.forEach((title) => {
  title.addEventListener("mouseover", (event) => {
    event.target.style.color = "#2878c2";
  });
  title.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
  });
});