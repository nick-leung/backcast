var AppView = Backbone.View.extend({

  el: '#app',

  initialize: function() {
    this.videos = new Videos();
    // this.videoListView = new VideoListView({el: '.list'});
    // console.log(this.videoListView);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    new VideoListView({el: '.list'}).render();
    // console.log(this.videoListView);
    // this.videoListView.render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
