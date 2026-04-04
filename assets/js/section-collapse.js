document.addEventListener("DOMContentLoaded", function () {
  var sections = document.querySelectorAll("main > section.collapsible-section");
  var expandedByDefaultIds = new Set(["about-pro", "publications"]);

  sections.forEach(function (section) {
    var heading = section.querySelector(":scope > h2");
    if (!heading) return;

    var contentBlocks = Array.from(section.children).filter(function (el) {
      return el.tagName !== "H2";
    });
    if (!contentBlocks.length) return;

    var previewBlock = contentBlocks[0];
    previewBlock.classList.add("collapse-preview");

    var expandedByDefault = expandedByDefaultIds.has(section.id);
    if (!expandedByDefault) {
      section.classList.add("is-collapsed");
    }

    heading.setAttribute("role", "button");
    heading.setAttribute("tabindex", "0");
    heading.setAttribute("aria-expanded", String(expandedByDefault));

    var setPreviewInteractive = function (collapsed) {
      if (collapsed) {
        previewBlock.setAttribute("role", "button");
        previewBlock.setAttribute("tabindex", "0");
      } else {
        previewBlock.removeAttribute("role");
        previewBlock.removeAttribute("tabindex");
      }
    };
    setPreviewInteractive(!expandedByDefault);

    var toggle = function () {
      var collapsed = section.classList.toggle("is-collapsed");
      heading.setAttribute("aria-expanded", String(!collapsed));
      setPreviewInteractive(collapsed);
    };

    heading.addEventListener("click", toggle);
    heading.addEventListener("keydown", function (event) {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });

    previewBlock.addEventListener("click", function (event) {
      if (!section.classList.contains("is-collapsed")) return;
      event.preventDefault();
      toggle();
    });

    previewBlock.addEventListener("keydown", function (event) {
      if (!section.classList.contains("is-collapsed")) return;
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        toggle();
      }
    });
  });
});
