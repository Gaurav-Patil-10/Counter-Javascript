let count = document.getElementById("count"),
  increase = document.getElementById("increase_button"),
  decrease = document.getElementById("decrease_button"),
  reset = document.getElementById("reset");

var count_value = 0;

function Change(value) {
  if (value > 0) {
    count.style.color = "green";
  } else if (value < 0) {
    count.style.color = "red";
  } else {
    count.style.color = "black";
  }

  count.textContent = value;
}

reset.addEventListener("click", function () {
  count_value = 0;
  Change(count_value);
});

increase.addEventListener("click", function () {
  count_value += 1;
  Change(count_value);
});

decrease.addEventListener("click", function () {
  count_value -= 1;
  Change(count_value);
});
