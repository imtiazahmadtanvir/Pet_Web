console.log("Hello");

// Global variable to store pet data
let petsData = [];

// Fetching all categories: cat, dog, rabbit, birds
const loadCategories = () => {
    fetch("https://openapi.programming-hero.com/api/peddy/categories")
        .then((response) => response.json())
        .then((data) => {
            displayCategories(data.categories);
        })
        .catch((error) => console.error(error));
        
};

// Display categories function
const displayCategories = (categories) => {
   
    const cards = document.getElementById("pets_Card");
    pets_Card.classList.add('hidden');

    Spinner(true);
    setTimeout(() => {
        pets_Card.classList.remove('hidden');     
        Spinner(false);
    }, 1000);


    
    const categoryContainer = document.getElementById("category");
    categories.forEach((item) => {
        

        // Create a button for each category
        const button = document.createElement("button");
        button.classList.add("btn", "btn-outline");
        button.textContent = item.category;



        // Create image element
        const img = document.createElement("img");
        img.src = item.category_icon;
        img.alt = `${item.category} image`;
        img.classList.add("w-[30px]");

        // Append image and text to the button
        button.appendChild(img);

        // Add event listener to button
        button.addEventListener("click", () => {
            console.log(`Category clicked: ${item.category}`);  
            loadPets(item.category);  
        });

        // Add button to the category container
        categoryContainer.appendChild(button);

       

    });
};
loadCategories();

// Fetch pets based on the category
const loadPets = (category) => {
    let url = "https://openapi.programming-hero.com/api/peddy/pets";
    
    if (category) {
        url = `https://openapi.programming-hero.com/api/peddy/category/${category}`;
        console.log(`Fetching pets for category: ${category}`); 
    }

    fetch(url)
    .then((response) => response.json())  
    .then((peddy) => {  
        console.log(peddy);  
        
        petsData = category ? peddy.data : peddy.pets;
        
        displayPets(petsData);  
    })
        .catch((error) => console.error(error));
};

// Display pets
const displayPets = (pets) => {

    const cards = document.getElementById("pets_Card");
    pets_Card.classList.add('hidden');

    Spinner(true);
    setTimeout(() => {
        pets_Card.classList.remove('hidden');     
        Spinner(false);
    }, 1000);


    const petsContainer = document.getElementById("pets");
    const noDataMessage = document.getElementById("no-data-message");

    
    petsContainer.innerHTML = "";

    
    if (pets.length === 0) {
       
        petsContainer.classList.add("hidden");
        noDataMessage.classList.remove("hidden");
    } else {
        
        petsContainer.classList.remove("hidden");
        noDataMessage.classList.add("hidden");

     
        pets.forEach((pet) => {
            const petCard = document.createElement("div");
            petCard.classList.add("card", "card-compact", "bg-base-100", "shadow-xl");
            petsContainer.classList.add("grid", "grid-cols-1", "md:grid-cols-2", "lg:grid-cols-3", "gap-4", "px-3", "py-3");

            petCard.innerHTML = `
                <div class="p-6 w-full border-1">
                    <img src="${pet.image}" class="w-full object-cover rounded-xl" alt="${pet.pet_name}" />
                    <div class="card-body">
                        <h2 class="card-title">${pet.pet_name}</h2>
                        <p><i class="fa-solid fa-gem"></i> Breed: ${pet.breed? pet.breed : "Data not available."}</p>
                        <p><i class="fa-solid fa-cake-candles"></i> Birth: ${pet.date_of_birth? pet.date_of_birth : "Data not available."}</p>
                        <p><i class="fa-solid fa-mercury"></i> Gender: ${pet.gender? pet.gender : "NoT available."}</p>
                        <p class="text-lg font-bold text-black-500"><i class="fa-solid fa-money-check-dollar text-sm"></i> Price: ${pet.price? pet.price : "NA"}$</p>
                        <div class="card-actions justify-center gap-5">
                            <button data-image="${pet.image}" class="select-pet btn btn-primary btn-sm bg-transparent text-blue-500 border-0 hover:bg-black rounded-xl "><i class="fa-solid fa-thumbs-up"></i></button>
                            <button onClick="openModal()" class="btn btn-primary btn-sm">Adopt</button>
                           <button class="btn btn-outline btn-sm" onClick="openDetailsModal(${pet.petId})">Details</button>
                        </div>
                    </div>
                </div>
            `;
            petsContainer.appendChild(petCard);
        });

            
        const selectButtons = document.querySelectorAll(".select-pet");
        selectButtons.forEach((button) => {

            button.addEventListener("click", function () {
                const pic = this.getAttribute("data-image");
                addPetToSelected(pic);
            });
        });

    }
};



