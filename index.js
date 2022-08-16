window.addEventListener("DOMContentLoaded", (event) => {
  console.log("dom loaded");
  const links = document.querySelectorAll(".link");

  links.forEach(element => {
    console.log(`el: ${element}`);
    element.addEventListener("click", linkClick)
  });

});

const linkClick = (e) => {
  console.log(e.target);
  const links = document.querySelectorAll(".link");
  const content = document.querySelectorAll(".tab-content");

  links.forEach(element => {
    element.classList.remove("active");
  });
  e.target.classList.add("active");

  // set content div
  content.forEach(element => {
    console.log(`content::: ${element}`);
    if (element.classList.contains("visible")){
      element.classList.remove("visible");
    }
    if (!element.classList.contains("invisible")) {
      element.classList.add("invisible");
    }

    const target = e.target.dataset.target;
    console.log(`target = .${target}-content`);
    const targetContent = document.querySelector(`.${target}-content`);

    targetContent.classList.add("visible");
  });

};