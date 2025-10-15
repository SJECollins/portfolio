window.onload = function () {
  const form = document.getElementById("contact-form");
  const messageDisplay = document.getElementById("show-message");
  const formDisplay = document.getElementById("show-form");

  form.addEventListener("submit", function (event) {
    // Make sure form is valid (issue with some browsers not validating on submit)
    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    event.preventDefault();

    const sendButton = document.getElementById("send-btn");
    sendButton.value = "Sending...";
    sendButton.disabled = true;

    emailjs.sendForm("portfolio_service", "portfolio_template", form).then(
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
