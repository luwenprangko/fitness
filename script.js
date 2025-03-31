const tabs = document.querySelectorAll("button[data-tab]");
const tabContents = document.querySelectorAll('section[id^="tab-"]');

tabs.forEach((tab) => {
  tab.addEventListener("click", () => {
    const tabId = tab.getAttribute("data-tab");
    tabContents.forEach((content) => {
      if (content.id === `${tabId}-content`) {
        content.classList.remove("hidden");
      } else {
        content.classList.add("hidden");
      }
    });

    // for custom tab-2-item
    if (tabId === "tab-2") {
      document.getElementById("tab-2-item").classList.remove("hidden");
    } else {
      document.getElementById("tab-2-item").classList.add("hidden");
    }
    // end for custom tab-2-item
  });
});

tabs[0].click();
