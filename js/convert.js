var myAlert = 'Please enter a value greater then zero'
var myNull = 'You have not entered a value in the input box'

function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
	//check input greater than zero, display conversion
	if(amount>0) {
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}
		//if not greater than zero, display alert dialog window
		else if(amount == 0) {
		alert(myAlert)
		}
		
			//alert when left blank
			else{
			alert(myNull)
			}	
}
function euroToDollars(){

  var amount = parseInt(document.getElementById("value1").value);
  //euro to dollars calculation
  var dollars = amount * 1.06;
  var message = amount + ' euros converts to ' + dollars + ' US Dollars.';
  
	if(amount>0) {
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}
		//if not greater than zero, display alert dialog window
		else if(amount == 0) {
		alert(myAlert)
		}
		
			//alert when left blank
			else{
			alert(myNull)
			}	
}

function euroToYen(){

  var amount = parseInt(document.getElementById("value1").value);
//euro to yen calculation
  var yen = amount * 121.12;
  var message = amount + ' euros converts to ' + yen + '  Japanese Yen.';
  
	if(amount>0) {
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}
		//if not greater than zero, display alert dialog window
		else if(amount == 0) {
		alert(myAlert)
		}
		
			//alert when left blank
			else{
			alert(myNull)
			}	
}

function euroToBitcoin(){

  var amount = parseInt(document.getElementById("value1").value);
//euro to bitcoin calculation
  var bitcoin = amount * 0.00082;
  var message = amount + ' euros converts to ' + bitcoin + ' Bitcoin.';
  
	if(amount>0) {
	console.log(message);
	document.getElementById("resultsentence").innerHTML = message;
	}
		//if not greater than zero, display alert dialog window
		else if(amount == 0) {
		alert(myAlert)
		}
		
			//alert when left blank
			else{
			alert(myNull)
			}	
}