const yearEl = document.getElementById("year");
const form = document.getElementById("subscribe-form");
const message = document.getElementById("subscribe-message");

if (yearEl) {
  yearEl.textContent = new Date().getFullYear();
}

if (form && message) {
  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const formData = new FormData(form);
    const email = String(formData.get("email") || "").trim();

    if (!email || !email.includes("@")) {
      message.textContent = "Please enter a valid email address.";
      return;
    }

    const stored = JSON.parse(localStorage.getItem("fbd_subscribers") || "[]");
    if (!stored.includes(email)) {
      stored.push(email);
      localStorage.setItem("fbd_subscribers", JSON.stringify(stored));
    }

    message.textContent =
      "Thanks for subscribing! We will be in touch with the next update.";
    form.reset();
  });
}
