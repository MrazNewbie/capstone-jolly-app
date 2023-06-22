// Mengaktifkan search bar

function handleSearch(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchInput = document.getElementById("searchInput");
    const keyword = searchInput.value.toLowerCase();

    if (keyword.trim() === "") {
      window.location.href = "/public/views/mountains.html";
    } else {
      performSearch(keyword);
    }
  }
}

function performSearch(keyword) {
  const mountainTable = document.getElementById("mountainTable");
  const mountainRows = mountainTable.getElementsByTagName("tr");

  for (let i = 0; i < mountainRows.length; i++) {
    const mountainName = mountainRows[i]
      .getElementsByTagName("td")[0]
      .textContent.toLowerCase();

    if (mountainName.includes(keyword)) {
      mountainRows[i].style.display = "table-row";
    } else {
      mountainRows[i].style.display = "none";
    }
  }
}
