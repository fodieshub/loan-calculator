// Listen for Submit
document.getElementById('loan-form').addEventListener('submit', function(e){

  //Hide Result
  document.getElementById('result').style.display = 'none';
  //Show Result
  document.getElementById('loading').style.display = 'block';


  setTimeout(calculateResults, 2000);

  e.preventDefault();
});

//Submit Button
function calculateResults() {

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

    //Show Result
    document.getElementById('result').style.display = 'block';

    //Hide Loader
    document.getElementById('loading').style.display = 'none';

  } else {
    showError('Please, Check Your Numbers');
  }

}
//Show Error
function showError(error) {

   //Hide Result
   document.getElementById('result').style.display = 'none';

   //Hide Loader
   document.getElementById('loading').style.display = 'none';
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