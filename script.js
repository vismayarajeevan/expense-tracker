

// function toggle() {
//     var blur = document.getElementById('blur');
//     blur.classList.toggle('blur'); // Toggle blur class

//     var popup = document.getElementsByClassName('popup')[0];
//     popup.classList.toggle('active'); // Toggle popup visibility

//     // Check if the popup is active to show the buttons correctly
//     if (popup.classList.contains('active')) {
//         showIncome(); // Default to show income
//     }
// }

// function clearForm() {
//     document.querySelector('input[type="number"]').value = '';
//     document.querySelector('textarea').value = '';
//     document.getElementById('incomes').selectedIndex = 0;
//     document.getElementById('expenses').selectedIndex = 0;
// }

// function showIncome() {
//     clearForm();
//     document.getElementById('incomes').style.display = 'block'; // Show income select
//     document.getElementById('expenses').style.display = 'none'; // Hide expense select

//     document.getElementById('submit').style.display = 'block'; // Ensure submit button is shown
//     document.getElementById('closeBtn').style.display = 'none'; // Hide close button
// }

// function showExpense() {
//     clearForm();
//     document.getElementById('incomes').style.display = 'none'; // Hide income select
//     document.getElementById('expenses').style.display = 'block'; // Show expense select

//     document.getElementById('submit').style.display = 'block'; // Ensure submit button is shown
//     document.getElementById('closeBtn').style.display = 'none'; // Hide close button
// }

// function submitForm() {
//     var message = "Form submitted successfully!";
//     var messageContainer = document.getElementById('formMessage');
//     messageContainer.innerText = message;
//     messageContainer.style.display = 'block'; // Show the message

//     document.getElementById('submit').style.display = 'none'; // Hide Submit button after submit
//     document.getElementById('closeBtn').style.display = 'inline-block'; // Show close button

//     setTimeout(function() {
//         messageContainer.style.display = 'none'; // Hide the message after 3 seconds
//     }, 3000);
// }



function toggle() {
    var popup = document.getElementsByClassName('popup')[0];
    popup.classList.toggle('active');
}

function clearForm() {
    // Clear input fields
    document.querySelector('input[type="number"]').value = '';
    document.querySelector('textarea').value = '';
    document.getElementById('incomes').selectedIndex = 0;
    document.getElementById('expenses').selectedIndex = 0;
}

function showIncome() {
    clearForm();
    document.getElementById('incomes').style.display = 'block';
    document.getElementById('expenses').style.display = 'none';

    // Change button colors
    var incomeBtn = document.querySelector('.btn1');
    var expenseBtn = document.querySelector('.btn2');
    incomeBtn.classList.add('btn-active-income');
    incomeBtn.classList.remove('btn-inactive');
    expenseBtn.classList.remove('btn-active-expense');
    expenseBtn.classList.add('btn-inactive');

    // Show submit and cancel buttons
    document.getElementById('submit').style.display = 'block';
    document.getElementById('closeBtn').style.display = 'none';
}

function showExpense() {
    clearForm();
    document.getElementById('incomes').style.display = 'none';
    document.getElementById('expenses').style.display = 'block';

    // Change button colors
    var incomeBtn = document.querySelector('.btn1');
    var expenseBtn = document.querySelector('.btn2');
    incomeBtn.classList.remove('btn-active-income');
    incomeBtn.classList.add('btn-inactive');
    expenseBtn.classList.add('btn-active-expense');
    expenseBtn.classList.remove('btn-inactive');

    // Show submit and cancel buttons
    document.getElementById('submit').style.display = 'block';
    document.getElementById('closeBtn').style.display = 'none';
}

function submitForm() {
    var message = "Form submitted successfully!";
    var messageContainer = document.getElementById('formMessage');
    messageContainer.innerText = message;
    messageContainer.style.display = 'block'; // Show the message

    // Hide submit and cancel buttons
    document.getElementById('submit').style.display = 'none';
    document.getElementById('closeBtn').style.display = 'inline-block'; // Show the close button

    // Optional: Hide the message after a few seconds
    setTimeout(function() {
        messageContainer.style.display = 'none'; // Hide the message after 3 seconds
    }, 3000);
}

// Initial display
showIncome();
