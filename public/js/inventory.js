const itemNamesSet = new Set();

document.getElementById("todoForm").addEventListener("submit", function (e) {
  e.preventDefault();
  const itemName = document.getElementById("itemName").value;
  const quantity = document.getElementById("quantity").value;

  if (itemName === "" || quantity === "") {
    alert("Silahkan di isi terlebih dahulu.");
    return;
  }

  if (itemNamesSet.has(itemName)) {
    alert("item dengan nama yang sama sudah ada.");
    return;
  }

  const item = {
    name: itemName,
    quantity: quantity,
  };

  addItemToList(item);
  itemNamesSet.add(itemName); //  menambahkan nama item
  document.getElementById("todoForm").reset();
});

document.getElementById("itemList").addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    const listItem = e.target.parentElement.parentElement;
    const itemName = listItem.querySelector(".item-name").textContent;
    const confirmation = confirm(
      `apakah anda yakin akan menghapus item tersebut? ${itemName}?`
    );

    if (confirmation) {
      listItem.remove();
      itemNamesSet.delete(itemName); //  menghapus nama item
    }
  } else if (e.target.classList.contains("decrease")) {
    const listItem = e.target.parentElement.parentElement;
    const quantityElement = listItem.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);

    if (quantity > 0) {
      quantity--;
      quantityElement.textContent = quantity;
    }
  } else if (e.target.classList.contains("increase")) {
    const listItem = e.target.parentElement.parentElement;
    const quantityElement = listItem.querySelector(".quantity");
    let quantity = parseInt(quantityElement.textContent);

    quantity++;
    quantityElement.textContent = quantity;
  }
});

function addItemToList(item) {
  const listItem = document.createElement("li");
  listItem.classList.add(
    "list-group-item",
    "d-flex",
    "justify-content-between",
    "align-items-center"
  );
  listItem.innerHTML = `
    <span class="item-name">${item.name}</span>
    <span class="badge bg-secondary quantity">${item.quantity}</span>
    <div>
      <button class="btn btn-sm btn-primary decrease">-</button>
      <button class="btn btn-sm btn-primary increase">+</button>
      <button class="btn btn-sm btn-danger delete">Delete</button>
    </div>
  `;

  document.getElementById("itemList").appendChild(listItem);
}
