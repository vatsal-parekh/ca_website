document.querySelectorAll(".navbar_btn").forEach((button) => {
  button.addEventListener("click", function () {
    const targetSection = document.getElementById(this.dataset.target);
    if (targetSection) {
      const yOffset = -60;
      const y =
        targetSection.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  });
});

// CLEAR BUTTON FOR CONTACT US SECTION
document.getElementById("nameclear").addEventListener("click", function () {
  document.getElementById("nametext").value = "";
});
document.getElementById("emailclear").addEventListener("click", function () {
  document.getElementById("emailtext").value = "";
});
document.getElementById("phoneclear").addEventListener("click", function () {
  document.getElementById("phonetext").value = "";
});
document.getElementById("messageclear").addEventListener("click", function () {
  document.getElementById("messagetext").value = "";
});

document.querySelectorAll(".relative").forEach((container) => {
  const input = container.querySelector(".text_input");
  const clearButton = container.querySelector(".clear_btn");

  if (!clearButton) return; // Ensures script doesn't break if no button is found

  // Show button when input has text
  input.addEventListener("input", function () {
    clearButton.classList.toggle("hidden", this.value.length === 0);
  });

  // Clear input when clicking button
  clearButton.addEventListener("click", function () {
    input.value = "";
    clearButton.classList.add("hidden"); // Hide button after clearing
    input.focus(); // Keep focus on input
  });
});
