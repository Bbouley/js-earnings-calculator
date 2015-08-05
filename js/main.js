// add scripts

$(document).on('ready', function() {

  var mealArray = [];
  var totalTip = 0;
  var mealNumber = 0;

  var Meal = function(price, tax, tip){
    this.price = price;
    this.tax = tax;
    this.tip = tip;
  };

   Meal.prototype.append = function(){
      $('p:eq(0)').html('Subtotal: $' + parseInt(this.price).toFixed(2));
      $('p:eq(1)').html('Tip: $'+ parseInt(calculateTax(this.price, this.tax)).toFixed(2));
      $('p:eq(2)').html('Total: $' + parseInt(calculateTip(this.price, this.tip)).toFixed(2));
    };

    Meal.prototype.calculateTotalTip = function(){
      totalTip += parseInt(calculateTip(this.price, this.tip));
    };


  $('form').on('submit', function(event){

    event.preventDefault();

    var meal = new Meal($('.form-input:eq(0)').val(), $('.form-input:eq(1)').val(), $('.form-input:eq(2)').val());

    mealArray.push(meal);
    console.log(mealArray);

    mealArray[mealNumber].append();
    mealArray[mealNumber].calculateTotalTip();

    $('p:eq(3)').html('Total Tips: $' + parseInt(totalTip).toFixed(2));
    $('p:eq(4)').html('Meal Count : ' + mealArray.length);
    $('p:eq(5)').html('Average Tip: $' + (totalTip/mealArray.length).toFixed(2));

    mealNumber += 1;

  });

  $('.btn:eq(2)').on('click', function(){

    $('p:eq(0)').html('Subtotal:');
    $('p:eq(1)').html('Tip: ');
    $('p:eq(2)').html('Total: ');
    $('p:eq(3)').html('Total Tips:');
    $('p:eq(4)').html('Meal Count:');
    $('p:eq(5)').html('Average Tip:');

    mealArray = [];
    totalTip = 0;
    mealNumber = 0;


  });


  $('.btn:eq(1)').on('click', function(event){

    ($('.form-input:eq(0)').val(''));
    ($('.form-input:eq(1)').val(''));
    ($('.form-input:eq(2)').val(''));

  });

});
