document.addEventListener('DOMContentLoaded', function() {
    const navButtons = document.querySelectorAll('.navbar-button'); // Select navbar buttons

    navButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            // event.preventDefault(); // Prevent default button behavior, if needed.

            // Get the text content of the clicked button
            const buttonText = this.textContent.trim(); // Trim whitespace

            // Example: Log the clicked button text to the console
            console.log('Button clicked: ' + buttonText);

            // Example: You could add logic here to navigate to different sections
            // based on the button text.

            // Example: Display an alert with the button text
            // alert('Button clicked: ' + buttonText);

            // Add your custom logic here based on the button clicked.
            if(buttonText === "Home"){
              //Do something home related
            }
            if(buttonText === "About Us"){
              //Do something About Us related
            }
            if(buttonText === "Gallery"){
              //Do something Gallery related
            }
            if(buttonText === "Contact"){
              //Do something Contact related
            }
            if(buttonText === "Teacher"){
              //Do something Teacher related
            }
            if(buttonText === "Admisson"){
              //Do something Admisson related
            }

        });
    });

    // Example: Search functionality (if needed)
    const searchButton = document.querySelector('.searchButton');
    if (searchButton) {
        searchButton.addEventListener('click', function(event) {
            const searchInput = document.querySelector('.searchInput');
            if (searchInput) {
                const searchTerm = searchInput.value.trim();
                if (searchTerm) {
                    console.log('Search term: ' + searchTerm);
                    // Add your search logic here.
                    // Example: Redirect to a search results page.
                    // window.location.href = '/search?q=' + encodeURIComponent(searchTerm);
                    alert("Searching for: " + searchTerm)
                }
            }
        });
    }
});