
let weight, height, measure, bmi, error ;

function calculate() {

	weight = document.getElementById("weight").value;
	height = document.getElementById("height").value;

	error = "Please Enter Valid Numbers";
	height = height / 100;
	height = height * height;
	bmi = weight/height;
	bmi = bmi.toFixed(1);

	if (bmi <= 18.4) {
		measurement = "Your BMI is " + bmi + " => Underweight";
	} else if (bmi >= 18.5 && bmi <= 24.9) {
		measurement = "Your BMI is " + bmi + " => Normal";
	} else if (bmi >= 25 && bmi <= 29.9) {
		measurement = "Your BMI is " + bmi  + " => Overweight";
	} else if (bmi >= 30) {
		measurement = "Your BMI is " + bmi +  " => Obesity";
	}
	

	if (weight == 0 || height==0 ) {

		document.getElementById("result").innerHTML = error;

	 } else {

		document.getElementById("result").innerHTML = measurement;
	}
	
	if (weight < 0 || height < 0) {
		document.getElementById("result").innerHTML = error;
	}
}
