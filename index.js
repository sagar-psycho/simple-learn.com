document.getElementById('imagezoom').addEventListener('animationend', function() {
    // Hide the image and show the container after the animation ends
    this.style.display = 'none';
    document.querySelector('.contane').style.display = 'block';

    document.getElementById('soundEffect').play();
});

// Get the login popup
const loginPopup = document.getElementById("loginPopup");

// Get the close button inside the popup
const closeBtn = document.querySelector('.popup-content .close');

// Function to show the login popup
function showLoginPopup() {
    loginPopup.style.display = "block";
    document.body.classList.add("popup-visible");
}

// Function to hide the login popup
function hideLoginPopup() {
    loginPopup.style.display = "none";
    document.body.classList.remove("popup-visible");
}

// Add event listener to close button
closeBtn.addEventListener('click', hideLoginPopup);

// Close the popup when the user clicks anywhere outside the popup
window.addEventListener('click', function(event) {
    if (event.target == loginPopup) {
        hideLoginPopup();
    }
});
//digitalbtm
// Add event listeners to the buttons and link
document.getElementById('mathsbtn').addEventListener('click', showLoginPopup);
document.getElementById('webbtn').addEventListener('click', showLoginPopup);
document.getElementById('loginBtn').addEventListener('click', showLoginPopup);
document.getElementById('digitalbtm').addEventListener('click', showLoginPopup);
document.getElementById('mernbtm').addEventListener('click', showLoginPopup);
// Add event listener to the ai-login button for showing the login popup


// Prevent the form from submitting (for demonstration purposes)
document.getElementById('sheetdb').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Welcome!');
});

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent the default form submission behavior

    // Here you can perform form validation and other necessary checks
    
    // Redirect the user to the new page
    window.location.href = "main.html";
}

// Add event listener to the login form for form submission
document.getElementById('sheetdb').addEventListener('submit', handleFormSubmission);


window.onload = function() {
    var changingText = document.getElementById("changingText");
    var texts = [
    "Welcome to Simple Learn.",
    "Start learning with Simple Learn!"
    ]; // Add more text if needed
    var index = 0;
    var letterIndex = 0;
    
    function typeText() {
    if (letterIndex < texts[index].length) {
        changingText.textContent += texts[index].charAt(letterIndex);
        letterIndex++;
        setTimeout(typeText, 100); // Speed of typing (100 milliseconds)
    } else {
        setTimeout(eraseText, 2000); // Delay before erasing (2000 milliseconds)
    }
    }
    
    function eraseText() {
    if (changingText.textContent.length > 0) {
        changingText.textContent = changingText.textContent.slice(0, -1);
        setTimeout(eraseText, 50); // Speed of erasing (50 milliseconds)
    } else {
        index = (index + 1) % texts.length;
        letterIndex = 0;
        setTimeout(typeText, 500); // Delay before typing the next text (500 milliseconds)
    }
    }
    
    typeText(); // Start typing
};

var form=document.getElementById("sheetdb")
        form.addEventListener("submit", e=>{
        e.preventDefault();
        fetch(form.action,{
            method:"POST",
            body: new FormData(document.getElementById("sheetdb")),
        }).then((html) => {
            window.open('main.html');
        });
})




// No internet 
window.addEventListener('load', function () {
    function updateOnlineStatus(event) {
        var online = navigator.onLine;
        var onlineDiv = document.querySelector('.online');
        var offlineDiv = document.querySelector('.offline');
        if (online) {
            onlineDiv.style.display = 'block';
            offlineDiv.style.display = 'none';
        } else {
            onlineDiv.style.display = 'none';
            offlineDiv.style.display = 'block';
        }
    }

    window.addEventListener('online', updateOnlineStatus);
    window.addEventListener('offline', updateOnlineStatus);
    updateOnlineStatus();
});
