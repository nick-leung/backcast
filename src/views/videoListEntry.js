var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.on('click', this.model.select());
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // $('.list').append(this.collection.forEach(function() {
    //   new VideoListEntryView({model: Video}).render().el;
    // }));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
