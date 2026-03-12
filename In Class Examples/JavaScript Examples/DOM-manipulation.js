function changingContent(){
    const elements = document.querySelectorAll(".info");

    /*
    for(let i = 0; i < elements.length; i++){
        elements[i].textContent = " This is a new note.";
        elements[i].classList.add("greenish");
    }
    */

    elements.forEach((element, index) => {
        element.textContent = `Testing the forEach method ${index + 1}`;
        element.classList.add("blueish");
    })

}