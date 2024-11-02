// Import senators data
import { senators } from '../data/senators.js';
console.log(senators);

// Tag HTML elements
const myParent = document.querySelector('#peopleHere');
const myNavigation = document.querySelector('nav');

// All people button
const btnAll = document.createElement('button');
btnAll.textContent = "All Senators";
btnAll.id = "btnAll"; // Add id attribute
btnAll.addEventListener('click', () => displaySenators(senators)); // Corrected function name

// Female people button
const btnFemale = document.createElement('button');
btnFemale.textContent = "Female Senators";
btnFemale.id = "btnFemale"; // Add id attribute
btnFemale.addEventListener('click', () => {
    const arrayFemale = senators.filter(person => person.gender === 'female'); // Corrected variable
    displaySenators(arrayFemale);
});

// Male people button
const btnMale = document.createElement('button');
btnMale.textContent = "Male Senators";
btnMale.id = "btnMale"; // Add id attribute
btnMale.addEventListener('click', () => {
    const arrayMale = senators.filter(person => person.gender === 'male'); // Corrected variable
    displaySenators(arrayMale);
});

// Other people button
const btnOther = document.createElement('button');
btnOther.textContent = "Others";
btnOther.id = "btnOther"; // Add id attribute
btnOther.addEventListener('click', () => {
    const arrayOther = senators.filter(person => person.gender !== 'male' && person.gender !== 'female'); // Corrected variable
    displaySenators(arrayOther);
});

// Add buttons to the page
myNavigation.appendChild(btnAll);
myNavigation.appendChild(btnFemale);
myNavigation.appendChild(btnMale);
myNavigation.appendChild(btnOther);

// Loop through all the senators
function displaySenators(senators) { // Corrected function name
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
