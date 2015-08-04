// add scripts

$(document).on('ready', function() {

  var valueArray = [];
  var formInput = $('.form-input');

  $('form').on('submit', function(event){

    event.preventDefault();

    for (var i = 0; i < formInput.length; i++) {
      var numValue = $('.form-input:eq('+i+')').val();
      valueArray.push(numValue);
      $('.form-input:eq('+i+')').val('');
    }


    var price = parseInt(valueArray[0]).toFixed(2);
    var tip = parseInt(valueArray[2]).toFixed(2);
    var tax = parseInt(valueArray[1]).toFixed(2);
    var total = calculateTip(price, tip) + parseInt(valueArray[0]) + calculateTax(price, tax);

    $('p:eq(0)').html('Subtotal: $' + price);

    $('p:eq(1)').html('Tip: $'+ calculateTip(price, tip).toFixed(2));

    $('p:eq(2)').html('Total: $' + total.toFixed(2));

  });



});
