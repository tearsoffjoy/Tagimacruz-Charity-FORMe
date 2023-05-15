var form = document.querySelector('form');
form.addEventListener('submit', function(event) {
    var requiredFields = document.querySelectorAll('input[required]');
    var emptyFields = Array.from(requiredFields).filter(function(field) {
        return !field.value;
    });

    if (emptyFields.length > 0) {
        event.preventDefault();
        alert('Please fill out this field.');
    }
});