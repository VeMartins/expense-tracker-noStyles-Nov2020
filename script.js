function addExpenses() {
  let tabl = document.getElementById("tabl");
  let row = tabl.insertRow(-1);

  let cell = row.insertCell(0);
  let inpName = document.getElementById("inpName");
  let nameValue = document.createTextNode(inpName.value);
  cell.appendChild(nameValue);
  inpName.value = "";

  let cell1 = row.insertCell(1);
  let inpDate = document.getElementById("inpDate");
  let dateValue = document.createTextNode(inpDate.value);
  cell1.appendChild(dateValue);
  inpDate.value = "";

  let cell3 = row.insertCell(2);
  let inpAmount = document.getElementById("inpAmount");
  let amountValue = document.createTextNode(inpAmount.value);
  cell3.appendChild(amountValue);
  inpAmount.value = "";

  let delbtn = document.createElement("button");
  let txt = document.createTextNode("Remove");
  delbtn.appendChild(txt);
  delbtn.setAttribute("class", "remvBtn");
  row.appendChild(delbtn);

  delbtn.onclick = remRow;
}

function remRow() {
  this.parentNode.remove();
}
