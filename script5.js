








// // Function to set active link in the navigation
// function setActiveLink(activeLink) {
//     document.querySelectorAll('.nav li a').forEach(link => {
//         link.classList.toggle('active', link.innerText.trim() === activeLink);
//     });
//     console.log(`Active Link: ${activeLink}`);
// }

// // Toggle popup display and blur effect
// function togglePopup() {
//     document.getElementById('blur').classList.toggle('active');
//     document.getElementById('popup').classList.toggle('active');
//     resetPopup();
// }

// // Toggle between current and custom date input
// function toggleDateInput() {
//     const currentDateDisplay = document.getElementById('currentDateDisplay');
//     const customDateInput = document.getElementById('customDate');
//     const isCurrentDate = document.querySelector('input[name="date"][value="current"]').checked;

//     if (isCurrentDate) {
//         currentDateDisplay.textContent = `Selected Date: ${new Date().toLocaleDateString()}`;
//         customDateInput.style.display = 'none';
//     } else {
//         currentDateDisplay.textContent = '';
//         customDateInput.style.display = 'block';
//     }
// }

// // Update displayed date when custom date is selected
// function updateDisplayedDate() {
//     const customDate = document.getElementById('customDate').value;
//     document.getElementById('currentDateDisplay').textContent = `Selected Date: ${new Date(customDate).toLocaleDateString()}`;
// }

// // Reset popup form inputs and UI elements
// function resetPopup() {
//     document.getElementById('formMessage').style.display = 'none';
//     document.getElementById('amount').value = '';
//     document.getElementById('description').value = '';
//     document.getElementById('incomes').selectedIndex = 0;
//     document.getElementById('expenses').selectedIndex = 0;
//     document.querySelector('input[name="date"][value="current"]').checked = true;
//     toggleDateInput();
//     showIncome();
// }

// // Show income selection in popup
// function showIncome() {
//     document.getElementById('incomeBtn').classList.add('btn-active-income');
//     document.getElementById('incomeBtn').classList.remove('btn-inactive');
//     document.getElementById('expenseBtn').classList.remove('btn-active-expense');
//     document.getElementById('expenseBtn').classList.add('btn-inactive');
//     document.getElementById('incomes').style.display = 'block';
//     document.getElementById('expenses').style.display = 'none';
// }

// // Show expense selection in popup
// function showExpense() {
//     document.getElementById('expenseBtn').classList.add('btn-active-expense');
//     document.getElementById('expenseBtn').classList.remove('btn-inactive');
//     document.getElementById('incomeBtn').classList.remove('btn-active-income');
//     document.getElementById('incomeBtn').classList.add('btn-inactive');
//     document.getElementById('expenses').style.display = 'block';
//     document.getElementById('incomes').style.display = 'none';
// }

// // Handle form submission
// function submitForm() {
//     const amount = document.getElementById('amount').value;
//     const description = document.getElementById('description').value;
//     const selectedDate = document.querySelector('input[name="date"]:checked').value === 'current'
//         ? new Date().toLocaleDateString()
//         : document.getElementById('customDate').value;
//     const category = document.getElementById('incomes').style.display === 'block'
//         ? document.getElementById('incomes').value
//         : document.getElementById('expenses').value;

//     // if (!amount || !category) {
//     //     alert("Please fill in all required fields.");
//     //     return;
//     // }

//     const transactionType = document.getElementById('incomes').style.display === 'block' ? 'Income' : 'Expense';
    
//     // Display form submission success message
//     const formMessage = document.getElementById('formMessage');
//     formMessage.style.display = 'block';
//     formMessage.textContent = "Submitted successfully!";
//     formMessage.style.color = 'green';

//     // Log the form data to console for testing purposes
//     console.log(`Transaction Type: ${transactionType}`);
//     console.log(`Amount: ${amount}`);
//     console.log(`Date: ${selectedDate}`);
//     console.log(`Category: ${category}`);
//     console.log(`Description: ${description}`);
    
//     // Keep the form open, clear the fields for new entry, but do not close popup
//     resetPopup();

//     // Hide the success message after 3 seconds
//     setTimeout(() => {
//         formMessage.style.display = 'none';
//     }, 3000);
// }

// // Close popup only when cancel button is clicked
// document.getElementById('cancelBtn').addEventListener('click', togglePopup);

// // Initial setup
// document.addEventListener('DOMContentLoaded', () => {
//     toggleDateInput(); // Set initial date selection
//     showIncome(); // Set initial category to Income
//     setActiveLink('Home'); // Set initial active link
// });





