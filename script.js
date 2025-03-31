const tabs = document.querySelectorAll("button[data-tab]");
const tabContents = document.querySelectorAll('section[id^="tab-"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");

    // Show the selected tab content and hide others
    tabContents.forEach((content) => {
      content.classList.toggle("hidden", content.id !== `${tabId}-content`);
    });

    // Update active tab styling
    tabs.forEach((t) => t.classList.remove("active"));
    tab.classList.add("active");

    // Show or hide the custom tab-2-item
    document
      .getElementById("tab-2-item")
      .classList.toggle("hidden", tabId !== "tab-2");
  });
});

// Set default active tab
tabs[0].click();
