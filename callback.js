// Callback's

function discount(percentage, amount) {
  var discounted_amount = amount - (amount*(percentage / 100));
  return discounted_amount
}


function age_checker(age) {
  if (age >= 10) {
    return true
  }
  return false
}

// console.log(age_checker(11));

function calculate(customer_group, discount_func){
  const group_count = customer_group.length;
  var sub_total = 299 * group_count;


  if (group_count < 6) {
    return `Sorry, No Discount Bill: ${sub_total}`;
  }

  const all_aged_10_and_above = customer_group.every(age_checker);
  var discount = 0;
  var grand_total

  if (all_aged_10_and_above == true) {
    discount = 15;
  } else {
    discount = 10;
  }
  grand_total = discount_func(discount, sub_total);
  
  return `${discount}% discount. Bill: ${grand_total}`
}

customer_group1 = [8,12,11,11,10,8,2,4,5];

customer_group2 = [10,11,11,10,13,19,10,14];

customer_group3 = [12,12,1,4]

// customer_group4 = [10,11,11,21,23,16];


console.log(calculate(customer_group1, discount));
console.log(calculate(customer_group2, discount));
console.log(calculate(customer_group3, discount));
// console.log(calculate(customer_group4, discount));