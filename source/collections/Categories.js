Categories = new Mongo.Collection('categories');

Categories.attachSchema(new SimpleSchema({
    name: {
        type: String,
        label: "Nom"
    }
}));
