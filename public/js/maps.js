function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -7.941877085290779, lng: 112.95302123000985 },
    zoom: 15,
  });
}

window.initMap = initMap;
