const quoteTarget = document.getElementById("parol");
const authorTrigger = document.getElementById("myName");
const quoteText =
  'Quelquefois, on a besoin de dire des choses difficiles, mais on devrait tâcher de les dire aussi simplement que possible. "Hardy"';

if (quoteTarget && authorTrigger) {
  let timerId = null;

  authorTrigger.addEventListener("click", () => {
    if (timerId) {
      window.clearInterval(timerId);
    }

    let index = 0;
    quoteTarget.textContent = "";

    timerId = window.setInterval(() => {
      quoteTarget.textContent += quoteText[index];
      index += 1;

      if (index >= quoteText.length) {
        window.clearInterval(timerId);
        timerId = null;
      }
    }, 28);
  });
}
