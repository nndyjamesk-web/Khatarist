
document.addEventListener("DOMContentLoaded", function () {

  const languageButtons = document.querySelectorAll(".lang-btn");

  function changeLanguage(lang) {

    // Translate all website text
    document.querySelectorAll("[data-en][data-ja]").forEach(element => {
      element.textContent = element.getAttribute("data-" + lang);
    });

    // Update HTML language
    document.documentElement.lang = lang;

    // Update active language button
    languageButtons.forEach(button => {
      button.classList.toggle(
        "active",
        button.dataset.lang === lang
      );
    });

    // Save language preference
    localStorage.setItem("websiteLanguage", lang);
  }

  // Language button events
  languageButtons.forEach(button => {
    button.addEventListener("click", function () {
      changeLanguage(this.dataset.lang);
    });
  });

  // Load saved language
  const savedLanguage = localStorage.getItem("websiteLanguage") || "en";

  changeLanguage(savedLanguage);

});
