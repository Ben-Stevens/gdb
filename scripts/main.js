$(function(){
  if ($('#fullpage').length) {
    $('#fullpage').fullpage({
      navigation: true
    });
  }


  var price = beer.price.toFixed(2);
  $('#price-display').text("CPP: £" + price);
});
