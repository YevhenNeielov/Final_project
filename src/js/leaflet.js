const center = [50.00446544951402, 36.22798509277158];

const map = L.map("map").setView(center, 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  maxZoom: 19,
  attribution:
    '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
}).addTo(map);

let redMarker = L.ExtraMarkers.icon({
  icon: "fa-paw",
  markerColor: "red",
  shape: "square",
  prefix: "fa",
});

L.marker(center, { icon: redMarker })
  .addTo(map)
  .bindPopup("<b>Hello!</b><br>I am a cat's house.");
