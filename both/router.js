Router.configure({
    layoutTemplate: 'main'
});
Router.route('/', 'items');
Router.route('/items/:_id', function () {
    var item = Items.findOne({_id: this.params._id});
    console.log("id: " +this.params._id + ", item: " + item.name);
    this.render('item', {data: item});
}, {
    name: 'items.show'
});