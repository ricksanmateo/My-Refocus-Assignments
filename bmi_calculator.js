// BMI Calculator


function bmi_calculator(height, weight) {
  let bmi = (weight / ((height * height) / 10000)).toFixed(2);

  if (bmi < 18.6) {
    console.log("BMI: " + bmi + " Underweight!")
  } else if (bmi >= 18.6 && bmi < 24.9) {
    console.log("BMI: " + bmi + " Normal!")
  } else {
    console.log("BMI: " + bmi + " Overweight!")
  }
}


bmi_calculator(127,86); //cm, kg