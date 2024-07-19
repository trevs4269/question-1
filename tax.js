<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Employee Pay Calculator</title>
</head>
<body>
    <script>
        // Function to prompt for and calculate employee pay and tax
        function calculatePayAndTax() {
            // Prompt user for employee details
            let employeeName = prompt("Enter employee name:");
            let hoursWorked = parseFloat(prompt("Enter hours worked:"));
            let ratePerHour = parseFloat(prompt("Enter rate per hour:"));
            
            // Calculate basic pay
            let basicPay = hoursWorked * ratePerHour;

            // Initialize tax variable
            let tax = 0;

            // Calculate tax based on basic pay
            if (basicPay > 50000) {
                tax = 0.20 * basicPay;
            } else if (basicPay > 20000) {
                tax = 0.10 * basicPay;
            } else {
                tax = 0;
            }

            // Calculate net pay
            let netPay = basicPay - tax;

            // Display results
            alert(Employee Name: ${employeeName}\n +
                  Hours Worked: ${hoursWorked}\n +
                  Rate per Hour: $${ratePerHour.toFixed(2)}\n +
                  Basic Pay: $${basicPay.toFixed(2)}\n +
                  Tax: $${tax.toFixed(2)}\n +
                  Net Pay: $${netPay.toFixed(2)});
        }

        // Call the function to run the program
        calculatePayAndTax();
    </script>
</body>
</html>