(function () {

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;  // Simple email validation regex

  function validateEmail(email) {
    return emailPattern.test(email);
  }

  function addNewsletterSupport() {
    const emailInput = document.getElementById("email");
    const submitInput = document.getElementById("submit");
    const messageDiv = document.getElementById("message");

    emailInput.oninput = () => {
      submitInput.disabled = !validateEmail(emailInput.value);
    };

    const handleSubmit = async () => {
      submitInput.disabled = true
      // TODO in the future it should be some form of spinner
      messageDiv.innerText = "Subscribing ...";
      try {
        let response = await fetch("https://example.com/api/newsletter", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email: emailInput.value,
          }),
        });
        if (response.ok) {
          messageDiv.innerText = "Check out your confirmation email";
        } else {
          messageDiv.innerText = "Newsletter cannot be subscribed";
        }
      } catch (error) {
        messageDiv.innerText = "Newsletter cannot be subscribed";
      }
      submitInput.disabled = false;
    };

    submitInput.onclick = e => {
      submitInput.disabled = true;
      e.preventDefault();
      handleSubmit();
    };

    emailInput.onkeydown = e => {
      if (e.key === "Enter") {
        e.preventDefault();
        handleSubmit();
      }
    };
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", addNewsletterSupport);
  } else {
    addNewsletterSupport();
  }

})();
