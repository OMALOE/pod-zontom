let navbar = document.getElementById("navbar");

function handleBackground() {
  if (window.scrollY >= 80) {
    navbar.classList.add("active");
  } else {
    navbar.classList.remove("active");
  }
}

window.addEventListener("scroll", handleBackground);

let answers = document.getElementsByClassName("faq-answer");
for (const answer of answers) {
  console.log("Sheeh");
  let id = answer.getAttribute("data-for");
  console.log(id);
  let question = document.getElementById(id);
  question.onclick = () => {
    answer.classList.toggle("active");
    question
      .getElementsByClassName("faq-chevron")[0]
      .classList.toggle("active");
  };
}
