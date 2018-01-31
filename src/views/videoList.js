var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.on('change', this.render());
  },

  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.forEach(this.renderVideo, this);
  },

  renderVideo: function(video) {
    var videoView = new VideoListEntryView({model: video});
    $('.video-list').append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});


// Refactor the VideoListView to 
// for each video object in exampleVideoData, 
  // dynamically render one VideoListEntryView 
  // passing in the video data to VideoListEntryView