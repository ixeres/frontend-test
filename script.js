$(document).ready(function () {

// Car listings AJAX/JSON

  $(window).scroll(function() {
      if($(window).scrollTop() == $(document).height() - $(window).height()) {
        var rootURL = 'http://localhost:8888/test.json'
        $.ajax({
        url: rootURL,
        method: 'GET',
        dataType: 'json'
      }).done(function (responseData) {
        var listings = responseData.listings;
        for (var i = 0; i < listings.length; i++) {
          var listing = $('#car-list');
          $('#name').append(listings[i].Name);
          $('#price').append(listings[i].Price);
          $('#photo').append('<img src="' + listings[i].Photo + '"/>');
          $('#retailer').append(listings[i].Retailer);
          $('#kilometres').append(listings[i].Kilometres);
          $('#transmission').append(listings[i].Transmission);
          $('#exterior').append(listings[i].Exterior);
          $('#interior').append(listings[i].Interior);
          $('#vin').append(listings[i].VIN);
          $('#drive-train').append(listings[i].DriveTrain);
        }
      }).fail(function(responseData) {
        console.log('FAIL. You dun goofed!');
      $('#car-list').append('There was an unexpected error while processing your request.');
      }).always(function() {
        console.log('Some stuff happened. Now it is done.')
      });
      };
    });

// Youtube Video Embed

$(document).on('click','.play-button',function(e) {
  e.preventDefault();
  // Prevents default behaviour on YouTube play function
  var wrapper = $('.video-wrapper');
  videoPlay(wrapper);
});
function videoPlay(frame) {
  var src = $('.video-placeholder');
  src.replaceWith("<iframe class='video-frame video' frameborder='0' allowTransparency='true' src='https://www.youtube.com/embed/Ldjmb15Jsx0?autoplay=1&modestbranding=1&rel=0&showinfo=0&color=white'></iframe>");
  // Swaps attributes in HTML, replacing placeholder div with iframe HTML, effectively making the video autoplay when js button event is triggered.
}
});
