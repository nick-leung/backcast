var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.on('select', this.render());
  },
  
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    // new Video();
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});
