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
  });
});

tabs[0].click();
