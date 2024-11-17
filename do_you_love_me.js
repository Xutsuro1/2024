const questionContainer = document.querySelector(".question-container");
const resultContainer = document.querySelector(".result-container.yes");
const gifResult = document.querySelector(".gif-result");
const heartLoader = document.querySelector(".cssload-main");
const yesBtn = document.querySelector(".js-yes-btn");
const noBtn = document.querySelector(".js-no-btn");

// Change the position of the no button
noBtn.addEventListener("mouseover", () => {
  const newX = Math.random() * (questionContainer.offsetWidth - noBtn.offsetWidth);
  const newY = Math.random() * (questionContainer.offsetHeight - noBtn.offsetHeight);

  noBtn.style.left = `${newX}px`;
  noBtn.style.top = `${newY}px`;
});

// Yes button functionality
yesBtn.addEventListener("click", () => {
  questionContainer.style.display = "none";
  heartLoader.style.display = "inherit";

  setTimeout(() => {
    // Navigate to the new page
    window.location.href = "happy birtday.html";
  }, 3000); // 3-second delay to simulate the loading animation
});
