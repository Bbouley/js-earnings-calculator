function calculateTip(price,percent){
  return (price/100)*percent;
}

function calculateTax(price, taxAmount){
  return (price/100)*taxAmount;
}

module.exports={
  calculateTip:calculateTip,
  calculateTax:calculateTax
};
