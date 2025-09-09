/*************************************************************/
//
//
/*************************************************************/
document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const form = event.target; // Get the form that triggered the event
    if (!form.checkValidity()) {
        form.reportValidity();
        event.preventDefault(); // Prevent form submission if invalid
        return;
    }

    event.preventDefault(); // Prevent the default page reload on form submission
    reg_userDetails(); // Call the function to handle user details registration
});



