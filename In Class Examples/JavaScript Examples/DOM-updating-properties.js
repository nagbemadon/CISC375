
        // Select the button to trigger the changes
        const btn = document.querySelector('#action-btn');

        btn.addEventListener('click', () => {
            
            // --- SCENARIO 1: Modifying a Single Element (querySelector) ---
            const title = document.querySelector('#main-title');
            
            // 1. Modify Text
            title.textContent = "DOM Updated via JavaScript!";
            
            // 2. Modify Inline Style (CamelCase is required for JS)
            title.style.color = "#2c3e50";
            title.style.textDecoration = "underline";
            title.style.backgroundColor = "yellow";

            // --- SCENARIO 2: Modifying Multiple Elements (querySelectorAll) ---
            // Returns a NodeList (which behaves like an array)
            const allCards = document.querySelectorAll('.card');

            // Use .forEach() to loop through every found element
            allCards.forEach((card, index) => {
                
                // 1. Modify Text (using the index) 
                // Use backticks ` for variable interpolation and multiple strings.
                card.textContent = `Updated Card #${index + 1}`;
                
                // 2. Modify Classes (The professional way to style)
                // .add(), .remove(), or .toggle()
                card.classList.add('highlight-active');
                
                // 3. Conditional logic inside the loop
                if (index % 2 === 0) {
                    card.style.fontWeight = "bold"; // Bold only even items
                }
            });
        });