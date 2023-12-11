// header scroll
let header = document.querySelector('header');

window.addEventListener('scroll',() => {
    header.classList.toggle('shadow', window.scrollY > 0);
});



// Function to search by location
function searchByLocationName() {
    const locationInput = document.getElementById('locationSearchName').value.toLowerCase();
    const results = nationalParksArray.filter(park => park.LocationName.toLowerCase().includes(locationInput));
    displayResults(results);
};

// Function to search by location
function searchByLocation() {
    const locationInput = document.getElementById('locationSearch').value;
    const results = nationalParksArray.filter(park => park.State === locationInput);
    displayResults(results);
};

// Function to search by park type
function searchByType() {
    const typeInput = document.getElementById('typeSearch').value;
    const results = nationalParksArray.filter(park => park.LocationName.includes(typeInput));
    displayResults(results);
};

// Function to search by Mountain
function searchMountain() {
    const mountainInput = document.getElementById('mountainSearch').value;
    const results = mountainsArray.filter(mountain => mountain.name == mountainInput  );
    displayMountainResults(results);
};

// Function to clear search
function clearSearch() {
    document.getElementById('locationSearchName').value = "";
    document.getElementById('locationSearch').value = "";
    document.getElementById('typeSearch').value = ""; 
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; 
}
// Function to display Mountain
function displayMountainResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    // Clear previous results
    resultsContainer.innerHTML = ''; 

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No matching mountains found.</p>';
    } else {
        results.forEach(mountain => {
            const mountainInfo = document.createElement('div');
            mountainInfo.innerHTML = 
                `<strong>${mountain.name}</strong> - <br />
                Elevation: ${mountain.elevation},<br />
                Effort: ${mountain.effort},<br />
                <img src="enjoy-the-outdoors/images/${mountain.img}"> <br />
                Description: ${mountain.desc},<br />
                Coordinates: ${mountain.coords.lat}, ${mountain.coords.lng}`;
            resultsContainer.appendChild(mountainInfo);
        });
    }
};


// Function to display search results
function displayResults(results) {
    const resultsContainer = document.getElementById('searchResults');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (results.length === 0) {
        resultsContainer.innerHTML = '<p>No matching parks found.</p>';
    } else {
        results.forEach(park => {
            const parkInfo = document.createElement('div');
            parkInfo.innerHTML = `<strong>${park.LocationName}</strong> - ${park.Address}, ${park.City}, ${park.State},${park.ZipCode},${park.Phone}`;
            resultsContainer.appendChild(parkInfo);
        });
    }
};

// Swiper
document.addEventListener('DOMContentLoaded', function () {
    // Initialize Swiper
    var swiper = new Swiper('.home', {
        // Optional parameters
        direction: 'horizontal',
        loop: true,
        
        // If you need pagination
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        
        // Navigation arrows
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
});
