document.addEventListener("DOMContentLoaded", () => {
  const lastVisited = localStorage.getItem("lastVisited");
  const lastVisitedTime = new Date(lastVisited).getTime();
  const now = new Date().getTime();

  if (lastVisitedTime && now - lastVisitedTime < 24 * 60 * 60 * 1000) {
    document.getElementById("intro-div").style.display = "none";
    document.getElementById("welcome-div").style.display = "flex";
    document.getElementById("welcome-div").style.opacity = 1;
    return;
  }
  localStorage.setItem("lastVisited", new Date().toISOString());

  const fadeIn = () => {
    let welcomeDiv = document.getElementById("welcome-div");
    welcomeDiv.style.display = "flex";
    let opacity = 0;

    const intervalId = setInterval(() => {
      if (opacity < 1) {
        opacity += 0.05;
        welcomeDiv.style.opacity = opacity;
      } else {
        clearInterval(intervalId);
      }
    }, 100);
  };

  const fadeOut = () => {
    let introTextDiv = document.getElementById("intro-div");
    let opacity = 1;

    const intervalId = setInterval(() => {
      if (opacity > 0) {
        opacity -= 0.05;
        introTextDiv.style.opacity = opacity;
      } else {
        clearInterval(intervalId);
        introTextDiv.style.display = "none";
        fadeIn();
      }
    }, 100);
  };

  const printText = () => {
    const introText = `if (visitor) {/    return intro() /  }`;

    let introDiv = document.getElementById("intro");
    let i = 0;

    const intervalId = setInterval(() => {
      if (i < introText.length) {
        if (introText[i] === "/") {
          introDiv.innerHTML += "<br/>";
          i++;
        }
        if (introText[i] === " ") {
          introDiv.innerHTML += "&nbsp;";
          i++;
          return;
        }
        introDiv.innerHTML += introText[i];
        i++;
      } else {
        introDiv.innerHTML += "<br/>";
        clearInterval(intervalId);
        fadeOut();
      }
    }, 140);
  };

  printText();
});
