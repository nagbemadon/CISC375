function runQuerySelectors() {
    const tagInput = prompt("Enter a tag name (e.g., div, p, h1):");
    const classInput = prompt("Enter a class name (without .):");
    const idInput = prompt("Enter an id (without #):");

    if (tagInput) {
        console.log(document.querySelectorAll(tagInput));
    }

    if (classInput) {
        console.log(document.querySelectorAll("." + classInput));
    }

    if (idInput) {
        console.log(document.querySelector("#" + idInput));
    }
}