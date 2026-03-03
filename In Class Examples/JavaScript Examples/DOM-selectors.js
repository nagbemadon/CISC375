function runSelectors() {
  // Ask user for input
  const tagInput = prompt("Enter a tag name (e.g., div, p, h1):");
  const classInput = prompt("Enter a class name (without .):");
  const idInput = prompt("Enter an id (without #):");
  // --- Search by tag ---
  console.log(document.getElementsByTagName(tagInput));

  // --- Search by class ---
  console.log(document.getElementsByClassName(classInput));

  // --- Search by id ---
  console.log(document.getElementById(idInput));
}