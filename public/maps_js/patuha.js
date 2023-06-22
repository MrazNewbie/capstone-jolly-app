function initMap() {
  new google.maps.Map(document.getElementById("map"), {
    mapId: "9e5ac0d24152fb94",
    center: { lat: -7.1606647654270645, lng: 107.39976502950935 },
    zoom: 15,
  });
}

window.initMap = initMap;
