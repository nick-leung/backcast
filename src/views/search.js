var SearchView = Backbone.View.extend({

  events: {
    'click button': 'performSearch',
  },
  
  performSearch: function() {
    var query = this.$('input').val().trim();
    console.log('clicked,', query);
    if (query) {
      this.collection.search(query);
    }
    this.$('input').val('');
  },
  
  render: function() {
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/search.html')

});
