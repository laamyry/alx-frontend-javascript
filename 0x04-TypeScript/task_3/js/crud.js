function insertRow(row) {
  console.log("Inserting row", row);
  return Math.floor(Math.random() * 1000);
}

function deleteRow(rowId) {
  console.log("Deleting row with id", rowId);
  return;
}

function updateRow(rowId, row) {
  console.log(`Updating row with id ${rowId}`, row);
  return rowId;
}
