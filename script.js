const getInTouchBtn = document.getElementById("getInTouch");

const getStartedNowBtns = document.querySelectorAll(".getStartedNow");

getInTouchBtn.addEventListener("click", () =>
  window.open("https://github.com/Serge044", "_blank")
);

getStartedNowBtns.forEach((btn) => {
  btn.addEventListener("click", () => console.log("Let's Get Started!"));
});
