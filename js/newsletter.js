(function () {

  const subscriptionApp = "https://script.google.com/macros/s/AKfycbzGYt8fjlC6NojmpuUn_2Ljh8xQuaTGCSTrr-TaUDVfF7h-Fmpm79Ms534iBtnUUbZNWg/exec"
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
      submitInput.disabled = true;
      const email = emailInput.value;
      messageDiv.innerText = "Subscribing ...";
      try {
        const response = await fetch(
          subscriptionApp + "?email=" + email,
          {
            redirect: "follow",
            mode: "cors",
            headers: {
              "Content-Type": "text/plain;charset=utf-8",
            }
          }
        );
        if (response.ok) {
          messageDiv.innerText = "Confirm your subscription by clicking the link sent to your email.";
        } else {
          messageDiv.innerText = "Subscription error, try again or contact system administrator.";
        }
      } catch (error) {
        messageDiv.innerText = "Newsletter cannot be subscribed: " + error;
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
