function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -8.410403386732309, lng: 116.45893659566148 },
    zoom: 15,
  });
}

window.initMap = initMap;
