var VideoListView = Backbone.View.extend({

  //el: '.list',

  render: function() {
    // console.log('IN VIDEO LIST VIEW', this.$el);
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
