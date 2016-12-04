$.validator.addMethod( "lettersonly", function( value, element ) {
    var reg = new RegExp(/^([^0-9]*)$/);
    if (reg.test(value)) {
        return true;
    }
    return false;
}, "Letters only please" );

// Wait for the DOM to be ready
$(function() {
    // Initialize form validation on the registration form.
    // It has the name attribute "registration"
    $("form[name='invite']").validate({
        // Specify validation rules
        rules: {
            // The key name on the left side is the name attribute
            // of an input field. Validation rules are defined
            // on the right side
            name: {
                required: true,
                lettersonly: true,
            },
            email: {
                required: true,
                // Specify that email should be validated
                // by the built-in "email" rule
            },
        },
        // Specify validation error messages
        messages: {
            name: {
                required: "Please enter your name, thanks!",
                lettersonly: "Eh...No numbers allowed!"
            },
            email: "Oops, did you miss to enter your email?"
        },
        // Make sure the form is submitted to the destination defined
        // in the "action" attribute of the form when valid
        submitHandler: function(form) {
            form.submit();
        }
    });
});

//# sourceMappingURL=app.js.map
