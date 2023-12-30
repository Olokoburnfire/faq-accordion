const containers = document.querySelectorAll(".sub_container")
const container_one = document.querySelector(".one")
const container_two = document.querySelector(".two")
const container_three = document.querySelector(".three")
const container_four = document.querySelector(".four")

// const plus = document.querySelectorAll(".open")
// const minus = document.querySelectorAll(".minus")



containers.forEach((container) => {
  var question = container.firstElementChild
  const plus = question.lastElementChild.firstElementChild
  const minus = question.lastElementChild.lastElementChild
  var answer = container.lastElementChild
  question.addEventListener("click", ()=>{
    if (container.classList.contains("opened")) {
      container.style.height = "60px"
      container.classList.remove("opened")
      answer.classList.remove("ans_open")
      minus.style.display = "none"
      plus.style.display = "block"
    } else {
      container.style.height = "100%"
      container.classList.add("opened")
      answer.classList.add("ans_open")
      plus.style.display = "none"
      minus.style.display = "block"
    }
  })
});
