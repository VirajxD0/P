document.getElementById("copyemail").addEventListener("click", function () {
  // Get the email from the data attribute
  const email = this.getAttribute("data-clipboard-text");

  // Copy the email to the clipboard
  navigator.clipboard.writeText(email).then(
    function () {
      // Replace the email text with "Email copied"
      document.getElementById("copyemail").innerText = "Email copied!";
    },
    function (err) {
      console.error("Failed to copy text: ", err);
    }
  );
});
