function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -8.057123420821307, lng: 114.24344311701144 },
    zoom: 15,
  });
}

window.initMap = initMap;
