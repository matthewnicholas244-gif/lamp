(() => {
  "use strict";

  const room = document.getElementById("room");
  const lampToggle = document.getElementById("lampToggle");
  const toggleLabel = document.getElementById("toggleLabel");
  const fireflies = document.getElementById("fireflies");
  const loginForm = document.getElementById("loginForm");
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password");
  const passwordToggle = document.getElementById("passwordToggle");
  const formMessage = document.getElementById("formMessage");
  const forgotButton = document.getElementById("forgotButton");
  const signupLink = document.getElementById("signupLink");
  const toast = document.getElementById("toast");

  // Create a small, decorative set of fireflies without external assets.
  for (let i = 0; i < 18; i += 1) {
    const dot = document.createElement("span");
    dot.className = "firefly";
    dot.style.left = `${8 + Math.random() * 84}%`;
    dot.style.top = `${12 + Math.random() * 72}%`;
    dot.style.setProperty("--delay", `${Math.random() * -7}s`);
    dot.style.animationDuration = `${5 + Math.random() * 6}s`;
    fireflies.appendChild(dot);
  }

  function setLamp(isOn) {
    room.classList.toggle("lamp-on", isOn);
    lampToggle.setAttribute("aria-pressed", String(isOn));
    toggleLabel.textContent = isOn ? "Turn off the lamp" : "Turn on the lamp";
  }

  lampToggle.addEventListener("click", () => {
    setLamp(!room.classList.contains("lamp-on"));
  });

  passwordToggle.addEventListener("click", () => {
    const isVisible = passwordInput.type === "text";
    passwordInput.type = isVisible ? "password" : "text";
    passwordToggle.textContent = isVisible ? "Show" : "Hide";
    passwordToggle.setAttribute("aria-label", isVisible ? "Show password" : "Hide password");
    passwordToggle.setAttribute("aria-pressed", String(!isVisible));
    passwordInput.focus();
  });

  function showMessage(message, isError = false) {
    formMessage.textContent = message;
    formMessage.classList.toggle("error", isError);
  }

  loginForm.addEventListener("submit", (event) => {
    event.preventDefault();
    showMessage("");

    if (!emailInput.validity.valid || !emailInput.value.trim()) {
      showMessage("Please enter a valid email address.", true);
      emailInput.focus();
      return;
    }
    if (passwordInput.value.length < 6) {
      showMessage("Your password must be at least 6 characters.", true);
      passwordInput.focus();
      return;
    }

    // This is a front-end demo only. No credentials are sent or stored.
    showMessage("Looks good! Connect a real authentication service to sign in.");
  });

  function showToast(message) {
    toast.textContent = message;
    toast.classList.add("show");
    window.clearTimeout(showToast.timeoutId);
    showToast.timeoutId = window.setTimeout(() => toast.classList.remove("show"), 3200);
  }

  forgotButton.addEventListener("click", () => {
    const email = emailInput.value.trim();
    showToast(email ? `Password reset would be sent to ${email} once authentication is connected.` : "Enter your email address first, then choose “Forgot password?”.");
    if (!email) emailInput.focus();
  });

  signupLink.addEventListener("click", (event) => {
    event.preventDefault();
    showToast("Account creation is a demo placeholder. Connect an authentication service to enable it.");
  });

  document.getElementById("year").textContent = String(new Date().getFullYear());

  // Start with the lamp on so the animation is immediately visible.
  setLamp(true);
})();
