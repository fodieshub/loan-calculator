// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', calculateResults);

//Submit Button
function calculateResults(e) {
  console.log('calculating');

  //UI Variables

  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const year = document.getElementById('year');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  //Formula for the Calculator
  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayment = parseFloat(year.value) * 12;

  //Calculate Monthly Payment
  const x = Math.pow(1 + calculatedInterest, calculatedPayment);
  const monthly = (principal * x * calculatedInterest) / (x - 1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayment).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayment) - principal).toFixed(2);
  } else {
    showError('Please, Check Your Numbers');
  }

  e.preventDefault();
}
//Show Error
function showError(error) {

  //Create a div
  const errorDiv = document.createElement('div');

  //Get Element
  const card = document.querySelector('.card');
  const heading = document.querySelector('.heading');

  //Add Class
  errorDiv.className = 'alert alert-danger';

  //Create Text Node and Append Child
  errorDiv.appendChild(document.createTextNode(error));

  //Insert Error Above Heading
  card.insertBefore(errorDiv, heading);

  //Clear Error Message
  setTimeout(clearError , 3000);
}

function clearError(){
  console.log('Show...');
  document.querySelector('.alert').remove();
}