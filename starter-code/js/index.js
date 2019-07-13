function deleteItem(e) {

}

function getPriceByProduct(itemNode) {

}

function updatePriceByProduct(productPrice, index) {

}

function getTotalPrice() {

}

function createQuantityNode() {

}

function createItemNode(dataType, itemData) {

}

function createNewItemRow(itemName, itemUnitPrice) {
  return `
  <div class="row">
    <div>
      ${itemName}
    <div>
    <div>
      ${itemUnitPrice}
    </div>
    <div>
      <label>QTY</label>
      <input type "number">
    </div>
    <div>
      PLACEHOLDER
    </div>
    <div>
      <button class="btn btn-delete">Delete</button>
    </div>
  </div>
  `;
}

function createNewItem() {

}

function renderForm() {
  return `<h1>Ironhack Merchandising Shopping</h1>
  <div class="row">
    <div>
      <label>Product Name</label>
      <input type="text" id="name-input">
    </div>
    <div>
      <label>Product Price</label>
      <input type="number" id="price-input">
    </div>
    <div>
      <button class="btn btn-success">Create Product</button>
    </div>
  </div>
  `;
}


// eslint-disable-next-line func-names
window.onload = function () {
  const body = document.querySelector('body');
  const html = renderForm();
  body.innerHTML = html;
  const createProductButton = document.getElementsByClassName('btn-success');
  const productList = [];
  createProductButton[0].onclick = () => {
    productList.push()
    createNewItemRow(document.getElementById('name-input').value, document.getElementById('price-input').value);
  };
};
