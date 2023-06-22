function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -7.240904729774284, lng: 109.21439114680116 },
    zoom: 15,
  });
}

window.initMap = initMap;
