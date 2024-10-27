




function toggle(event) {
    if (event) {
        event.preventDefault();
    }

    var blur = document.getElementById('blur');
    var popup = document.getElementById('popup');
    blur.classList.toggle('active'); 
    popup.classList.toggle('active');

    // Reset date display when closing the popup
    if (!popup.classList.contains('active')) {
        resetPopup();
    }
}

function toggleDateInput() {
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    const customDateInput = document.getElementById('customDate');
    const currentDateOption = document.querySelector('input[name="date"][value="current"]');

    if (currentDateOption.checked) {
        const currentDate = new Date().toLocaleDateString();
        currentDateDisplay.textContent = `Selected Date: ${currentDate}`;
        customDateInput.style.display = 'none';
    } else {
        currentDateDisplay.textContent = '';
        customDateInput.style.display = 'block';
    }
}

function updateDisplayedDate() {
    const customDateInput = document.getElementById('customDate');
    const currentDateDisplay = document.getElementById('currentDateDisplay');
    
    const selectedDate = new Date(customDateInput.value).toLocaleDateString();
    currentDateDisplay.textContent = `Selected Date: ${selectedDate}`;
}

function resetPopup() {
    document.getElementById('formMessage').style.display = 'none';
    document.getElementById('amount').value = '';
    document.getElementById('description').value = '';
    document.getElementById('incomes').selectedIndex = 0;
    document.getElementById('expenses').selectedIndex = 0;
    document.querySelector('input[name="date"][value="current"]').checked = true;
    toggleDateInput();
    showIncome();
}

function showIncome() {
    document.getElementById('incomeBtn').classList.add('btn-active-income');
    document.getElementById('incomeBtn').classList.remove('btn-inactive');
    document.getElementById('expenseBtn').classList.add('btn-inactive');
    document.getElementById('expenseBtn').classList.remove('btn-active-income');
    document.getElementById('incomes').style.display = 'block';
    document.getElementById('expenses').style.display = 'none';
}

function showExpense() {
    document.getElementById('expenseBtn').classList.add('btn-active-expense');
    document.getElementById('expenseBtn').classList.remove('btn-inactive');
    document.getElementById('incomeBtn').classList.add('btn-inactive');
    document.getElementById('incomeBtn').classList.remove('btn-active-income');
    document.getElementById('expenses').style.display = 'block';
    document.getElementById('incomes').style.display = 'none';
}

function submitForm() {
    const messageContainer = document.getElementById('formMessage');
    const amountInput = document.getElementById('amount');
    const descriptionInput = document.getElementById('description');
    const incomeCategory = document.getElementById('incomes');
    const expenseCategory = document.getElementById('expenses');
    const customDateInput = document.getElementById('customDate');
    const currentDateDisplay = document.getElementById('currentDateDisplay');

    // Get the values from the inputs
    const amount = amountInput.value;
    const description = descriptionInput.value;
    const selectedIncomeCategory = incomeCategory.value;
    const selectedExpenseCategory = expenseCategory.value;
    const selectedCustomDate = customDateInput.value;

    // Form submission logic (if needed)
    // You can also add logic to send this data to a server

    var message = "Form submitted successfully!";
    messageContainer.innerText = message;
    messageContainer.style.display = 'block'; // Show the message

    // Clear the input fields after submission
    amountInput.value = '';
    descriptionInput.value = '';
    incomeCategory.selectedIndex = 0;
    expenseCategory.selectedIndex = 0;
    customDateInput.value = ''; // Clear custom date input
    customDateInput.style.display = 'none'; // Hide the custom date input
    currentDateDisplay.textContent = ''; // Reset displayed date

    // Hide the message after 3 seconds
    setTimeout(function() {
        messageContainer.style.display = 'none'; // Hide the message after 3 seconds
    }, 3000);
}

// Initial display
toggleDateInput(); // Set initial date selection
showIncome(); // Set initial category to Income
