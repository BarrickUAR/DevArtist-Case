const counters = document.querySelectorAll(".counter");

counters.forEach((counter) => {
  let target = +counter.getAttribute("data-target");
  let count = 0;
  let increment = target / 200;

  let updateCount = () => {
    count += increment;
    if (count < target) {
      counter.innerText = Math.floor(count) + "+";
      setTimeout(updateCount, 1);
    } else {
      counter.innerText = target + "+";
    }
  };

  updateCount();
});
