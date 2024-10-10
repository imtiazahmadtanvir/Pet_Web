<h1>WebSite Name: Puddy - Pet Adoption </h1>

<h3>Description:</h3>Puddy is a pet adoption platform that connects potential pet owners with animals in need of loving homes. The site offers a simple and user-friendly way to explore various pets, sort them by price, and access detailed information about each one before making an adoption decision.

<h3>Key Features:</h3>
<ol>
<h4>Browse Pet Categories:</h4> Users can    view pets by category such as dogs, cats, birds, and more.

<h4>Detailed Pet Information:</h4> Each pet has a dedicated card displaying important details like breed, age, gender, price, and vaccination status.

<h4>Price Sorting:</h4> Users can easily sort available pets by price in descending order, helping them find pets within their budget.

<h4>Price Sorting:</h4> Users can easily sort available pets by price in descending order, helping them find pets within their budget.

<h4>Search by Category:</h4> Users can search for pets by category and retrieve real-time data based on the selected category.

<h4>Favourites Selection:</h4> Users can search for pets by category and retrieve real-time data based on the selected category.
</ol>

<h3>ES6 Features Used</h3>

<ol>
<h4>Arrow Functions:</h4>For concise function expressions, improving readability and maintaining the correct this context.
<br>
const loadCategories = () => { /* code */ }; 

<h4>Template Literals:</h4> For embedding variables and expressions within strings more easily, making the code cleaner.
<br>
petCard.innerHTML = `
    ${pet.pet_name}
`;


<h4>Destructuring Assignment:</h4> Extracting values from objects or arrays into variables for cleaner, more readable code.
<br>
const { category, category_icon } = item;

<h4>Promises with .then():</h4> Handling asynchronous operations like API requests, ensuring the code continues executing without waiting.
<br>
fetch("https://openapi.programming-hero.com/api/peddy/categories")
    .then(response => response.json())
    .then(data => displayCategories(data.categories));


<h4>Let and Const:</h4> For declaring block-scoped variables (let) and constants (const), ensuring safer, more predictable code.
<br>
let petsData = []; // mutable
const categoryContainer = document.getElementById("category"); // immutable reference


<h4>Default Parameters:</h4> Providing default values for function parameters if no arguments or undefined is passed.
<br>
const loadPets = (category = "") => { /* code */ };


<h4>Async/Await:</h4> Used for handling asynchronous operations more cleanly than .then(), especially in functions that make multiple asynchronous calls.
<br>
const openDetailsModal = async (petId) => {
    const response = await fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`);
    const data = await response.json();
    openDetailsModal_2(data.petData);
};


<h4>ForEach Loop:</h4> A cleaner way of iterating over arrays, replacing the traditional for loop with an easy-to-read callback function.
<br>
categories.forEach((item) => { /* code */ });
</ol>

<h3>Live link</h3>
<ol>
url1=https://venerable-jelly-f5b32f.netlify.app/
url2=https://imtiazahmadtanvir.github.io/Pet_Web/

</ol>
