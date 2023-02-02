let answers = document.getElementsByClassName("faq-answer");
for (const answer of answers) {
  console.log("Sheeh");
  let id = answer.getAttribute("data-for");
  console.log(id);
  let question = document.getElementById(id);
  question.onclick = () => {
    answer.classList.toggle("active");
  };
}
