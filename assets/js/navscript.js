document.addEventListener("DOMContentLoaded", function () {
  const sideNavToggle = document.getElementById("toggle-left");

  sideNavToggle.addEventListener("click", function () {
    if (document.getElementById("side-nav").classList.contains("hidden")) {
      sideNavToggle.innerHTML = "&lsaquo;";
      document.querySelectorAll(".left-side")[0].style.width = "120px";
      setTimeout(function () {
        document.getElementById("side-nav").style.display = "flex";
      }, 200);
      document.getElementById("side-nav").classList.remove("hidden");
    } else {
      sideNavToggle.innerHTML = "&rsaquo;";
      document.getElementById("side-nav").style.display = "none";
      document.querySelectorAll(".left-side")[0].style.width = "28px";
      document.getElementById("side-nav").classList.add("hidden");
    }
  });
});
