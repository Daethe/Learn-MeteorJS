Template.login.events({
    "submot form": function(event, template) {
        event.preventDefault();

        var user = $('#username').val();
        var pass = $('#password').val();

        Meteor.loginWithPassword(user, pass, function(err) {
            if (error) {
                alert(err.reason);
            }
        });
    }
});
