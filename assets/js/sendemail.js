window.onload = function () {
  let messageDisplay = document.getElementById("show-message");
  let formDisplay = document.getElementById("show-form");
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("portfolio_service", "portfolio_template", this).then(
        function () {
          console.log("SUCCESS!");
          window.location.href = "./confirmation";
        },
        function (error) {
          console.log("FAILED...", error);
          messageDisplay.style.display = "block";
          messageDisplay.insertAdjacentHTML(
            "afterbegin",
            "<p>Sorry, there was a problem sending your message.</p><p>Please try again later.</p>"
          );
          formDisplay.style.display = "none";
        }
      );
    });
};
