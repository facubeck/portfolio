const projectTitles = document.querySelectorAll(".subtitle");

projectTitles.forEach((title) => {
  title.addEventListener("mouseover", (event) => {
    event.target.style.color = "#2878c2";
  });
  title.addEventListener("mouseout", (event) => {
    event.target.style.color = "black";
  });
});

let link = document.getElementById("mail");
let copyBubble = document.querySelector(".copy-bubble");

link.addEventListener("click", () => {
  navigator.clipboard.writeText(link.textContent);
  copyBubble.textContent = "Copied!";
});

link.addEventListener("mouseover", (event) => {
  copyBubble.style.opacity = "1";
  event.target.style.color = "black";
});
link.addEventListener("mouseout", (event) => {
  copyBubble.style.opacity = "0";
  event.target.style.color = "rgba(0, 0, 0, 0.7)";
  setTimeout(() => {
    copyBubble.textContent = "Copy to clipboard!";
  }, 500);
});

// Change link color when hover
const links = document.querySelectorAll(".link");
links.forEach((link) => {
  link.addEventListener("mouseover", (e) => {
    e.target.style.color = "black";
  });
  link.addEventListener("mouseout", (e) => {
    e.target.style.color = "rgba(0, 0, 0, 0.7)";
  });
});

// Make triangles rotate
const triangles = document.querySelectorAll("#triangle");
triangles.forEach((div) => {
    let element = div;
    element.addEventListener('mouseenter', e => {
        console.log(e);
        for(const child of e.target.children) {{
            child.style.transform = 'rotate(180deg)'
        }}
    })
    element.addEventListener('mouseleave', e => {
        console.log(e);
        for(const child of e.target.children) {{
            child.style.transform = 'rotate(360deg)'
        }}
    })
})