function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}
function euroToDollars(){

  var amount = parseInt(document.getElementById("value1").value);
//euro to dollars calculation
  var dollars = amount * 1.06;
  var message = amount + ' euros converts to ' + dollars + ' US Dollars.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

function euroToYen(){

  var amount = parseInt(document.getElementById("value1").value);
//euro to yen calculation
  var yen = amount * 121.12;
  var message = amount + ' euros converts to ' + yen + '  Japanese Yen.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}

function euroToBitcoin(){

  var amount = parseInt(document.getElementById("value1").value);
//euro to bitcoin calculation
  var bitcoin = amount * 0.00082;
  var message = amount + ' euros converts to ' + bitcoin + ' Bitcoin.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}