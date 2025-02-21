let nums = document.querySelectorAll(".num");
let container = document.getElementById("content");
//counter
let test = false;
window.onload = () => {
  if ((window.onload )) {
    nums.forEach((e) => {
      let start = 0;
      let end = e.dataset.num;

      let count = setInterval(() => {
        start++;
        e.textContent = start;

        if (start == end) {
          clearInterval(count);
        }
      }, 6000 / end);
    });
  }
};
const plus = document.getElementsByClassName("box");

for (let i = 0; i < plus.length; i++) {
  plus[i].addEventListener("click", function () {
    this.classList.toggle("active");
  });
}