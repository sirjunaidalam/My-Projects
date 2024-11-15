
var TotalAmount = 0;
var productName = [], productPrice = [], NoOfSpecificProducts = [],   productTotalPrice = [];

var NoOfProducts = prompt("How many Products that you want to Enter");
for (var i = 0; i < NoOfProducts; i++) {
  productName[i] = prompt("Enter Product " + (i+1) + " Name");
  productPrice[i] = parseInt(prompt("Enter Product " + (i+1) + " Price"));
  NoOfSpecificProducts[i] = parseInt(prompt("How many " + productName[i] + "s/es do you want to purchase"));
  productTotalPrice[i] = productPrice[i] * NoOfSpecificProducts[i] ;
  TotalAmount += productTotalPrice[i];
}
document.write("<h1>Supermart Bill</h1>");
document.write("<table border='1' width='50%' style='text-align:center'>");
document.write("<tr>");
document.write("<th>Product Name</th>");
document.write("<th>Product Price</th>");
document.write("<th>Product Quantity</th>");
document.write("<th>Product Total Amount </th>");
document.write("</tr>");
for (var i = 0; i < NoOfProducts; i++) {
  document.write("<tr>");
  document.write("<td>" + productName[i] + "</td>");
  document.write("<td>" + productPrice[i] + "</td>");
  document.write("<td>" + NoOfSpecificProducts[i] + "</td>");
  document.write("<td>" + productTotalPrice[i] + "</td>");
  document.write("</tr>");
}
document.write("<tr>");
document.write("<td colspan='3'><b>Total Amount</b></td>");
document.write("<td>" + TotalAmount + "</td>");
document.write("</tr>");
document.write("</table>");