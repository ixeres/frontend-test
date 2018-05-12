$(document).ready(function () {

// Car listings AJAX/JSON

  $(window).scroll(function() {
      if($(window).scrollTop() == $(document).height() - $(window).height()) {
        var rootURL = 'test.json'
        $.ajax({
        url: rootURL,
        method: 'GET',
        dataType: 'html'
      }).done(function (responseData) {
        console.log((responseData));
        $('#car-name').append(responseData.Name);
        $('#car-price').append(responseData.Price);
        $('#car-photo').append(responseData.Photo);
        $('#retailer').append(responseData.Retailer);
        $('#kilometres').append(responseData.Kilometres);
        $('#transmission').append(responseData.Transmission);
        $('#exterior').append(responseData.Exterior);
        $('#interior').append(responseData.Interior);
        $('#vin').append(responseData.VIN);
        $('#drive-train').append(responseData.DriveTrain);
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
