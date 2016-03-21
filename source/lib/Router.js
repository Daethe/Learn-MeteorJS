Router.configure({
    layoutTemplate: "mainLayout"
});

Router.route('/', {
    name: 'home'
});

// ROUTER ACCOUNT
Router.route('/register', {
    name: "user.register",
    template: "register"
});
Router.route('/login', {
    name: "user.login",
    template: "login"
});

// ROUTER ARTICLE
Router.route('/article', {
    name: "article.list",
    template: "list"
});
Router.route('/article/:_id', {
    name: "article.show",
    template: "show",
    data: function() {
        var id = this.params._id;
    }
});
Router.route('/article/add', {
    name: "article.create",
    template: "create"
});
Router.route('/article/edit', {
    name: "article.edit",
    template: "edit"
});
Router.route('/article/:_by', {
    name: "article.byAuthor",
    template: "byAuthor",
    data: function() {
        var author = this.params._by;
    }
});
Router.route('/article/:_category', {
    name: "article.byCategory",
    template: "byCategory",
    data: function() {
        var category = this.params._category;
    }
});
