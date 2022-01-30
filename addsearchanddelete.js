var Products = [];
function addElement() {
  let items = document.getElementById("product_name").value;
  Products.push(items);
  document.getElementById("display_text").innerHTML = Products;
}
function searchAndDeleteElement() {
  let items = document.getElementById("product_name").value;
  let index = Products.indexOf(items);
  if (index !== -1) {
    Products.splice(index, 1);
    document.getElementById("display_text").innerHTML = Products;
  } else {
    alert("Product not found");
  }
}
document.getElementById("display_text").innerHTML = Products;
