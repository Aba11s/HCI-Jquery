$("#form1").validate({
    rules:{
        name:{
            minlength: 2
        },
        email:{
            email:true
        },
        phone:{
            number:true,
            minlength:8,
            maxlength:14
        },
        postalcode:{
            number:true,
            minlength:4,
            maxlength:8
        },
        textarea:{
            minlength:20
        }
    },
    messages: {
        name:{
            required:"please enter your name",
            minlength: "That's just a letter",
        },
        phone:{
            number:"numbers only",
            minlength:"invalid phone number",
            maxlength:"invalid phone number"
        },
        postalcode:{
            number:"invalid postal code",
            minlength:"invalid postal code",
            maxlength:"invalid postal code"
        },
        textarea:{
            minlength:"not detailed enough"
        }


    },

    submitHandler: function(form) {
      form.submit();
    }
   });