const addPetToSelected = (pic) => {
    const selectedPetsContainer = document.getElementById("selected-pets");

 
    const img = document.createElement("img");
    img.src = pic;
    img.classList.add("rounded-xl");

  
    selectedPetsContainer.appendChild(img);
};

   // Open modal

const openModal = () => {
    const showModal = document.getElementById("my_modal_1");
    const Count = document.getElementById("Count");

    let count = 4


   showModal.showModal();

    const LetsCountDown = setInterval(() => {
         count--;
         Count.textContent = count;

        if (count === 0) {
            clearInterval(LetsCountDown);
            showModal.close();
           
        }
    }, 1000);
    
};




loadPets();  

    // Sort button functionality
document.getElementById("sortButton").addEventListener("click", () => {
   
    // Sort pets by price in descending order

    const cards = document.getElementById("pets_Card");
    pets_Card.classList.add('hidden');

    Spinner(true);
    setTimeout(() => {
        pets_Card.classList.remove('hidden');     
        Spinner(false);
    }, 1000);

    petsData.sort((a, b) => b.price - a.price);
    displayPets(petsData);
});

const openDetailsModal = async (petId) => {
    console.log("heelo");
    console.log(petId);

    fetch(`https://openapi.programming-hero.com/api/peddy/pet/${petId}`)
        .then((response) => response.json())
        .then((data) => {
            openDetailsModal_2(data.petData);
        })
        .catch((error) => console.error(error));

 
};



const openDetailsModal_2 = (det) => {
    console.log("Pet details data:", det);

    const detailModal = document.getElementById("modal-box");
    detailModal.classList.remove('hidden');

    const petImage = det?.image || 'default_image_url.jpg'; 
    const petName = det?.pet_name || 'Unknown';
    const breed = det?.breed || 'Not available';
    const birth = det?.date_of_birth || 'Not available';
    const gender = det?.gender || 'Not available';
    const price = det?.price ? `${det.price}$` : 'Not available';
    const vaccinated = det?.vaccinated ? 'Yes' : 'No';
    const details = det?.pet_details || 'Details not available';

  
    detailModal.innerHTML = `
        <div class="modal-box w-11/12 mx-auto p-10">
            <div>
                <figure class="w-full text-center">
                    <img class="w-full rounded-lg" src="${petImage}" alt="${petImage}" />
                </figure>
            </div>

            <h2 class="text-lg font-bold pt-6">${petName}</h2>

            <div class="grid grid-cols-2 pt-4 gap-4">
                <div class="flex gap-2">
                    <p class="text-[#131313B3]"><i class="fa-solid fa-gem"></i> Breed: ${breed}</p>
                </div>
                <div class="flex gap-2">
                    <p class="text-[#131313B3]"><i class="fa-solid fa-cake-candles"></i> Birth: ${birth}</p>
                </div>
                <div class="flex gap-2">
                    <p class="text-[#131313B3]"><i class="fa-solid fa-mercury"></i> Gender: ${gender}</p>
                </div>
                <div class="flex gap-2">
                    <p class="text-[#131313B3]"><i class="fa-solid fa-money-check-dollar"></i> Price: ${price}</p>
                </div>
                <div class="flex gap-2">
                    <p class="text-text-gray-220"><i class="fa-solid fa-comment-medical"></i> Vaccinated status: ${vaccinated}</p>
                </div>
            </div>

            <div class="divider text-[#1313131A]"></div>

            <h3 class="font-bold pt-2">Details Information</h3>
            <p class="py-4 text-gray-220">
                ${details}
            </p>
            <div class="modal-action w-full">        
                <button onclick="closeModal()" class="btn btn-success bg-yellow-400 border-0 font-extrabold w-full">Close</button>                     
            </div>
        </div>
    `;

    detailModal.showModal();
};

const closeModal = () => {
    const detailModal = document.getElementById("modal-box");
    detailModal.classList.add('hidden');

    window.location.reload();

};


const Spinner = (isLoading) => {
    const spinner = document.getElementById('spinner');

    isLoading ? spinner.classList.remove('hidden') : spinner.classList.add('hidden');
}


function scrollToSection() {
    const section = document.querySelector('section.adopt_section');
    
    section.scrollIntoView({ behavior: 'smooth' });
}
