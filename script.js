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

var map = new maplibregl.Map({
	container: "map",
	style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // stylesheet location
	center: [-74.5, 40], // starting position [lng, lat]
	zoom: 3, // starting zoom
	attributionControl: false, // disables the attribution
});

// Add zoom and rotation controls to the map
map.addControl(new maplibregl.NavigationControl(), "top-right");

// Add geolocation control to the map
map.addControl(
	new maplibregl.GeolocateControl({
		positionOptions: {
			enableHighAccuracy: true,
		},
		trackUserLocation: true, // auto-follow user's location
		showUserHeading: true, // show device direction arrow if available
	}),
	"top-right"
);

// Optional: center map on user location once loaded
map.on("load", () => {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(
			function (position) {
				const userLng = position.coords.longitude;
				const userLat = position.coords.latitude;
				map.setCenter([userLng, userLat]);
				map.setZoom(12);
			},
			function (error) {
				console.warn("Geolocation failed or denied:", error.message);
			}
		);
	}
});

// map.on("style.load", () => {
// 	// Set projection to globe
// 	map.setProjection({
// 		type: "globe",
// 	});
// });
