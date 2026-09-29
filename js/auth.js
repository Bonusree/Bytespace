// ByteSpace login & signup pages
// One validator for both forms. Rules come from the HTML attributes:
// required, type="email", minlength, and data-match="<id of field to match>".

// ---------- Show / hide password ----------
document.querySelectorAll(".field__toggle").forEach((button) => {
  const input = document.getElementById(button.getAttribute("aria-controls"));

  button.addEventListener("click", () => {
    const show = input.type === "password";
    input.type = show ? "text" : "password";
    button.textContent = show ? "Hide" : "Show";
    button.setAttribute("aria-label", show ? "Hide password" : "Show password");
  });
});

// ---------- Validation ----------
const EMAIL_PATTERN = /^\S+@\S+\.\S+$/;

function validate(input) {
  const value = input.type === "checkbox" ? input.checked : input.value.trim();
  const label = input.closest(".field")?.querySelector("label")?.textContent.trim() || "This field";

  if (input.type === "checkbox") {
    return input.required && !value ? "Please accept the terms to continue." : "";
  }
  if (input.required && !value) return `${label} is required.`;
  if (input.type === "email" && !EMAIL_PATTERN.test(value)) return "Please enter a valid email address.";
  if (input.minLength > 0 && value.length < input.minLength) {
    return `${label} must be at least ${input.minLength} characters.`;
  }
  if (input.dataset.match) {
    const other = document.getElementById(input.dataset.match);
    if (value !== other.value.trim()) return "Passwords do not match.";
  }
  return "";
}

function showError(input, message) {
  const field = input.closest(".field");
  field.classList.toggle("is-invalid", Boolean(message));
  input.setAttribute("aria-invalid", String(Boolean(message)));
  document.getElementById(`${input.id}-error`).textContent = message;
}

document.querySelectorAll(".form").forEach((form) => {
  const inputs = form.querySelectorAll("input[id]");
  const status = form.querySelector(".form__status");

  // Re-check a field as soon as the user fixes it
  inputs.forEach((input) => {
    const event = input.type === "checkbox" ? "change" : "input";
    input.addEventListener(event, () => {
      if (input.getAttribute("aria-invalid") === "true") showError(input, validate(input));
    });
  });

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let firstInvalid = null;

    inputs.forEach((input) => {
      const message = validate(input);
      showError(input, message);
      if (message && !firstInvalid) firstInvalid = input;
    });

    if (firstInvalid) {
      status.textContent = "";
      firstInvalid.focus();
      return;
    }

    status.textContent = form.dataset.success;
    form.reset();
    form.querySelectorAll(".field__toggle").forEach((button) => {
      document.getElementById(button.getAttribute("aria-controls")).type = "password";
      button.textContent = "Show";
    });
  });
});