// Function to set active link in the navigation
function setActiveLink(activeLink) {
    document.querySelectorAll('.nav li a').forEach(link => {
        link.classList.toggle('active', link.innerText.trim() === activeLink);
    });
    console.log(`Active Link: ${activeLink}`);
}

// Toggle popup display and blur effect
function togglePopup() {
    document.getElementById('blur').classList.toggle('active');
    document.getElementById('popup').classList.toggle('active');
    resetPopup();
}

// Toggle between current and custom date input
function toggleDateInput() {
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    const customDateInput = document.getElementById('customDate');
    const isCurrentDate = document.querySelector('input[name="date"][value="current"]').checked;

    if (isCurrentDate) {
        currentDateDisplay.textContent = `Selected Date: ${new Date().toLocaleDateString()}`;
        customDateInput.style.display = 'none';
    } else {
        currentDateDisplay.textContent = '';
        customDateInput.style.display = 'block';
    }
}

// Update displayed date when custom date is selected
function updateDisplayedDate() {
    const customDate = document.getElementById('customDate').value;
    document.getElementById('currentDateDisplay').textContent = `Selected Date: ${new Date(customDate).toLocaleDateString()}`;
}

// Reset popup form inputs and UI elements
function resetPopup() {
    document.getElementById('formMessage').style.display = 'none'; // Hide message initially
    document.getElementById('amount').value = ''; // Clear amount
    document.getElementById('description').value = ''; // Clear description
    document.getElementById('incomes').selectedIndex = 0; // Reset income selection
    document.getElementById('expenses').selectedIndex = 0; // Reset expense selection
    document.querySelector('input[name="date"][value="current"]').checked = true; // Reset date to current
    toggleDateInput(); // Reset date input display
    showIncome(); // Reset category to Income
}

// Show income selection in popup
function showIncome() {
    document.getElementById('incomeBtn').classList.add('btn-active-income');
    document.getElementById('incomeBtn').classList.remove('btn-inactive');
    document.getElementById('expenseBtn').classList.remove('btn-active-expense');
    document.getElementById('expenseBtn').classList.add('btn-inactive');
    document.getElementById('incomes').style.display = 'block';
    document.getElementById('expenses').style.display = 'none';
}

// Show expense selection in popup
function showExpense() {
    document.getElementById('expenseBtn').classList.add('btn-active-expense');
    document.getElementById('expenseBtn').classList.remove('btn-inactive');
    document.getElementById('incomeBtn').classList.remove('btn-active-income');
    document.getElementById('incomeBtn').classList.add('btn-inactive');
    document.getElementById('expenses').style.display = 'block';
    document.getElementById('incomes').style.display = 'none';
}

// Handle form submission
function submitForm() {
    const amount = document.getElementById('amount').value;
    const description = document.getElementById('description').value;
    const selectedDate = document.querySelector('input[name="date"]:checked').value === 'current'
        ? new Date().toLocaleDateString()
        : document.getElementById('customDate').value;
    const category = document.getElementById('incomes').style.display === 'block'
        ? document.getElementById('incomes').value
        : document.getElementById('expenses').value;

    // // Show error if fields are empty
    // if (!amount || !category) {
    //     alert("Please fill in all required fields.");
    //     return;
    // }

    const transactionType = document.getElementById('incomes').style.display === 'block' ? 'Income' : 'Expense';
    
    // Display form submission success message
    const formMessage = document.getElementById('formMessage');
    formMessage.style.display = 'block'; // Show message
    formMessage.textContent = "Submitted successfully!";
    formMessage.style.color = 'green';

    // Log the form data to console for testing purposes
    console.log(`Transaction Type: ${transactionType}`);
    console.log(`Amount: ${amount}`);
    console.log(`Date: ${selectedDate}`);
    console.log(`Category: ${category}`);
    console.log(`Description: ${description}`);
    
    // Clear all fields after submission
    resetPopup();

    // Hide the success message after 3 seconds
    setTimeout(() => {
        formMessage.style.display = 'none'; // Hide message
    }, 3000);
}

// Close popup only when cancel button is clicked
document.getElementById('cancelBtn').addEventListener('click', togglePopup);

// Initial setup
document.addEventListener('DOMContentLoaded', () => {
    toggleDateInput(); // Set initial date selection
    showIncome(); // Set initial category to Income
    setActiveLink('Home'); // Set initial active link
});

