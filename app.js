let count = 0;

const value = document.querySelector("#value");

const btns = document.querySelectorAll(".btn");

btns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    const currentVal = e.currentTarget.classList;
    if (currentVal.contains("decrease")) {
      count--;
    } else if (currentVal.contains("reset")) {
      count = 0;
    } else {
      count++;
    }
    value.textContent = count;
  });
});
