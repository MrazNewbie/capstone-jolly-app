function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -8.10699465145401, lng: 112.92232159679584 },
    zoom: 15,
  });
}

window.initMap = initMap;
