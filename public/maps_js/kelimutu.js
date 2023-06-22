function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -8.768152762844842, lng: 121.8221513298446 },
    zoom: 15,
  });
}

window.initMap = initMap;
