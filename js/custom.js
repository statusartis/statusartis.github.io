"use strict";

(async function () {
  // auto expand/close dropdowns on hover
  const dropdowns = document.querySelectorAll("li.dropdown-hover");
  // console.log("attaching to: ", dropdowns);
  for (const dropdown of dropdowns) {
    dropdown.addEventListener("mouseenter", () => {
      const detailsElements = dropdown.getElementsByTagName("details");
      if (!detailsElements[0] || window.innerWidth < 992) {
        return;
      }
      detailsElements[0].setAttribute("open", "");
      // console.log("opened");
    });

    dropdown.addEventListener("mouseleave", () => {
      const detailsElements = dropdown.getElementsByTagName("details");
      if (!detailsElements[0] || window.innerWidth < 992) {
        return;
      }
      detailsElements[0].removeAttribute("open");
      // console.log("closed");
    });
  }
})();

(async function () {
  // init gallery/ies
  const galleries = document.querySelectorAll(".my-gallery");
  for (const gallery of galleries) {
    window.lightGallery(gallery, {
      // plugins: [..., lgThumbnail, ...] will add thumbnails
      // but the current implementation downloads fallback images as thumbs, worsens lighthouse scores
      plugins: [lgFullscreen, lgZoom],
      getCaptionFromTitleOrAlt: false, // do not show alt text as captions when viewing picture in gallery
      download: false, // disable download button
      // speed: 200,
    });
  }
})();
