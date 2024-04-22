// Import senators data
import { senators } from '../data/senators.js';
console.log(senators);

// Tag HTML elements
const myParent = document.querySelector('#peopleHere');

// Loop through all the senators
function displaySenators(senators) {
    myParent.innerHTML = "";
    senators.forEach(senator => {
        const myFigure = document.createElement('figure');

        const myImage = document.createElement('img');
        
        // Retrieve govtrack_id for each senator
        const govtrackId = senator.govtrack_id;
        
        // Construct the image URL using govtrack_id
        myImage.src = `https://www.govtrack.us/static/legislator-photos/${govtrackId}-200px.jpeg`;
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
