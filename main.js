UserBill = document.getElementById('bill'); UserTip  = document.getElementById('tip'); 
result   = document.getElementById('total'); btd  = document.getElementById('calculate');

function Calculate()
{
  const TotValue = UserBill.value * (1 + (UserTip.value / 100));
 
  if(TotValue < 0)
  {
    result.innerHTML = 'Only positive values! Please try again';
    return;
  }
  result.innerHTML = `$${TotValue}`;
}

btd.addEventListener("click", Calculate);