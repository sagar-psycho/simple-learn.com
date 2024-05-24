function addNumbers() {
    // Get input values
    var num1 = parseFloat(document.getElementById('num1').value);
    var num2 = parseFloat(document.getElementById('num2').value);

    // Check if the input is valid
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('result').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation').innerHTML = "";
    } else {
        // Perform addition and display result
        var sum = num1 + num2;
        document.getElementById('result').innerHTML = "Sum: " + sum;
        document.getElementById('explanation').innerHTML = "The sum of " + num1 + " and " + num2 + " is calculated as " + num1 + " + " + num2 + " = " + sum + ".";
    }
}
// subtraction
function performSubtraction() {
    // Get input values
    var num3 = parseFloat(document.getElementById('num3').value);
    var num4 = parseFloat(document.getElementById('num4').value);

    // Check if the input is valid
    if (isNaN(num3) || isNaN(num4)) {
        document.getElementById('result1').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation1').innerHTML = "";
    } else {
        // Perform subtraction and display result1
        var difference = num3 - num4;
        document.getElementById('result1').innerHTML = "Result: " + difference;
        document.getElementById('explanation1').innerHTML = "The difference of " + num3 + " and " + num4 + " is calculated as " + num3 + " - " + num4 + " = " + difference + ".";
    }
}
// Mu
function performMultiplication() {
    // Get input values
    var num5 = parseFloat(document.getElementById('num5').value);
    var num6 = parseFloat(document.getElementById('num6').value);

    // Check if the input is valid
    if (isNaN(num5) || isNaN(num6)) {
        document.getElementById('result3').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation3').innerHTML = "";
    } else {
        // Perform multiplication and display result3
        var product = num5 * num6;
        document.getElementById('result3').innerHTML = "Sum: " + product;
        document.getElementById('explanation3').innerHTML = "The product of " + num5 + " and " + num6 + " is calculated as " + num5 + " * " + num6 + " = " + product + ".";
    }
}
// Divsion
function performDivision() {
    // Get input values
    var num7 = parseFloat(document.getElementById('num7').value);
    var num8 = parseFloat(document.getElementById('num8').value);

    // Check if the input is valid
    if (isNaN(num7) || isNaN(num8)) {
        document.getElementById('result4').innerHTML = "Please enter valid numbers.";
        document.getElementById('explanation4').innerHTML = "";
    } else {
        // Check for division by zero
        if (num8 === 0) {
            document.getElementById('result4').innerHTML = "Cannot divide by zero.";
            document.getElementById('explanation4').innerHTML = "";
        } else {
            // Perform division and display result
            var quotient = num7 / num8;
            document.getElementById('result4').innerHTML = "Quotient: " + quotient;
            document.getElementById('explanation4').innerHTML = "The quotient of " + num7 + " divided by " + num8 + " is calculated as " + num7 + " / " + num8 + " = " + quotient + ".";
        }
    }
}
// Tables
function generateTable() {
    // Get input value
    var num9 = parseInt(document.getElementById('num9').value);

    // Check if the input is valid
    if (isNaN(num9)) {
        document.getElementById('result5').innerHTML = "Please enter a valid number.";
    } else {
        // Generate and display the multiplication table
        var tableHTML = "<h2>Multiplication Table for " + num9 + "</h2><table border='1'>";
        for (var i = 1; i <= 10; i++) {
            tableHTML += "<tr><td>" + num9 + " x " + i + "</td><td>" +  "= " + (num9 * i + "  ") + "</td></tr>";
        }
        tableHTML += "</table>";
        document.getElementById('result5').innerHTML = tableHTML;
    }
}
// speak function

//Time and date
function updateTime() {
    const now = new Date();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const seconds = now.getSeconds().toString().padStart(2, '0');
    const date = now.toDateString();

    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
    document.getElementById('date').innerText = date;
}

// Update the time every second
setInterval(updateTime, 1000);

// Initial update
updateTime();

//Refresh
function clearInputFields() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
}

window.onload = clearInputFields;

// Number Validation
function validateNumberInput(inputId) {
    var input = document.getElementById(inputId).value;
    if (isNaN(input) || input === '') {
        alert("Please enter a valid number.");
        return false;
    }
    return true;
}


// Online or Ofline

var wasOnline = true;

function isOnline() {
    return navigator.onLine;
}

function showAlert() {
    if (isOnline()) {
        if (!wasOnline) {
            alert("Back Online");
        }
        wasOnline = true;
    } else {
            setTimeout(showAlert, 1000);
            alert("No Internet Connection!!");
        wasOnline = false;
    }
}

showAlert();

// Event listener for online and offline events
window.addEventListener("online", showAlert);
window.addEventListener("offline", showAlert);




//Clear inputs
function clearNumbers() {
    document.getElementById("num1").value = "";
    document.getElementById("num2").value = "";
    document.getElementById("result").innerHTML = "";
    document.getElementById("explanation").innerHTML = "";
}

//Sub clear

function clearNumbers1() {
    document.getElementById("num3").value = "";
    document.getElementById("num4").value = "";
    document.getElementById("result1").innerHTML = "";
    document.getElementById("explanation1").innerHTML = "";
}

// Sum

function clearNumbers3() {
    document.getElementById("num5").value = "";
    document.getElementById("num6").value = "";
    document.getElementById("result3").innerHTML = "";
    document.getElementById("explanation3").innerHTML = "";
}

//Div clear

function clearNumbers4() {
    document.getElementById("num7").value = "";
    document.getElementById("num8").value = "";
    document.getElementById("result4").innerHTML = "";
    document.getElementById("explanation4").innerHTML = "";
}

//Table

function clearNumbersR() {
    document.getElementById("num9").value = "";
    document.getElementById("result5").innerHTML = "";
    
}