"use strict";

(async function () {
  // auto expand/close dropdowns on hover
  const dropdowns = document.querySelectorAll("li.dropdown-hover");
  // console.log("attaching to: ", dropdowns);
  for (const dropdown of dropdowns) {
    dropdown.addEventListener("mouseenter", () => {
      const detailsElements = dropdown.getElementsByTagName("details");
      if (!detailsElements[0] || window.innerWidth < 768) {
        return;
      }
      detailsElements[0].setAttribute("open", "");
      // console.log("opened");
    });

    dropdown.addEventListener("mouseleave", () => {
      const detailsElements = dropdown.getElementsByTagName("details");
      if (!detailsElements[0] || window.innerWidth < 768) {
        return;
      }
      detailsElements[0].removeAttribute("open");
      // console.log("closed");
    });
  }
})();
