// Change the text of HTML file heading dynamically
document.querySelector("h1").textContent = "DOM Manipulation";

// Modify the style of ordered list items
const orderedList = document.querySelectorAll("ol li");
orderedList.forEach((item, index) => {
    item.style.color = index % 2 === 0 ? "blue" : "green"; // Alternate colors
});

// Add new items dynamically to the ordered list
const newItemButton = document.createElement("button");
newItemButton.textContent = "Add New Car";
document.body.appendChild(newItemButton);

newItemButton.addEventListener("click", () => {
    const newCar = document.createElement("li");
    newCar.textContent = "Bugatti";
    document.querySelector("ol").appendChild(newCar);
});

// Remove the last item in the ordered list
const removeItemButton = document.createElement("button");
removeItemButton.textContent = "Remove Last Car";
document.body.appendChild(removeItemButton);

removeItemButton.addEventListener("click", () => {
    const ol = document.querySelector("ol");
    if (ol.lastElementChild) {
        ol.removeChild(ol.lastElementChild);
    } else {
        alert("No items left to remove!");
    }
});

// Enhance image style on hover
document.querySelector("img").addEventListener("mouseover", (event) => {
    event.target.style.border = "5px solid black"; // Change border color
});

document.querySelector("img").addEventListener("mouseout", (event) => {
    event.target.style.border = "3px solid #73b2ec"; // Revert border color
});

// Registration Form: Provide a dynamic alert upon submission
document.querySelector("form").addEventListener("submit", (event) => {
    event.preventDefault(); // Prevent actual submission
    alert("Form Submitted Successfully!");
});

// Table: Alternate row colors for better readability
const tableRows = document.querySelectorAll("tbody tr");
tableRows.forEach((row, index) => {
    row.style.backgroundColor = index % 2 === 0 ? "#061f2e" : "#155075"; // Alternate colors
});

// Feature: Form validation
document.querySelector("form").addEventListener("submit", (event) => {
    const name = document.getElementById("full_name").value.trim();
    const email = document.getElementById("user_email").value.trim();
    const password = document.getElementById("password").value.trim();

    // Validation logic
    if (name === "") {
        alert("Full Name is required.");
        event.preventDefault();
    } else if (!email.includes("@")) {
        alert("Please enter a valid email address.");
        event.preventDefault();
    } else if (password.length < 6) {
        alert("Password must be at least 6 characters.");
        event.preventDefault();
    } else {
        alert("Form validated and submitted successfully!");
    }
});

// Feature: Highlight table rows on hover
tableRows.forEach((row) => {
    row.addEventListener("mouseover", () => {
        row.style.backgroundColor = "#f2f2f2"; // Highlight row
    });
    row.addEventListener("mouseout", () => {
        row.style.backgroundColor = ""; // Revert color
    });
});