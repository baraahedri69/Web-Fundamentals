function editProfile() {
    // Prompt the user to enter a new name
    var newName = prompt("Enter your new name:");
    
    // Check if the user entered a name
    if (newName !== null && newName !== "") {
        // Select the element containing the user's name
        var userNameElement = document.querySelector('.user-card .card-body h1');
        
        // Update the text content of the element with the new name
        userNameElement.textContent = newName;
    }
}

// Add event listener to the Edit Profile link
document.getElementById("edit-profile-link").addEventListener("click", function(event) {
    // Prevent the default behavior of following the hyperlink
    event.preventDefault();
    // Call the editProfile function
    editProfile();
});


function removeRequest(button) {
    // Get the parent list item of the clicked button
    var listItem = button.parentNode.parentNode;
    
    // Remove the list item from the DOM
    listItem.remove();
}



const connectionRequestsBadge = document.querySelector('.badge');

// Get references to the accept and close buttons
const acceptButtons = document.querySelectorAll('.card-list-item .icon:first-child');
const closeButton = document.querySelectorAll('.card-list-item .icon:last-child');

// Add click event listeners to accept buttons
acceptButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Decrease connection requests number by 1
        decreaseConnectionRequests();
        // Remove the parent list item containing the button
        button.parentNode.parentNode.remove();
    });
});

// Add click event listeners to close buttons
closeButton.forEach(button => {
    button.addEventListener('click', () => {
        // Decrease connection requests number by 1
        decreaseConnectionRequests();
        // Remove the parent list item containing the button
        button.parentNode.parentNode.remove();
    });
});

// Function to decrease connection requests number by 1
function decreaseConnectionRequests() {
    const currentCount = parseInt(connectionRequestsBadge.textContent);
    if (!isNaN(currentCount) && currentCount > 0) {
        connectionRequestsBadge.textContent = currentCount - 1;
    }
}


