$("form").validate({
  rules: {
    email: {
      required: true,
        myEmail: true
    }
  },
  messages: {
    email: "Please enter valid email address.",
  }
});
// Adding custom email validation for a@b.c
jQuery.validator.addMethod("myEmail", function(value, element) {
   return this.optional( element ) || ( /^[a-z0-9]+([-._][a-z0-9]+)*@([a-z0-9]+(-[a-z0-9]+)*\.)+[a-z]{2,4}$/.test( value ) && /^(?=.{1,64}@.{4,64}$)(?=.{6,100}$).*/.test( value ) );
}, 'Please enter valid email address.');
