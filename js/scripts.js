// Import senators data
import { senators } from '../data/senators.js';

// Tag HTML elements
const myParent = document.querySelector('#peopleHere');

// Check if parent element exists
if (!myParent) {
    console.error("Parent element not found");
} else {
    // Loop through all the senators
    function displaySenators(senators) {
        // Clear previous content
        myParent.innerHTML = "";

        senators.forEach(senator => {
            // Create figure element
            const myFigure = document.createElement('figure');

            // Create image element
            const myImage = document.createElement('img');
            
            // If senator.url contains only the ID
            myImage.src = `https://www.govtrack.us/static/legislator-photos/${senator.url}.jpeg`;

            myImage.alt = senator.name;

            // Create caption element
            const myCaption = document.createElement('figcaption');
            myCaption.textContent = senator.name;

            // Assign gender class
            switch (senator.gender) {
                case "female":
                    myFigure.className = "female";
                    break;
                case "male":
                    myFigure.className = "male";
                    break;
                default:
                    myFigure.className = "other";
            }

            // Assemble the parts
            myFigure.appendChild(myImage);
            myFigure.appendChild(myCaption);

            // Attach the HTML to parent element
            myParent.appendChild(myFigure);
        });
    }

    // Call the function to display senators
    displaySenators(senators);
}
