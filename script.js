$(document).ready(function () {

// Car listings AJAX/JSON Query

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
  var button = $(this);
  var wrapper = $('.video-wrapper');
  wrapper.fadeOut()
  // Fades out overlay text/video thumbnail/play button on click
  videoPlay(wrapper);
});
function videoPlay(wrapper) {
  var iframe = wrapper.find('.video');
  var src = iframe.data('src');
  wrapper.addClass('video-wrapperActive');
  iframe.attr('src',src);
  // Swaps iframe attributes in HTML from data-src to src, effectively making the video autoplay when js button event is triggered.
}
});
