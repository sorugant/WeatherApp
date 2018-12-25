$(function () {
    $.validator.setDefaults({
        errorClass: 'help-block',
        highlight: function (element) {
            $(element)
                .closest('.form-control')
                .addClass('formError');
        },
        unhighlight: function (element) {
            $(element)
                .closest('.form-control')
                .removeClass('formError');
        },
        errorPlacement: function (error, element) {
            if (element.prop('type') === 'checkbox') {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        }
    });

    $("#inputForm").validate({
        rules: {
            fromAdd: "required",
            toAdd: "required",
            dateTravel: "required"
        },
        messages: {
            fromAdd: "From location is required.",
            toAdd: "To location is required.",
            dateTravel: "Date is required."
        }

    });
});
