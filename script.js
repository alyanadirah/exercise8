function totalPrinciple(){
  let totalPrinciple = principal-deposit;
  return totalPrinciple;
}

function totalInterest(){
  let totalInterest = (interest/100)*totalPrinciple*years;
  return totalInterest
}

function totalToPay(){
    let totalToPay = totalInterest+totalPrinciple;
    return totalToPay;
}

function monthlyToPay(){
  let monthlyToPay = totalToPay/years/12;
  return monthlyToPay;
}

let button = document.getElementById("kira");
button.addEventListener("click", function(){
  let num = document.getElementById("monthlyToPay").value;
  document.getElementById("payment").innerHTML = monthlyToPay();
});
