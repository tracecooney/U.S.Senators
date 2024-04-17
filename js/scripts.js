// Import senators data
import { senators } from '../data/people.js';

// Tag HTML elements
const myParent = document.querySelector('#peopleHere');

// Check if parent element exists
if (!myParent) {
    console.error("Parent element not found");
} else {
    // Loop through all the people
    function displayPeople(people) {
        // Clear previous content
        myParent.innerHTML = "";

        people.forEach(person => {
            // Create figure element
            const myFigure = document.createElement('figure');

            // Create image element
            const myImage = document.createElement('img');
            myImage.src = `https://www.govtrack.us/static/legislator-photos/${person.url}-200px.jpeg`;
            myImage.alt = person.name;

            // Create caption element
            const myCaption = document.createElement('figcaption');
            myCaption.textContent = person.name;

            // Assign gender class
            switch (person.gender) {
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

    // Call the function
    displayPeople(senators);
}
